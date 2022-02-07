import * as PROD from "./products.js";
import * as UI from "./ui.js";

export function init(){

    // Exo3
    UI.buildProductsList(PROD.products);

    // Exo 5
    let barreRecherche = document.querySelector("#product-search");
    barreRecherche.addEventListener("keyup", (event)=> {
        let zoneProduit = document.getElementById("product-list");
        zoneProduit.innerHTML = "";
        UI.buildProductsList(PROD.search(barreRecherche.value));
    });

}
