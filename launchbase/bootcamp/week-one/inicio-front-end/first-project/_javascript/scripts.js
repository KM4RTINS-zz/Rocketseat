const screen_overlay = document.querySelector(".screen_overlay");
const cards = document.querySelectorAll(".card");

for (let card of cards ) {
    card.addEventListener("click", function(){

        const video = card.getAttribute("id")
        screen_overlay.classList.add("active")
        screen_overlay.querySelector("iframe").src = `http://www.youtube.com/embed/${video}`;

    })
}

document.querySelector(".close_screen").addEventListener("click", function(){
    screen_overlay.classList.remove("active")
    screen_overlay.querySelector("iframe").src = ""
})
