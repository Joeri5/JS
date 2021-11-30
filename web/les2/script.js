const groentevak = document.getElementById('groenten');
const fruitvak = document.getElementById('fruit');

function zetInFruitLa(fruit) {
    console.log(fruit);

    const nieuwElement = document.createElement('h2');
    nieuwElement.innerHTML = fruit;
    nieuwElement.className = 'rood';
    fruitvak.appendChild(nieuwElement);
}

function zetInGroentenLa(groenten) {
    console.log(groenten);

    const nieuwElement = document.createElement('h2');
    nieuwElement.innerHTML = groenten;
    nieuwElement.className = 'groen';
    groentevak.appendChild(nieuwElement);
}
