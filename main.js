/* PRIMO STEP:
Seleziono gli elementi da utilizzare */

const bulb = document.getElementById ("lampadina")
console.log(bulb)

const OnBtn = document.getElementById ("accendere")
console.log(OnBtn)

/* SECONDO STEP:
Aggiungo un evento click al bottone e creo dunque la funzione in modo che la
lampadina si accenda */

OnBtn.addEventListener ('click', function(){
// utilizzo l'immagine della lampadina e la cambio da spenta ad accesa
bulb.src = "img/yellow_lamp.png"

})