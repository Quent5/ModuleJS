import * as PROD from "./products.js";
import * as UI from "./ui.js";

export function init(){

    console.log("de")
    UI.buildProductsList(PROD.products);

}
