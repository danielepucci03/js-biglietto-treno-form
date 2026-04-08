console.log('Biglietto treno');

const età = document.getElementById("age")
const chilometri = document.getElementById("km")
const bottone = document.getElementById("btn")
const risultato = document.getElementById("risultato");

bottone.addEventListener("click", function (e) {
    e.preventDefault()
    const age = parseInt(età.value)
    const km = parseFloat(chilometri.value)

    if (isNaN(km) || isNaN(eta)) {
    risultato.textContent = "Inserisci valori validi!";
    return;
  }

    let prezzo = km * 0.21;

    if (età < 18) {
        prezzo = prezzo * 0.8
    } else if (età > 65) {
        prezzo = prezzo * 0.6
    }
    console.log(prezzo.toFixed(2) + "€");
    
})


