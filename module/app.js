// IMPORTS
import * as PROD from "./products.js";
import * as UI from "./ui.js";
import * as CART from "./cart.js";

/**
 * Fonction exportée qui initialise toute l'application selon les différents modules
 */
export function init(){

    // Exo3: On affiche tous les produits
    UI.buildProductsList(PROD.products);

    //on charge les produit stocké dans le localstorage et on contruit le panier en fonction
    PROD.chargerLocalStorage();
    UI.buildCart();

    // Exo 5: On donne un event keyup sur la barre de recherche
    let barreRecherche = document.querySelector("#product-search");
    barreRecherche.addEventListener("keyup", (event)=> {
        let zoneProduit = document.getElementById("product-list");
        zoneProduit.innerHTML = "";
        UI.buildProductsList(PROD.search(barreRecherche.value));
    });

    let panierVideTexte = document.getElementById("empty-cart");
    panierVideTexte.addEventListener("click", function (){
        CART.emptyCart()
        UI.buildCart()
    })

}
