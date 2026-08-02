/* ====================================================================
   PawBridge — traduction du site
   ====================================================================

   L'espagnol est écrit en dur dans le HTML : sans JavaScript, ou si ce
   script échoue, chaque page reste entièrement lisible dans la langue
   du pays. L'anglais est appliqué par-dessus.

   Un seul dictionnaire pour les quatre pages. Chaque page n'utilise
   qu'une partie des clés — le moteur ne touche qu'aux éléments qu'il
   trouve, une clé absente de la page est simplement ignorée.

   Priorité : ?lang= dans l'URL  >  choix mémorisé  >  langue du
   navigateur  >  espagnol.

   ⚠️ La règle est : anglais UNIQUEMENT si le navigateur est en anglais.
   Tout le reste — français, russe, ukrainien, allemand, arabe — reçoit
   l'espagnol. Quelqu'un qui vit à Alicante comprend l'espagnol bien
   plus souvent que l'anglais, quelle que soit sa langue maternelle.

   POUR AJOUTER UNE LANGUE : copier le bloc EN, traduire les valeurs,
   et l'ajouter à DICTS. Aucune page HTML n'est à retoucher.
   ==================================================================== */

var API = "https://pawbridge-backend-server.onrender.com";

var EN = {
  /* --- Navigation, commune à toutes les pages --------------------- */
  // Libellés courts, et de longueur comparable dans les deux langues :
  // en espagnol, « Por qué PawBridge » et « Trabaja con nosotros »
  // faisaient déborder le menu, qui passait alors à la ligne — la barre
  // n'avait pas la même allure selon la langue.
  "nav.services":"Services","nav.how":"How it works","nav.why":"Why us",
  "nav.faq":"FAQ","nav.work":"Join us","nav.waitlist":"Notify me","nav.home":"Home",

  /* --- Accueil ---------------------------------------------------- */
  "hero.title":"Pet care<br>in Alicante",
  "hero.lead":"We connect pet owners with independent professional sitters in the city. Book in a few minutes, pay securely, follow your service.",
  "hero.cta1":"I have a pet","hero.cta2":"I want to be a sitter",

  "services.title":"Services",
  "services.lead":"Each sitter sets their own rates. Prices shown are indicative and include VAT.",
  "svc1.title":"Walks","svc1.text":"Individual walks adapted to your dog's routine.","svc1.price":"from €13.20 · 1 h",
  "svc2.title":"Home visits","svc2.text":"Food, water, litter tray, medication and company at your place.","svc2.price":"from €16.50 · 30 min",
  "svc3.title":"Day care and boarding","svc3.text":"Your pet looked after during the day or while you travel.","svc3.price":"from €19.80 · per day",
  "svc4.title":"Vet accompaniment","svc4.text":"Pick-up, transport and accompaniment to the appointment.","svc4.price":"from €33.00 · 2 h",

  "how.title":"How it works",
  "how.lead":"No phone calls, no waiting, no surprises on the price.",
  "step1.title":"You pick a service and a time",
  "step1.text":"Only the slots where a sitter is genuinely free are shown.",
  "step2.title":"A sitter accepts",
  "step2.text":"They have 10 minutes to reply. If they can't, the request moves to another professional.",
  "step3.title":"Only then do you pay",
  "step3.text":"The payment link is generated after acceptance. You never pay for an unconfirmed service.",
  "step4.title":"The sitter does the job",
  "step4.text":"You get the details when it's finished and you can rate the experience.",

  "why.title":"Why PawBridge",
  "why.lead":"We're a small, local platform. That brings concrete advantages, and also limits we'd rather state out loud.",
  "why.them":"Large platforms",
  "why.r1":"Commission charged to the sitter",
  "why.r2":"Service fee charged to the client",
  "why.r3":"When you're charged","why.r3a":"After a sitter accepts","why.r3b":"When you book",
  "why.r4":"Coverage","why.r4a":"Alicante and surroundings only","why.r4b":"All of Spain",
  "why.r5":"Number of sitters","why.r5a":"We're just starting","why.r5b":"Thousands",
  "why.r6":"Support","why.r6a":"Direct, same day, in Spanish or English","why.r6b":"Support form",
  "why.note":"On a one-hour walk at €12, the sitter keeps €10.80 with us against €10.20 on a large platform, and the client pays €13.20 instead of €13.80. Less commission for us, a better split for both.",

  /* Cartes qui mènent aux autres pages */
  "go.title":"Where do you want to go?",
  "go.waitTitle":"I have a pet",
  "go.waitText":"Join the waiting list and we'll let you know when we open in your area.",
  "go.workTitle":"I want to be a sitter",
  "go.workText":"10 % commission, you set your own rates, no exclusivity.",
  "go.faqTitle":"Questions",
  "go.faqText":"How we choose sitters, who holds your keys, when you're charged.",
  "go.more":"Read more →",

  /* --- Page liste d'attente --------------------------------------- */
  "wait.title":"Do you have a pet?",
  "wait.lead":"We're still gathering our first sitters. Leave us your email and we'll let you know as soon as someone is available in your area.",
  "wait.b1":"<strong>No commitment.</strong> Just one message when we open in your neighbourhood.",
  "wait.b2":"<strong>No marketing.</strong> We don't use your email for anything else.",
  "wait.b3":"<strong>Unsubscribe whenever you want</strong>, by writing to contact@pawbridge.es.",
  "wait.honest":"To be straight with you: we don't yet know when we'll open in each area. It depends on finding professional sitters near you. The more people waiting in a neighbourhood, the sooner we look there.",
  "wait.email":"Email address *",
  "wait.city":"Your area or neighbourhood",
  "wait.cityPlaceholder":"Alicante centre, San Vicente…",
  "wait.animal":"What pet do you have?",
  "wait.select":"Select…","wait.dog":"Dog","wait.cat":"Cat","wait.other":"Other",
  "wait.services":"Which service are you interested in?",
  "wait.consent":"I agree that PawBridge stores my email to let me know when the service is available in my area, in line with the <a href=\"privacidad.html\">privacy policy</a>.",
  "wait.submit":"Notify me",

  /* --- Page cuidadores -------------------------------------------- */
  "work.title":"Work with us",
  "work.lead":"We're looking for the first professional sitters in Alicante. If you care for animals for a living, this is for you.",
  "work.b1":"<strong>Only 10 % commission.</strong> Large platforms charge 15 % to the sitter and another 15 % to the client.",
  "work.b2":"<strong>Founder Rate: 0 % for 6 months</strong> for the first 8 sitters.",
  "work.b3":"<strong>You set your own rates</strong> and your working hours.",
  "work.b4":"<strong>You accept or decline freely.</strong> Declining has no consequence whatsoever.",
  "work.b5":"<strong>No exclusivity.</strong> You can keep working on other platforms.",
  "work.b6":"<strong>Automatic payout</strong> after each service, through Stripe.",
  "work.req":"<strong>Requirements</strong><br>Registered as self-employed (autónomo), or willing to register; professional liability insurance; demonstrable experience with animals; and residence in Alicante or nearby.",
  "work.process":"How the selection works",
  "work.p1":"You fill in this form",
  "work.p2":"A 15-minute phone call",
  "work.p3":"An in-person interview in Alicante, about 40 minutes",
  "work.p4":"We check your documents and two references",
  "work.p5":"You join the platform and set up payouts, about 20 minutes",

  "form.name":"Full name *","form.email":"Email address *","form.phone":"Phone",
  "form.city":"City or area","form.services":"Services you want to offer *",
  "form.svc1":"Walks","form.svc2":"Home visits","form.svc3":"Day care","form.svc4":"Vet accompaniment",
  "form.autonomo":"Are you registered as self-employed (autónomo)?",
  "form.select":"Select…","form.opt1":"Yes, already registered",
  "form.opt2":"Not yet, but I'm willing to","form.opt3":"No",
  "form.experience":"Your experience with animals",
  "form.submit":"Send application",
  "form.note":"By sending this you agree that we process your data to handle your application, in line with our <a href=\"privacidad.html\">privacy policy</a>. We reply within 48 hours.",
  "form.cityPlaceholder":"Alicante, San Vicente…",
  "form.expPlaceholder":"Professional, at a shelter, as a volunteer…",

  /* --- Page questions --------------------------------------------- */
  "faq.title":"Frequently asked questions",
  "faq.lead":"The ones people actually ask, answered straight.",
  "faq.q1":"How do you choose your sitters?",
  "faq.a1a":"Every application goes through a face-to-face interview. We require registration as self-employed (autónomo), a valid professional liability insurance policy, a DNI or NIE, and we check two references by phone.",
  "faq.a1b":"We're clear about what we <em>don't</em> do yet: we do not run systematic criminal record checks. We say so because we'd rather you knew than assumed.",
  "faq.q2":"What if my pet gets ill or hurt?",
  "faq.a2a":"The sitter must tell you immediately through the app and, if it's life-threatening, go to the vet. They cannot give any medication you haven't expressly authorised.",
  "faq.a2b":"Every sitter carries their own professional liability insurance, covering damage arising from their activity.",
  "faq.q3":"Who has the keys to my home?",
  "faq.a3":"Only the sitter carrying out the service, and only for as long as needed. They undertake by contract to use them solely for the service and not to enter rooms unrelated to it.",
  "faq.q4":"When am I charged?",
  "faq.a4":"Only after a sitter accepts your request. While you wait for a reply you're charged nothing, and if nobody is available the request is cancelled at no cost.",
  "faq.q5":"Can I cancel?",
  "faq.a5":"Yes. Before payment, freely. After: 100 % refund if you cancel more than 24 h ahead, 50 % between 24 h and 2 h before. If the sitter cancels, you're refunded in full.",
  "faq.q6":"Does the app already exist?",
  "faq.a6":"It's built and in testing. It isn't on the App Store yet — we're gathering our first sitters before opening it to the public. Write to us if you'd like to be notified.",
  "faq.q7":"Do you cover the whole province?",
  "faq.a7":"For now only Alicante city, Sant Joan and San Vicente del Raspeig. We'd rather cover a small area well than a large one badly.",
  "faq.q8":"What language does the app work in?",
  "faq.a8":"The app follows your phone's language automatically, in Spanish or English. Many of our clients and sitters aren't Spanish, and this felt like the least we could do.",

  /* --- Pied de page ------------------------------------------------ */
  "footer.city":"Alicante, Spain",
  "footer.privacy":"Privacy Policy","footer.terms":"Terms and Conditions",
  "footer.legalLang":"Legal documents available in Spanish only.",
  "footer.disclaimer":"PawBridge is an intermediation platform. Pet care services are provided by independent self-employed professionals.",

  /* --- Messages produits par le script ----------------------------- */
  "js.pickService":"Please select at least one service.",
  "js.sending":"Sending…",
  "js.ok":"We've received your application. We'll be in touch within 48 hours.",
  "js.failed":"We couldn't send your application.",
  "js.offline":"No connection to the server. Write to us at contact@pawbridge.es.",
  "js.wConsent":"Please tick the box so we can store your email.",
  "js.wOk":"We'll let you know as soon as sitters are available in your area.",
  "js.wFailed":"We couldn't add you to the list.",

  /* Titres de page, un par page */
  "title.home":"PawBridge — Pet care in Alicante",
  "title.wait":"Notify me — PawBridge",
  "title.work":"Work with us — PawBridge",
  "title.faq":"Frequently asked questions — PawBridge"
};

