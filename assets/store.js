/* ====================================================================
   PawBridge — liens vers les magasins d'applications
   ====================================================================

   ⚠️ TANT QUE CES DEUX VALEURS SONT null, AUCUN BADGE N'EST AFFICHÉ.

   C'est délibéré. Un bouton « Télécharger » qui mène à une page
   d'erreur perd le visiteur au premier clic, et il ne revient pas.
   Surtout, Apple et Google interdisent l'usage de leurs badges pour une
   application qui n'est pas publiée : s'en servir avant la validation,
   c'est se donner un motif de rejet supplémentaire au moment de la
   soumission.

   POUR ACTIVER, LE JOUR DE LA PUBLICATION :

     1. Remplace null par l'URL réelle, entre guillemets.
     2. Rien d'autre. Le bloc « todavía no está publicada » disparaît
        tout seul et les badges apparaissent.

   Un seul des deux peut être renseigné — c'est le cas normal, l'App
   Store et Google Play ne valident jamais le même jour.

   Format attendu :
     iOS      https://apps.apple.com/es/app/pawbridge/id0000000000
     Android  https://play.google.com/store/apps/details?id=com.pawbridge.app
   ==================================================================== */

var STORE = {
  ios: null,
  android: null,
};

(function () {
  var badges = document.getElementById("store-badges");
  var soon = document.getElementById("store-soon");
  if (!badges || !soon) return; // page sans section application

  var liens = [
    ["store-ios", STORE.ios],
    ["store-android", STORE.android],
  ];

  var publie = false;
  for (var i = 0; i < liens.length; i++) {
    var el = document.getElementById(liens[i][0]);
    var url = liens[i][1];
    // Contrôle du protocole : une valeur mal recopiée ne doit pas
    // produire un lien cassé ni, pire, un `javascript:`.
    if (!el || typeof url !== "string" || url.indexOf("https://") !== 0) continue;
    el.href = url;
    el.hidden = false;
    publie = true;
  }

  badges.hidden = !publie;
  soon.hidden = publie;
})();
