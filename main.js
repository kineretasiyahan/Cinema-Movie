const API = "https://api.tvmaze.com/search/shows?q="
const MOVIELIST = [];
function getApi(paramater) {
    return fetch(`${API}${paramater}`)
        .then((response) => { return response.json() })

}
let objectArray1 = [];
async function getClick() {
    movieCards.innerHTML = "";
    try {
        objectArray1 = await getApi(userInput.value)
        if(objectArray1.length == 0) {
            movieCards.innerHTML ="ERROR: Not Found";
        }
        objectArray1.forEach(item => {
            movieCards.innerHTML += `<div><h1>${item.show.name}</h1>
        <img src=${item.show.image.medium}>
        <p> Genres: ${item.show.genres} </p>
        <a href=${item.show.url} target="_blank">Link</a>
        </div>`
        })
    }
    catch (error) {
        console.log(error)
    }
    finally {}
}