// IMPORTS
import * as CART from "./cart.js";

/**
 * Fonction pour gérer l'affichage d'un produit
 * @param produit produit qu'on souhaite afficher
 * @returns {HTMLDivElement} div
 */
function displayProduct(produit) {

    // On crée un nouvel elementdiv d'id product
    let div = document.createElement("div");
    div.setAttribute("class", "product");

    // On lui donne le contenu afin de générer l'affichage du produit en question
    div.innerHTML = `<div class="photo">
        <span class="mdi mdi-camera"></span>
        <a class="product-add2cart">
        <span class="mdi mdi-cart"></span>
        </a>
        </div>
        <div class="details">
        <div class="details-top">
        <strong class="bigger" data-type="ref">${produit.reference}</strong>
        <strong class="bigger" data-type="price">${produit.price}€</strong>
        </div>
        <div class="details-description">
        ${produit.description}
        </div>
        </div>`

    // On cherche les élements de class product-add2cart (logiquement, 1 seul) et on lui ajoute un even click
    let boutons = div.getElementsByClassName("product-add2cart");
    Array.from(boutons).forEach((elem) => {
        elem.addEventListener("click", (event)=>{
            CART.addToCart(produit);
        })
    });

    // on retourne le resultat
    return div;
}

/**
 * Fonction exporter qui generer l'affichage du tableau de produits donnés en parametres et qui l'insere dans le DOM
 * @param tabProduits: un tableau d'objets Produit
 */
export function buildProductsList(tabProduits) {
    let zoneProduit = document.getElementById("product-list");
    tabProduits.forEach(prod => zoneProduit.appendChild(displayProduct(prod)))
}
