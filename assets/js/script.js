"use strict"

function appendOperation(operation) {
    document.getElementById('ergebnisFläche').innerHTML += operation;
}

function TaschenrechnerErgebnis() {
    let container = document.getElementById('ergebnisFläche');
    let result = eval(container.innerHTML);
    container.innerHTML = result;
}

function ZuletztsGelöscht() {
    let container = document.getElementById('ergebnisFläche');
    if (container.innerHTML.endsWith(' ')) {
        container.innerHTML = container.innerHTML.slice(0, -3);
    } else {
        container.innerHTML = container.innerHTML.slice(0, -1);
    }
}

function allesGelöscht() {
    let container = document.getElementById('ergebnisFläche');
    if (container.innerHTML.endsWith(' ')) {
        container.innerHTML = container.innerHTML.slice(0, -3);
    } else {
        container.innerHTML = container.innerHTML.slice(0, -100);
    }
}