/* Textes espagnols qui n'existent nulle part dans le HTML : produits
   par le script, donc à définir ici et non capturés depuis la page. */
var ES_JS = {
  "js.pickService":"Selecciona al menos un servicio.",
  "js.sending":"Enviando…",
  "js.ok":"Hemos recibido tu candidatura.",
  "js.failed":"No hemos podido enviar tu candidatura.",
  "js.offline":"Sin conexión con el servidor. Escríbenos a contact@pawbridge.es.",
  "js.wConsent":"Marca la casilla para que podamos guardar tu correo.",
  "js.wOk":"Te avisaremos en cuanto haya cuidadores disponibles en tu zona.",
  "js.wFailed":"No hemos podido añadirte a la lista.",
  "form.cityPlaceholder":"Alicante, San Vicente…",
  "form.expPlaceholder":"Profesional, en protectora, como voluntario/a…",
  "wait.cityPlaceholder":"Alicante centro, San Vicente…"
};

/* Sauvegarde de la version espagnole avant toute substitution, pour
   pouvoir revenir en arrière sans recharger la page. */
var ES = {};
document.querySelectorAll("[data-i18n]").forEach(function (el) {
  ES[el.getAttribute("data-i18n")] = el.textContent;
});
document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
  ES[el.getAttribute("data-i18n-html")] = el.innerHTML;
});
var ES_TITLE = document.title;

