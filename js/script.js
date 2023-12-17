// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

const marco = {
    name: "Marco",
    lastName: "Rossi",
    isAmbassador: true,
}

const paul = {
    name: "Paul",
    lastName: "Flynn",
    isAmbassador: false,
}

const amy = {
    name: "Amy",
    lastName: "Reed",
    isAmbassador: false,
}

const prices = [34, 5, 2]
const shippingCost = 50
let utenteCheEffettuaLAcquisto = amy //cambia il valore qui per provare se il tuo algoritmo funziona!


const allUsers = []
allUsers.push(amy, paul, marco)
console.log(allUsers)

allUsers.forEach(user => {
    const ambassadorStatus = user.isAmbassador ? "è un ambassador" : "non è un ambassador";
    console.log(`l'utente ${user.name} ${user.lastName} ${ambassadorStatus}`);
});

let ambassador = []
for (let i = 0; i < allUsers.length; i++) {
    const user = allUsers[i]
    if (user.isAmbassador) {
        ambassador.push(user)

    }
}

console.log(ambassador);



let sumChart = 0
for (let i = 0; i < prices.length; i++) {
    const price = prices[1]
    sumChart += price
}
if (user.isAmbassador) {
    sumChart *= 0.7;
}
// ho ipotizzato ua logica simile, credo, a quella richiesta. In questo caso se il tottale del carrello supera i 100 euro la spedizione sarà gratuita sempre, ceh tu sia o meno un ambassador. Spero sia giusto. Oppure devo comunqune creare la condizione di esistenza del carrello con shipping cost inserito per tutti quei clienti non ambassador? 
if (sumChart >= 100) {
    shippingCost = 0
}




/* for (let i = 0; i < allUsers.length; i++) {
    const user = allUsers[i]
    let string =
  }
 */