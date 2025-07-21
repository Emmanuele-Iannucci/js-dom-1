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

// BONUS ragionamento...
// Al primo click: la lampadina si accende e il bottone dice “Spegni”
// Al secondo click: si spegne e il bottone dice “Accendi”
// E così via...
// Quindi probabilmente devo aggiungere una funzione che includa un if:
// COSA DEVE FARE IL CODICE:
// Lampadina spenta  Mostra immagine accesa + bottone "Spegni"
// Lampadina accesa  Mostra immagine spenta + bottone "Accendi"
