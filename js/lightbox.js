import * as PHOTOLOADER from "./photoloader.js"
import * as GALLERY from "./gallery.js"

let indexPhoto = 0
let nbPhotoPage = 0

export function load(node) {

    return PHOTOLOADER.loadRessource(node.getAttribute("data-uri"))

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
    })
}