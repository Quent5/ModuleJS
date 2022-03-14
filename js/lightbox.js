import * as PHOTOLOADER from "./photoloader.js"

export function load(node) {

    return PHOTOLOADER.loadRessource(node.getAttribute("data-uri"))

}