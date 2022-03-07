
/**
 * Fonction constructeur de ProduitPanier
 * @param product Produit
 * @param qty quantité
 */
function ProduitPanier(product, qty){
    this.product = product;
    this.qty = qty;
}

/**
 * Fonction exporté qui ajoute dans le panier le produit donné en parametre
 * s'il est déjà présent, on incrémente sa quantité de 1 elem.product.reference
 * @param produit produit a ajouter
 */
export function addToCart(produit) {
    let trouve = false;

    for (var i = 0; i < localStorage.length; i++) {
        let produitPers = JSON.parse (localStorage.getItem(localStorage.key(i)));

        if (produitPers.product.reference === produit.reference) {
            produitPers.qty++;
            localStorage.setItem(produitPers.product.reference, JSON.stringify(produitPers));
            trouve = true;
        }
     }
    if (!trouve) {
        let produitPa = {"product" : produit, "qty" : 1}
        localStorage.setItem(produit.reference, JSON.stringify(produitPa));
    }
}

/*
* Génère le total du panier 
*/
export function genericCalc(reduce) {
    let total = 0;

    for (var i = 0; i < localStorage.length; i++) {
        let produitPers = JSON.parse (localStorage.getItem(localStorage.key(i)));
        total += reduce(produitPers.qty*produitPers.product.price);
    }
    return total;
}
/*
* Compte le nombre d'article contenu dans le panier
*/
export function nbArticles() {
    let nb = 0;
   for (var i = 0; i < localStorage.length; i++) {
        let produitPers = JSON.parse (localStorage.getItem(localStorage.key(i)));
        nb += produitPers.qty;
   }
   return nb;
}

/*
* Vide le localstorage donc le panier
*/
export function emptyCart(){
    localStorage.clear();
}