import {loadRessource} from "./photoloader.js";

let tab = [];
let url = "/www/canals5/phox/api/categories/4/photos";

export let load = function () {

    return loadRessource(url).then((e) => {
        console.log(e);
        // data.forEach(element => {
        //     tab.push(element.links.self.href);
        // });
        return e.photos;
    })

}