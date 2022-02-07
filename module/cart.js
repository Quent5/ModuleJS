// Tableau de ProduitPanier
let panier = [];

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
 * s'il est déjà présent, on incrémente sa quantité de 1
 * @param produit produit a ajouter
 */
export function addToCart(produit) {
    let trouve = false;
    panier.forEach((elem)=> {
            if (elem.reference === produit.reference) {
                elem.qty += 1;
                trouve = true;
            }
        });
    if (!trouve) {
        panier.push(new ProduitPanier(produit, 1));
    }
}