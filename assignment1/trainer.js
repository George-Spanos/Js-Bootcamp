const trainersArray = [
    [
        "takis",
        "Takaros",
        "Taksi"
    ],
    [
        "Kostas",
        "Kostaros",
        "Souvlaki"
    ],
    [
        "Mitsos",
        "Mitsaros",
        "Limani"
    ]
]
const table = document.getElementById('table')

for (let i = 0; i < trainersArray.length; i++) {
    var tr = document.createElement('tr'); //Create 3 <tr> elements assigned to a unique variable BUT need a working alternative for 'tr[i]'
    table.appendChild(tr); // Append to <table> node
    for (var j = 0; j < 3; j++) {
        var tdElement = document.createElement('td');
        tdElement.innerHTML = trainersArray[i][j];
        tdElement.className = "table-cell"
        tr.appendChild(tdElement); // Take string from placeholder variable and append it to <tr> node
    }
}