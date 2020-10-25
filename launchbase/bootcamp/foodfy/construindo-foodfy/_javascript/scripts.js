const modal = document.querySelector('.modal');
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    
    card.addEventListener("click", function(){ 
        const content = card.getAttribute('id')
        const myH = card.querySelector('h4').innerHTML
        const myP = card.querySelector('p').innerHTML

        modal.classList.add("active")

        modal.querySelector("img").src = `./_imagens/${content}.png`

        modal.querySelector("img").alt = `${content}`

        modal.querySelector("h3").innerHTML = myH

        modal.querySelector("p").innerHTML = myP

    })
}

document.querySelector('.modal-close').addEventListener("click", function(){
    modal.classList.remove("active")
})
