import {loadRessource} from "./photoloader.js";
import * as LIGHTBOX from "./lightbox.js"
import * as LIGHTBOX_UI from "./lightbox_ui.js"

export let display_galerie = function (tabGalery) {
    let div = document.querySelector('#gallery_container');
    div.innerHTML = "";

    tabGalery.forEach(element => {

        let noeud = document.createElement("div")
        noeud.setAttribute("class", "vignette")
        let noeudImage = document.createElement("img")
        noeudImage.setAttribute("data-uri", element.links.self.href)
        noeudImage.setAttribute("src", "https://webetu.iutnc.univ-lorraine.fr/www/canals5/phox/img/small/" + element.photo.file)
        noeud.append(noeudImage)
        div.append(noeud);

    })

    document.querySelectorAll(".vignette").forEach((elem) => {
        elem.addEventListener("click", e => {
            loadRessource(elem.firstChild.getAttribute("data-uri")).then((elem) => {
                LIGHTBOX_UI.display_lightbox(elem)
                LIGHTBOX.definirIndex(elem)
            })
        })
    })

    document.querySelector("#lightbox_close").addEventListener("click", function () {
        LIGHTBOX_UI.hide()
    })
}