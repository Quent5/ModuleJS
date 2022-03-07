import { loadRessource } from "./photoloader.js";



export let display_galerie = function(tabGalery){
    let div = document.querySelector('#gallery_container');
    div.innerHTML = "";


    tabGalery.forEach(element => {

        let html = ```       <div class="vignette">
        <img  data-uri="${element.links.self.href}"
             src="https://webetu.iutnc.univ-lorraine.fr/www/canals5/phox/img/small/${element.photo.file}">
      </div>
```;
        div.innerHTML += html;
    });
}