/* PRIMO STEP:
Seleziono gli elementi da utilizzare */

const bulb = document.getElementById ("lampadina")
console.log(bulb)

const OnBtn = document.getElementById ("accendere")
console.log(OnBtn)

const Toggle = document.getElementById ("Accendi/Spegni")
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

Toggle.addEventListener("click", function () { 
    //Con src.includes controllo se nella stringa dell'attributo src dell'immagine c'è la parola "white_lamp.png".
  if (bulb.src.includes("white_lamp.png")) {
    // Se l'immagine attuale è la lampadina SPENTA:
    bulb.src = "img/yellow_lamp.png";//accendo la lampadina
    Toggle.textContent = "Spegni";//cambio il testo del bottone dinamicamente usando .textContent
  } else {
    // Se invece è già accesa:
    bulb.src = "img/white_lamp.png";//spengo la lampadina
    Toggle.textContent = "Accendi"; //ricambio nuovamente il testo del bottone
  }
});

/* COMMENTO FINALE
Comportamento finale:
Se la lampadina è spenta, al click:

si accende (cambia immagine)
il bottone diventa "Spegni"

Se è accesa, al click:

si spegne
il bottone torna a "Accendi" */