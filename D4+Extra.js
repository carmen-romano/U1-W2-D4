/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const area = function(l1,l2){
    const areaRettangolo= l1*l2 
     console.log ("L'area del rettangolo è", areaRettangolo)
}
area(3,5)

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazySum = function(num1,num2){
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        console.log('I parametri devono essere dei numeri.');
     }
    else if(num1!==num2){
        return num1+num2
    }
    else{
       return (num1+num2)*3
    }
}
console.log("Esercizio 2", crazySum(3,3))

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazyDiff = function(num){
    if (typeof num !== 'number') {
        console.log('Il parametro deve essere un numero.');
     }
    else if(num> 19){
        return (num-19)*3
    }
    else{
       return (19-num)
    }
}

console.log("La differenza è", crazyDiff(21))

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const boundary= function(n){
   return n > 20 && n<=100 || n === 400 ? true : false
}
console.log(boundary(50))

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const epify= function(stringa){
    if (typeof stringa !== 'string') {
       console.log('Il parametro deve essere una stringa.');
    }
    else if(
        stringa.includes("EPICODE")){
        return stringa }
    
    else {
        return "EPICODE ".concat(stringa)
    }

}
console.log(epify("Ciao sono Carmen"))

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const check3and7 = function(num){
    return num%3===0 ||num%7===0? true : false

}
console.log(check3and7(9))

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const reverseString = function(stringaConvertita){
    let newString = stringaConvertita.split("").reverse().join("");
    return newString
}
console.log(reverseString("CIAO"))
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const upperFirst = function(stringa){
let newString = stringa.split(" ")
for(let i=0;i<newString.length;i++){
    newString[i]= newString[i].charAt(0).toUpperCase() + newString[i].slice(1);
}
   let newString2 = newString.join(" ")
   return newString2
}

console.log(upperFirst("esercizio otto di js"))

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const cutString = function(stringa){
    let newString= stringa.slice(1, -1)
    return newString
}
console.log(cutString("esercizio 9 js"))
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

const giveMeRandom =  function(n){
    let arr = []
for(let i  = 0; i<n;i++){
   let numeroCasuale=  Math.floor(Math.random()*11)
   arr.push(numeroCasuale)
}
return arr
}
console.log(giveMeRandom(5))


/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

const checkArray = function(arr){
    let newArray = 0
    for(let i=0; i<arr.length;i++){
        if(arr[i] > 5){
            console.log("il valore", arr[i], " è maggiore di 5")
            newArray= newArray + arr[i]
        }
    }
    console.log("la somma dei valori maggiori di 5 è: ", newArray)
    return newArray
}
let arrayCasuale = giveMeRandom(5)
console.log(checkArray(arrayCasuale))

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let shoppingCart = [
    {
    price: 35,
    name: "lampada",
    id: "DHR2736S",
    quantity: 5,
},
    {
    price: 90,
    name: "tavolino",
    id: "PRYS62652X",
    quantity: 2,
},
    {
    price: 60,
    name: "lampadario",
    id: "CUDJD7252A",
    quantity: 5,
},
]
const shoppingCartTotal =function (){
    let somma = 0
for(let i = 0; i<shoppingCart.length;i++)
{
   somma += shoppingCart[i].price* shoppingCart[i].quantity
}
return somma

}
console.log("Totale carrelo: ", shoppingCartTotal())

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
 

const addToShoppingCart = function(oggetto){
 shoppingCart.push(oggetto)
return shoppingCart.length
}

let oggetto1 ={
    price: 25,
    name: "Libro",
    id: "ABC123",
    quantity: 1
};
console.log(addToShoppingCart(oggetto1))

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/
const maxShoppingCart = function(){
    let newArr = []
    for(let i = 0; i <shoppingCart.length;i++){
        let priceArr= shoppingCart[i].price
        newArr.push(priceArr)
    }
    return Math.max(...newArr)
}
console.log("Il prezzo più alto è: ", maxShoppingCart())
/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const latestShoppingCart= function(){
    let ultimoOggetto = shoppingCart[shoppingCart.length - 1]
    return ultimoOggetto
}

console.log (latestShoppingCart())

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const loopUntil = function(num){
    if(num>10){
        console.log("parametro non valido")
    }
    let successCount = 0
    
    while(successCount<3){
        let count = Math.floor(Math.random()*10)
        console.log("Numero casuale:", count);
       if(
        count === num ){
        successCount++
       }
       else{successCount =0}
    }
    }
console.log(loopUntil(3))

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const mediaArotmetica = [34, 55, 66, 77, 88, 90]

const average= function(mediaArotmetica){
    let arrMedia= 0
    for(let i=0;i<mediaArotmetica.length;i++){
        arrMedia= arrMedia+mediaArotmetica[i]
       
    }
     arrMedia = arrMedia/ mediaArotmetica.length
    return arrMedia
}
console.log(average(mediaArotmetica))

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let arrStringhe = ["maria", "filippo", "carlo", "giacomo"]


const longest= function(arrStringhe){
    let stringaLunga= ""
    for(let i = 0; i<arrStringhe.length;i++){
       if(arrStringhe[i].length > stringaLunga.length){
        stringaLunga = arrStringhe[i]
       }

    }
    console.log("La stringa piu lunga è:", stringaLunga)
    return stringaLunga
}
longest(arrStringhe)

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const antiSpam = function(emailContent){
    if( 
        emailContent.includes("SPAM") || emailContent.includes("SCAM")){
            return false
        }
        else{return true}

} 
console.log(antiSpam("spam"))

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/


/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */

