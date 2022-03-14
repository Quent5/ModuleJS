export function display_lightbox(data) {

    document.querySelector("#lightbox_title").innerHTML = data.photo.titre
    document.querySelector("#lightbox_full_img").setAttribute("src", "https://webetu.iutnc.univ-lorraine.fr"+data.photo.url.href )
    show()

}

export function show() {
    document.querySelector("#lightbox_container").classList.remove("lightbox_container--hidden")
}

export function hide() {
    document.querySelector("#lightbox_container").classList.add("lightbox_container--hidden")
}