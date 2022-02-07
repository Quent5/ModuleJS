function displayProduct(produit) {
    let div = document.createElement("div");
    div.setAttribute("class", "product");
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
    return div;
}

export function buildProductsList(tabProduits) {
    let zoneProduit = document.getElementById("product-list");
    tabProduits.forEach(prod => zoneProduit.appendChild(displayProduct(prod)))
}
