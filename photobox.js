import * as GAL from "./js/gallery.js"
import * as GAL_UI from "./js/gallery_display.js"




document.querySelector('#load_gallery')
  .addEventListener('click',  e => {
    GAL_UI.display_galerie(GAL.load());
  })
