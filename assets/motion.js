/* ====================================================================
   PawBridge — apparition au défilement
   ====================================================================

   Les blocs marqués `.reveal` montent de quelques pixels en entrant
   dans l'écran. C'est le seul mouvement du site avec les survols.

   Trois principes, dans l'ordre d'importance :

   1. LE CONTENU RESTE VISIBLE SI QUOI QUE CE SOIT ÉCHOUE.
      La classe `js-motion` est posée ici, par ce script. Tant qu'elle
      n'est pas là, la règle CSS qui masque les blocs ne s'applique
      pas. Sans JavaScript, fichier absent, erreur de chargement,
      navigateur ancien : tout s'affiche normalement. Une animation
      d'apparition ratée qui laisse la page blanche est bien pire que
      pas d'animation du tout.

   2. `prefers-reduced-motion` COUPE TOUT.
      Le mouvement provoque nausées et migraines chez certaines
      personnes. Ce réglage système est une demande médicale. On ne
      pose même pas la classe.

   3. UN ÉLÉMENT APPARU NE DISPARAÎT JAMAIS.
      L'observateur cesse de le surveiller dès qu'il est visible. Un
      bloc qui se rejoue à chaque passage rend une page longue
      épuisante — et illisible quand on remonte pour relire.
   ==================================================================== */
(function () {
  "use strict";

  var doc = document.documentElement;

  // Réglage système : on s'arrête là, sans rien masquer.
  var calme = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)");
  if (calme && calme.matches) return;

  // Navigateur trop ancien pour IntersectionObserver : on ne masque
  // rien plutôt que de masquer sans pouvoir révéler.
  if (!("IntersectionObserver" in window)) return;

  // À partir d'ici seulement, le CSS a le droit de masquer.
  doc.classList.add("js-motion");

  var blocs = document.querySelectorAll(".reveal");
  if (!blocs.length) return;

  var observateur = new IntersectionObserver(
    function (entrees) {
      for (var i = 0; i < entrees.length; i++) {
        if (!entrees[i].isIntersecting) continue;
        entrees[i].target.classList.add("in");
        observateur.unobserve(entrees[i].target);
      }
    },
    {
      // Déclenche un peu avant que le bloc touche le bas de l'écran :
      // arrivé au niveau du regard, il a fini son mouvement. Révélé
      // pile au bord, on voit l'animation au lieu de lire le texte.
      rootMargin: "0px 0px -12% 0px",
      threshold: 0.08,
    }
  );

  for (var i = 0; i < blocs.length; i++) observateur.observe(blocs[i]);

  // Filet : si un bloc est encore masqué au bout de deux secondes —
  // observateur en échec, onglet resté en arrière-plan, écran très
  // haut — on l'affiche sans condition. Le contenu prime toujours.
  window.setTimeout(function () {
    for (var i = 0; i < blocs.length; i++) blocs[i].classList.add("in");
  }, 2000);

  // ------------------------------------------------------------------
  // En-tête collant : ombre et compactage au défilement
  // ------------------------------------------------------------------
  // Sans l'ombre, l'en-tête marine se confond avec un hero marine et
  // paraît collé au contenu. `passive` évite de bloquer le défilement.
  var entete = document.querySelector("header");
  if (!entete) return;

  var accroche = function () {
    entete.classList.toggle("stuck", window.scrollY > 12);
  };
  accroche();
  window.addEventListener("scroll", accroche, { passive: true });
})();
