let randomWord = 'https://random-word-api.herokuapp.com/word?number=1';
let definitionuri = `https://api.giphy.com/v1/gifs/search?api_key=8ULYRSyu677C1HzABZgMTVr4W9I4CUF9&q=`

//console.log(definitionuri);

fetch(randomWord)
.then(response => {
    return response.json();
}).then(result => {
    let  res = result[0]
    //document.getElementById('id1').innerHTML = res;
    console.log(res);
    return fetch(definitionuri + res + '&limit=5&offset=0&rating=g&lang=en');
}).then(wordres => {
    return wordres.json();
}).then(worddefinition => {
    console.log(worddefinition.data)
    console.log(worddefinition.data.length)
    let image = worddefinition.data.map(d => d.embed_url);
    console.log(image[0]);
    for (let i = 0 ; i < image.length ; i++){
    let elem = document.createElement('object');
    elem.setAttribute('data',image[i]);
    document.getElementById('id1').append(elem);
}
    
    
}).catch(err => {
    console.log(err);
})