import {loadRessource} from "./photoloader.js";

export function display_lightbox(data) {

    document.querySelector("#lightbox_title").innerHTML = data.photo.titre
    document.querySelector("#lightbox_full_img").setAttribute("src", "https://webetu.iutnc.univ-lorraine.fr"+data.photo.url.href )
    document.querySelector("#lightbox_description").innerHTML = "Description: "+data.photo.descr
    loadRessource(data.links.categorie.href).then((ee)=>{
        displayCategorie(ee);
    })
    loadRessource(data.links.comments.href).then((ee)=>{
        displayCommentaire(ee);
    })
    show()

}

export function show() {
    document.querySelector("#lightbox_container").classList.remove("lightbox_container--hidden")
}

export function hide() {
    document.querySelector("#lightbox_container").classList.add("lightbox_container--hidden")
}

export function displayCategorie(obj) {
    document.querySelector("#lightbox_categorie").innerHTML = "Categorie: "+obj.categorie.nom;
}

export function displayCommentaire(obj) {
    let comm = document.querySelector("#lightbox_les_commentaires");
    let tab = obj.comments;
    comm.innerHTML = "";
    tab.forEach(elem=>{
        let noeud = document.createElement("li")
        noeud.innerText = "(" + elem.pseudo + ") " + elem.content;
        comm.append(noeud);
    });
}