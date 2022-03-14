import * as GAL from "./js/gallery.js"
import * as GAL_UI from "./js/gallery_ui.js"


document.querySelector('#load_gallery')
    .addEventListener('click', e => {
        GAL.load().then((elem)=>{
            GAL_UI.display_galerie(elem)
        })
    })
