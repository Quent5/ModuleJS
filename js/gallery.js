import {loadRessource} from "./photoloader.js";

export let indexGallery = 1;
let url = "";

export let load = function () {

    return loadRessource("/www/canals5/phox/api/categories/"+indexGallery+"/photos").then((e) => {
        return e.photos;
    })

}

export function next() {
    indexGallery++;
    return loadRessource("/www/canals5/phox/api/categories").then((elem)=>{
        let max = elem.categories[elem.categories.length-1].categorie.id
        if (indexGallery>max) {
            indexGallery--
        }
        return load()
    })
}

export function prev() {
    indexGallery--;
    return loadRessource("/www/canals5/phox/api/categories").then((elem)=>{
        if (indexGallery<elem.categories[0].categorie.id) {
            indexGallery++
        }
        return load()
    })
}

export function last() {
    return loadRessource("/www/canals5/phox/api/categories").then((elem)=>{
        indexGallery = elem.categories[elem.categories.length-1].categorie.id
        return load()
    })
}

export function first() {
    return loadRessource("/www/canals5/phox/api/categories").then((elem)=>{
        indexGallery = elem.categories[0].categorie.id
        return load()
    })
}

export function nbPhotos() {
    return loadRessource("/www/canals5/phox/api/categories/"+indexGallery+"/photos").then((elem)=>{
        console.log(elem)
        return elem.photos.length
    })
}