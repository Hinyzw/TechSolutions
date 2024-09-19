//criação do Json

var json = `{
    "imagem": "<img src='IMGs/Sage_artwork.webp' width='120px'>",
    "id": 7,
    "nome": "Sage",
    "classe": "Sentinela",
    "Q": "Slow Orb",
    "E": "Healing Orb",
    "X": "Barrier Orb",
    "C": "Ressurrection",
    "país": "China"
}`;

var json2 = `{
    "imagem": "<img src='IMGs/killjoy.webp' width='200px'>",
    "id": 4,
    "nome": "KillJoy",
    "classe": "Sentinela",
    "Q": "AlarmBot",
    "E": "Turret",
    "C": "Nanoenxame",
    "X": "LockDown",
    "país": "Alemanha"
}`;

var json3 = `{
    "imagem": "<img src='IMGs/reyna.webp' width='200px'>",
    "id": 11,
    "nome": "Reyna",
    "classe": "Duelista ",
    "Q": "Devour",
    "E": "Dimiss",
    "C": "Leer",
    "X": "Empress",
    "país": "México"
}`;

var json4 = `{
    "imagem": "<img src='IMGs/viper.webp' width='200px'>",
    "id": 2,
    "nome": "Viper",
    "classe": "Controlador",
    "Q": "Poison Cloud",
    "E": "Snake Bite",
    "C": "Barrier Orb",
    "X": "Viper's Pit",
    "país": "China"
}`

var json5 = `{
    "imagem": "<img src='IMGs/neon.webp' width='200px'>",
    "id": 19,
    "nome": "Neon",
    "classe": "Duelista",
    "Q": "Relay Bolt",
    "E": "High Gear",
    "C": "Fast Lane",
    "X": "OverDrive",
    "país": "Filipinas"
}`

var json6 = `{
    "imagem": "<img src='IMGs/vyse.webp' width='200px'>",
    "id": 26,
    "nome": "Vyse",
    "classe": "Sentinela",
    "Q": "Shear",
    "E": "Arc Rose",
    "C": "RazorVine",
    "X": "Steel Garden",
    "país": "China"
}`

//Converter o texto String para o JSON
var dados1 = JSON.parse(json);
var dados2 = JSON.parse(json2);
var dados3 = JSON.parse(json3);
var dados4 = JSON.parse(json4);
var dados5 = JSON.parse(json5);
var dados6 = JSON.parse(json6);

console.log(dados1)
console.log(dados2)
console.log(dados3)
console.log(dados4)
console.log(dados5)
console.log(dados6)


function apertar1(){
    document.getElementById('imagem').innerHTML = dados1.imagem;
    document.getElementById('nome').innerHTML = dados1.nome;
    document.getElementById('classe').innerHTML = dados1.classe;
    document.getElementById('Q').innerHTML = dados1.Q;
    document.getElementById('E').innerHTML = dados1.E;
    document.getElementById('X').innerHTML = dados1.X;
    document.getElementById('C').innerHTML = dados1.C;
    document.getElementById('país').innerHTML = dados1.país;

}

function apertar2(){
    document.getElementById('imagem').innerHTML = dados2.imagem;
    document.getElementById('nome').innerHTML = dados2.nome;
    document.getElementById('classe').innerHTML = dados2.classe;
    document.getElementById('Q').innerHTML = dados2.Q;
    document.getElementById('E').innerHTML = dados2.E;
    document.getElementById('X').innerHTML = dados2.X;
    document.getElementById('C').innerHTML = dados2.C;
    document.getElementById('país').innerHTML = dados2.país;
}

function apertar3(){
    document.getElementById('imagem').innerHTML = dados3.imagem;
    document.getElementById('nome').innerHTML = dados3.nome;
    document.getElementById('classe').innerHTML = dados3.classe;
    document.getElementById('Q').innerHTML = dados3.Q;
    document.getElementById('E').innerHTML = dados3.E;
    document.getElementById('X').innerHTML = dados3.X;
    document.getElementById('C').innerHTML = dados3.C;
    document.getElementById('país').innerHTML = dados3.país;
}

function apertar4(){
    document.getElementById('imagem').innerHTML = dados4.imagem;
    document.getElementById('nome').innerHTML = dados4.nome;
    document.getElementById('classe').innerHTML = dados4.classe;
    document.getElementById('Q').innerHTML = dados4.Q;
    document.getElementById('E').innerHTML = dados4.E;
    document.getElementById('X').innerHTML = dados4.X;
    document.getElementById('C').innerHTML = dados4.C;
    document.getElementById('país').innerHTML = dados4.país;
}

function apertar5(){
    document.getElementById('imagem').innerHTML = dados5.imagem;
    document.getElementById('nome').innerHTML = dados5.nome;
    document.getElementById('classe').innerHTML = dados5.classe;
    document.getElementById('Q').innerHTML = dados5.Q;
    document.getElementById('E').innerHTML = dados5.E;
    document.getElementById('X').innerHTML = dados5.X;
    document.getElementById('C').innerHTML = dados5.C;
    document.getElementById('país').innerHTML = dados5.país;
}

function apertar6(){
    document.getElementById('imagem').innerHTML = dados6.imagem;
    document.getElementById('nome').innerHTML = dados6.nome;
    document.getElementById('classe').innerHTML = dados6.classe;
    document.getElementById('Q').innerHTML = dados6.Q;
    document.getElementById('E').innerHTML = dados6.E;
    document.getElementById('X').innerHTML = dados6.X;
    document.getElementById('C').innerHTML = dados6.C;
    document.getElementById('país').innerHTML = dados6.país;
}