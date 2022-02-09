// Tableau exporté contenant les produits
export let products = [];

/**
 * Fonction constructeur Produit
 * @param reference reference du produit
 * @param price prix du produit
 * @param descr description du produit
 */
function Produit(reference, price, descr){
    this.reference = reference;
    this.price = price;
    this.description = descr;
}

/**
 * Fonction exportee de recherche pour la barre de recherche
 * @param keywords chaine de caractere dont on va chercher les produits qui la contienne
 * @returns un tableau de Produit filtré selon le keywords
 */
export function search(keywords) {
    const f = element => element.reference.indexOf(keywords)!==-1 || element.description.indexOf(keywords)!==-1;
    return products.filter(f);
}

// On génére quelques produits
let a = new Produit("Table", 100, "Table en bois de chêne");
products.push(a);
let b = new Produit("Casque", 200, "Casque de ski");
products.push(b);
let c = new Produit("Ordinateur", 1000, "Ordinateur de bureau");
products.push(c);
let d = new Produit("Lampe", 50, "Lampe de bureau");
products.push(d);