var lang = "es";

function t(key) {
  if (lang === "en") return EN[key] !== undefined ? EN[key] : (ES[key] || ES_JS[key] || key);
  return ES[key] !== undefined ? ES[key] : (ES_JS[key] || key);
}

function applyLang(next) {
  lang = next === "en" ? "en" : "es";
  var dict = lang === "en" ? EN : ES;

  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    var v = dict[el.getAttribute("data-i18n")];
    if (v !== undefined) el.textContent = v;
  });
  document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
    var v = dict[el.getAttribute("data-i18n-html")];
    if (v !== undefined) el.innerHTML = v;
  });

  // Placeholders : ils n'existent que sur certaines pages.
  var ph = {
    city: "form.cityPlaceholder",
    experience: "form.expPlaceholder",
    wcity: "wait.cityPlaceholder"
  };
  Object.keys(ph).forEach(function (id) {
    var el = document.getElementById(id);
    if (el) el.placeholder = t(ph[id]);
  });

  document.documentElement.lang = lang;
  var titleKey = document.body.getAttribute("data-title-key");
  if (lang === "en" && titleKey && EN[titleKey]) document.title = EN[titleKey];
  else document.title = ES_TITLE;

  document.querySelectorAll(".lang button").forEach(function (b) {
    b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
  });

  // Le choix suit la personne d'une page à l'autre.
  try { localStorage.setItem("pawbridge_lang", lang); } catch (e) {}
  markLinks();
}

