export let products = [];

function Produit(reference, price, descr){
    this.reference = reference;
    this.price = price;
    this.description = descr;
}

export function search(keywords) {
    const f = element => element.reference.indexOf(keywords)!==-1;
    return products.filter(f);
}

let a = new Produit("Table", 100, "Table en bois de chêne");
products.push(a);
let b = new Produit("Casque", 200, "Casque de ski");
products.push(b);
let c = new Produit("Ordinateur", 1000, "Ordinateur de bureau");
products.push(c);
let d = new Produit("Lampe", 50, "Lampe de bureau");
products.push(d);
