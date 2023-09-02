let icon = document.querySelector(".main__box_icon")
let joke = document.querySelector(".main__box_text")
let button = document.querySelector(".main__box_button")
let counter = 0

let buttons = document.querySelectorAll("input")
let mainBoxes = document.querySelectorAll(".main__box")

let arr = ["&#128512", "&#128514", "&#128518", "&#128519", "&#128520"]

let urlOne = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart"
let urlTwo = "https://api.quotable.io/random"
let urlThree = "https://api.dictionaryapi.dev/api/v2/entries/en/"




let getJoke = () => {
    fetch(url)
        .then(data => data.json())
        .then(item => joke.textContent = item.joke);
    icon.innerHTML = arr[counter % 5];
    counter++;
}




let getQuote = () => {
    fetch(url)
        .then(data => data.json())
        .then(item => joke.textContent = item.joke);
    icon.innerHTML = arr[counter % 5];
    counter++;
}

let search = document.querySelector(".search")
let dict = document.querySelector(".dict")
let word = document.querySelector(".word")
let sound = new Audio()
let getWord = () => {
    fetch(urlThree + word.value)
        .then(data => data.json())
        .then(item => {
            console.log(item)
            dict.textContent = item[0].meanings[0].definitions[0].definition
            sound.src = item[0].phonetics[0].audio
            sound.play()
        });

}
search.addEventListener("click", getWord)

button.addEventListener("click", getJoke)

buttons[0].addEventListener("click", showJoke)
buttons[1].addEventListener("click", showQuote)
buttons[2].addEventListener("click", showDictionary)

function showJoke() {
    mainBoxes[1].classList.add("inwisible")
    mainBoxes[2].classList.add("inwisible")
    mainBoxes[0].classList.remove("inwisible")
}
function showQuote() {
    mainBoxes[0].classList.add("inwisible")
    mainBoxes[2].classList.add("inwisible")
    mainBoxes[1].classList.remove("inwisible")
}
function showDictionary() {
    mainBoxes[1].classList.add("inwisible")
    mainBoxes[0].classList.add("inwisible")
    mainBoxes[2].classList.remove("inwisible")
}