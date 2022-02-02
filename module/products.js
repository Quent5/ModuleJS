

let products = [];

function Produit(reference, price, descr){
    this.reference = reference;
    this.price = price;
    this.description = descr;
}

let a = new Produit("Table", 100, "table en bois de chêne");
tab.push(a);
let b = new Produit("Casque", 200, "Casque de ski");
tab.push(b);
let c = new Produit("Ordinateur", 1000, "Ordinateur de bureau");
tab.push(c);
let d = new Produit("Lampe", 50, "Lampe de bureau");
tab.push(d);

export default {
    tab : products
}
