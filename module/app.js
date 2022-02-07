// IMPORTS
import * as PROD from "./products.js";
import * as UI from "./ui.js";

/**
 * Fonction exportée qui initialise toute l'application selon les différents modules
 */
export function init(){

    // Exo3: On affiche tous les produits
    UI.buildProductsList(PROD.products);

    // Exo 5: On donne un event keyup sur la barre de recherche
    let barreRecherche = document.querySelector("#product-search");
    barreRecherche.addEventListener("keyup", (event)=> {
        let zoneProduit = document.getElementById("product-list");
        zoneProduit.innerHTML = "";
        UI.buildProductsList(PROD.search(barreRecherche.value));
    });

}
