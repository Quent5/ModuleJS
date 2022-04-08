import * as PHOTOLOADER from "./photoloader.js"
import * as GALLERY from "./gallery.js"
import {indexGallery} from "./gallery.js";

let indexPhoto = 0
let nbPhotoPage = 0

export function load(node) {
    return PHOTOLOADER.loadRessource(node.getAttribute("data-uri"))
}

export function loadPhotoLightbox() {
    return PHOTOLOADER.loadRessource("/www/canals5/phox/api/categories/"+indexGallery+"/photos").then((elem)=>{
        return elem.photos[indexPhoto];
    });
}

export function next() {
    console.log(indexPhoto+" " +GALLERY.indexGallery);
    indexPhoto++;
    if(indexPhoto >= nbPhotoPage){
        let ancienIndex = GALLERY.indexGallery;
        GALLERY.next();
        if(ancienIndex != GALLERY.indexGallery)indexPhoto = 0;
        else indexPhoto--;
    }
    
    console.log(indexPhoto+" " +GALLERY.indexGallery);

}


export function prev() {

}

export function definirIndex(elem) {
    GALLERY.load().then((tab)=>{
        for (let i=0;i<tab.length; i++) {
            if (tab[i].photo.id===elem.photo.id) {
                indexPhoto = i;
            }
        }
        nbPhotoPage = tab.length
        console.log(indexPhoto)
    })
}

export function ajouterCommentaire(){
    let nom = document.getElementById("nom").value;
    let titre  = document.getElementById("titre").value;
    let contenu = document.getElementById("contenu").value;

    let json_data = JSON.stringify({
        "titre"       :  titre,
        "content"     : contenu,
        "pseudo"      : nom

    });

    fetch("https://webetu.iutnc.univ-lorraine.fr/api/photos/9/comments", {
        method: 'POST',
        body : json_data,
        credentials : 'include',
        headers: {
           'Content-Type' : 'application/json;charset=utf8'
        }
    });
}


