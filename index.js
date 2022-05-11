// Tema 2

// 1. Creați o funcție care primește ca și parametru un număr și returnează dublul său dacă numărul primit este impar, altfel returnează numărul scăzut cu 2 dacă este par. 
// Afișați rezultatul în consolă.

const calculate = number => { 
    return number % 2 == 0 ? 
                    number - 2 : 
                    2 * number;
}  
console.log(calculate(7));


// 2. Creați o funcție care stochează intr-un array doar numerele prime dintr-un array primit ca si parametru. Parcurgeți array-ul folosind un “for loop”. 
//Afișați rezultatul în consola.

let initialArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

primeArray = initialArray.filter((number) => {
    if (number <= 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
}); 

console.log(primeArray);


// 3. Creați o funcție care stochează intr-un array doar strings dintr-un array primit ca si parametru. Parcurgeți array-ul folosind “forEach”. 
// Afișați rezultatul în consola.

initialArray = [1, '1', 'salut', 2, 6, true, 'true'];

function getStrings(array) {
    let result = [];
    array.forEach(element => {
        if (Object(element) instanceof String) {
            result.push(element);
        }     
    });
    return result;
}

console.log(getStrings(initialArray));


// 4. Creați o funcție care adună cifrele impare ale unui număr primit ca și parametru de tip string folosind  “for loop” si keyword-ul “continue”. 
const initialNumber = '1523';

function addDigits(string) {
    let sum = 0;
    for (let i = 0; i < string.length; i++) {
        if (Number(string.charAt(i)) % 2 == 0) continue; // skip even numbers        
        sum += Number(string.charAt(i));
    }
    return sum;
}

console.log(addDigits(initialNumber));


// 5. Switch
day = 'monday';
switch (day) {
    case 'monday':
        console.log('Here we go again!')
    case 'tuesday':
    case 'wednesday':
    case 'thursday':
    case 'friday':
        console.log('Programming is fun! :P');
        break;
    case 'saturday':
    case 'sunday':
        console.log("It's weekend! :D");
        break;
}