import * as GAL from "./js/gallery.js"
import * as GAL_UI from "./js/gallery_ui.js"
import * as LIGHT from "./js/lightbox.js"

document.querySelector('#load_gallery')
    .addEventListener('click', e => {
        GAL.load().then((elem) => {
            GAL_UI.display_galerie(elem)
        })
    })

document.querySelector("#next").addEventListener("click", e=>{
    GAL.next().then((elem)=>{
        GAL_UI.display_galerie(elem)
    })
})
document.querySelector("#previous").addEventListener("click", e=>{
    GAL.prev().then((elem)=>{
        GAL_UI.display_galerie(elem)
    })
})

document.querySelector("#first").addEventListener("click", e=>{
    GAL.first().then((elem)=>{
        GAL_UI.display_galerie(elem)
    })
})
document.querySelector("#last").addEventListener("click", e=>{
    GAL.last().then((elem)=>{
        GAL_UI.display_galerie(elem)
    })
})

document.querySelector("#lightbox_next").addEventListener("click", e=> {
    LIGHT.next()
})

document.querySelector('button[type="submit"]').addEventListener("click", e=>{
    LIGHT.ajouterCommentaire();
})
