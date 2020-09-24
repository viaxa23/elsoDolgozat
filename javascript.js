'use strict';

const diakok = [
    {'nev': 'Tóth Balázs', 'osztaly': '14SZF'},
    {'nev': 'Börcsök Dávid', 'osztaly': '14SZF'},
    {'nev': 'Szabó Levente', 'osztaly': '14SZF'},
    {'nev': 'Pásztor Krisztián', 'osztaly': '14SZF'},
    {'nev': 'Kucsera Kinga', 'osztaly': '14SZF'},
    {'nev': 'Visnyei Ádám', 'osztaly': '14SZF'},
    {'nev': 'Kiss László', 'osztaly': '14SZF'},
    {'nev': 'Németh Christopher', 'osztaly': '14SZF'},
];

function getosztaly(){

    let output = '<table>';
    output += `<tr><th>Név</th><th>Osztály</th></tr>`;
    diakok.forEach((diak)  => {
            output += `<tr><td>${diak.nev}</td><td>${diak.osztaly}</td></tr>`;
    });
    output += '</table>';
    document.body.innerHTML = output;
}

getosztaly();

function feltolt() {
    let nev = document.getElementById('nev').value;
    let osztaly = document.getElementById('osztaly').value;
    console.log(nev + ' ' + osztaly);
    diakok.push({'nev' : `${nev}`, 'osztaly' : `${osztaly}`});
}

function frissit() {

}