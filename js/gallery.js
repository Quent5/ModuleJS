import { loadRessource } from "./photoloader.js";

let tab = [];
let url = "/www/canals5/phox/api/categories/4/photos";

export let load = function(){

loadRessource(url).then((e) => {
    console.log(e);
    let data = e.photos;

    // data.forEach(element => {
    //     tab.push(element.links.self.href);
    // });

    return data;
})    
    
}