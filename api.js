let icon = document.querySelector(".main__box_icon")
let joke = document.querySelector(".main__box_text")
let button = document.querySelector(".main__box_button")
let counter = 0

let arr = ["&#128512","&#128514","&#128518","&#128519","&#128520" ]

let url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"
let getJoke = () => {
    fetch(url)
    .then(data => data.json())
    .then(item => joke.textContent = item.joke);
    icon.innerHTML = arr[counter % 5];
    counter++;
}



button.addEventListener("click", getJoke)