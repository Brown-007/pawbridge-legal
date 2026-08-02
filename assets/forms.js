/* ====================================================================
   PawBridge — formulaires
   ====================================================================

   Deux formulaires, sur deux pages différentes : la candidature
   prestataire (cuidadores.html) et la liste d'attente client
   (avisame.html). Ce fichier est chargé partout mais ne fait rien si
   le formulaire correspondant n'est pas sur la page — d'où les
   vérifications d'existence avant chaque branchement.

   Dépend de i18n.js, chargé avant lui : API, t(), lang.
   ==================================================================== */

/* Les puces se colorent au clic, dans les deux formulaires. */
["services", "wservices"].forEach(function (id) {
  var box = document.getElementById(id);
  if (!box) return;
  box.addEventListener("change", function (e) {
    if (e.target.type === "checkbox") e.target.closest(".chip").classList.toggle("on", e.target.checked);
  });
});

/* ------------------------------------------------------------------
   Candidature prestataire
   ------------------------------------------------------------------ */
var fApp = document.getElementById("f");
if (fApp) {
  fApp.addEventListener("submit", async function (e) {
    e.preventDefault();
    var btn = document.getElementById("send");
    var msg = document.getElementById("msg");
    msg.className = "msg";

    var services = [].slice.call(document.querySelectorAll("#services input:checked"))
      .map(function (c) { return c.value; });
    if (services.length === 0) {
      msg.className = "msg err";
      msg.textContent = t("js.pickService");
      return;
    }

    btn.disabled = true;
    btn.textContent = t("js.sending");

    try {
      var res = await fetch(API + "/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: document.getElementById("name").value,
          email: document.getElementById("email").value,
          phone: document.getElementById("phone").value,
          city: document.getElementById("city").value,
          services: services,
          isAutonomo: document.getElementById("isAutonomo").value,
          experience: document.getElementById("experience").value,
          website: document.getElementById("website").value
        })
      });
      var data = await res.json();

      if (res.ok) {
        msg.className = "msg ok";
        // En anglais on n'affiche pas le message du serveur, qui est en
        // espagnol : mieux vaut notre propre phrase que deux langues
        // mélangées dans la même page.
        msg.textContent = lang === "en" ? t("js.ok") : (data.message || t("js.ok"));
        fApp.reset();
        [].forEach.call(document.querySelectorAll("#services .chip"), function (c) { c.classList.remove("on"); });
      } else {
        msg.className = "msg err";
        msg.textContent = (lang === "es" && data.error) ? data.error : t("js.failed");
      }
    } catch (err) {
      msg.className = "msg err";
      msg.textContent = t("js.offline");
    } finally {
      btn.disabled = false;
      btn.textContent = t("form.submit");
    }
  });
}

/* ------------------------------------------------------------------
   Liste d'attente client
   ------------------------------------------------------------------ */
var fWait = document.getElementById("w");
if (fWait) {
  fWait.addEventListener("submit", async function (e) {
    e.preventDefault();
    var btn = document.getElementById("wsend");
    var msg = document.getElementById("wmsg");
    msg.className = "msg";

    // Le consentement doit être un acte positif : on bloque tant que la
    // case n'est pas cochée, plutôt que d'enregistrer et de s'expliquer
    // après. C'est aussi ce que refuse le serveur de son côté.
    if (!document.getElementById("wconsent").checked) {
      msg.className = "msg err";
      msg.textContent = t("js.wConsent");
      return;
    }

    var services = [].slice.call(document.querySelectorAll("#wservices input:checked"))
      .map(function (c) { return c.value; });

    btn.disabled = true;
    btn.textContent = t("js.sending");

    try {
      var res = await fetch(API + "/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: document.getElementById("wemail").value,
          city: document.getElementById("wcity").value,
          animal: document.getElementById("wanimal").value,
          services: services,
          lang: lang,
          consent: true,
          website: document.getElementById("wwebsite").value
        })
      });
      var data = await res.json();

      if (res.ok) {
        msg.className = "msg ok";
        msg.textContent = lang === "en" ? t("js.wOk") : (data.message || t("js.wOk"));
        fWait.reset();
        [].forEach.call(document.querySelectorAll("#wservices .chip"), function (c) { c.classList.remove("on"); });
      } else {
        msg.className = "msg err";
        msg.textContent = (lang === "es" && data.error) ? data.error : t("js.wFailed");
      }
    } catch (err) {
      msg.className = "msg err";
      msg.textContent = t("js.offline");
    } finally {
      btn.disabled = false;
      btn.textContent = t("wait.submit");
    }
  });
}
