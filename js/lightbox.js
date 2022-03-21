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
    GALLERY.nbPhotos().then((elem) =>{
        //console.log(elem)
    })
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