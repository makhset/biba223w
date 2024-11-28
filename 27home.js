
let sandar = [];

while (true) {

    let input = prompt("Сан енгізіңіз (0 тоқтату үшін):");
    let number = parseInt(input);

    if (isNaN(number)) {
        alert("Тек сан енгізіңіз!");
        continue;
    }

    if (number === 0) {
        break;
    }

    if (number % 2 === 0) {
        sandar.unshift(number); 
    } else {
        sandar.push(number); 
    }
}

console.log("Массив:", sandar);
console.log("Ұзындығы:", sandar.length);