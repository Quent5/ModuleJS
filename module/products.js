// Tableau exporté contenant les produits
export let products = [];

let numImage = 0;
let choixImage = ['animals', 'arch', 'nature', 'people'];

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
    this.image = "https://placeimg.com/250/250/"+choixImage[numImage];
    numImage++;
    if (numImage>=choixImage.length) numImage=0;
}

/**
 * Fonction exportee de recherche pour la barre de recherche
 * @param keywords chaine de caractere dont on va chercher les produits qui la contienne
 * @returns un tableau de Produit filtré selon le keywords
 */
export function search(keywords) {
    const f = element => element.reference.toLowerCase().indexOf(keywords.toLowerCase())!==-1 || element.description.toLowerCase().indexOf(keywords.toLowerCase())!==-1;
    return products.filter(f);
}

function debounce (func, timeout = 300) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { return func.apply(this, args) }, timeout);
    };
}

export const processSearch = debounce(()=>{
    search(document.querySelector("#product-search"))
});

// On génére quelques produits
let a = new Produit("Table", 100, "Table en bois de chêne");
products.push(a);
let b = new Produit("Casque", 200, "Casque de ski");
products.push(b);
let c = new Produit("Ordinateur", 1000, "Ordinateur de bureau");
products.push(c);
let d = new Produit("Lampe", 50, "Lampe de bureau");
products.push(d);
