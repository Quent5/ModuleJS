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
                <img src=${produit.image}>

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
    let bouton = div.querySelector(".product-add2cart");
    bouton.addEventListener("click", (event)=>{
        CART.addToCart(produit);
        buildCart();
    });

    // on retourne le resultat
    return div;
}

function displayCart() {

    let concat = (acc, elem) => {
        return acc+`<tr>`+elem+`</tr>`;
    }
    let res = CART.panier.map(elem=>`<td data-type="ref">${elem.product.reference}</td>
                    <td data-type="qte">x${elem.qty}</td>
                    <td data-type="amount">${elem.product.price}€</td>`).reduce(concat, ``);

    return res;

}


/**
 * Fonction exporter qui generer l'affichage du tableau de produits donnés en parametres et qui l'insere dans le DOM
 * @param tabProduits: un tableau d'objets Produit
 */
export function buildProductsList(tabProduits) {
    let zoneProduit = document.getElementById("product-list");
    tabProduits.forEach(prod => zoneProduit.appendChild(displayProduct(prod)))
}

export function buildCart() {
    let zonePanier = document.getElementById("cart-content");
    zonePanier.innerHTML = displayCart();
    let nbArticlesPanier = document.getElementById("total-products");
    nbArticlesPanier.innerText = CART.nbArticles()
    let total = document.getElementById("cart-total");
    total.innerText = CART.genericCalc((elem)=>elem)+"€";
}
