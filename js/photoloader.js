export let loadRessource = function(uri){

    return fetch('https://webetu.iutnc.univ-lorraine.fr'+uri, { credentials : 'include' })
.then(response => {
    if (response.ok)return response.json();
    else console.log("erreur");
})
.then(data => {
return data;
    
})
.catch(error => {
    console.log('network/response error : '+error);
});
}