/* Les liens internes portent la langue choisie.
 *
 * `localStorage` suffirait dans la plupart des cas, mais pas tous : en
 * navigation privée il peut être indisponible, et un lien partagé doit
 * arriver dans la bonne langue. Le paramètre d'URL est le seul moyen
 * fiable. On mémorise le href d'origine pour pouvoir faire l'aller et
 * le retour sans accumuler les paramètres. */
function markLinks() {
  document.querySelectorAll('a[href$=".html"], a[href*=".html?"]').forEach(function (a) {
    if (!a.dataset.href) a.dataset.href = a.getAttribute("href").split("?")[0];
    a.setAttribute("href", lang === "en" ? a.dataset.href + "?lang=en" : a.dataset.href);
  });
}

function initialLang() {
  var q = new URLSearchParams(location.search).get("lang");
  if (q === "en" || q === "es") return q;
  try {
    var saved = localStorage.getItem("pawbridge_lang");
    if (saved === "en" || saved === "es") return saved;
  } catch (e) {}

  var list = (navigator.languages && navigator.languages.length)
    ? navigator.languages
    : [navigator.language || "es"];
  for (var i = 0; i < list.length; i++) {
    var base = String(list[i]).toLowerCase().split("-")[0];
    if (base === "es") return "es";
    if (base === "en") return "en";
  }
  return "es";
}

document.querySelectorAll(".lang button").forEach(function (b) {
  b.addEventListener("click", function () { applyLang(b.dataset.lang); });
});

applyLang(initialLang());
