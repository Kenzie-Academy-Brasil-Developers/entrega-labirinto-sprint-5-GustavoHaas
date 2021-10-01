const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W WIW   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W WR  W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];

const areaJogo = document.getElementById('game');

for (let i = 0; i < map.length; i++) {
    let atributo = i + 1;
    let novaLinha = document.createElement('div');
    novaLinha.setAttribute('id', 'linha' + atributo);
    novaLinha.setAttribute('class', 'linha');  
    areaJogo.appendChild(novaLinha);

    let linhaAlvo = document.getElementById('linha' + atributo);
    for (let j = 0; j < map[i].length; j++) {
        let tipoCelula = map[i][j];
        if ((map[i][j] === ' ') || (map[i][j] === '\xa0')) {
            tipoCelula = 'espaco'
        }
        let novaCelula = document.createElement('div');
        novaCelula.setAttribute('id', tipoCelula);
        novaCelula.setAttribute('class', tipoCelula);
        linhaAlvo.appendChild(novaCelula);
    }
}

const inicioPlaye = document.getElementById('S');
rect = inicioPlaye.getBoundingClientRect()
console.log(rect.top)

let boxTop = rect.top;
let boxLeft = rect.left;
let boxTopFuturo = rect.top;
let boxLeftFuturo = rect.left;
document.getElementById("player").style.top = boxTop + "px";
document.getElementById("player").style.left = boxLeft + "px";

let direcao = -1;

let gridTop = 9;
let gridLeft = 0;
let gridTopFuturo = 9;
let gridLeftFuturo = 0;

document.addEventListener('keydown', (event) => {
    const keyAtual = event.key;
    
    if (keyAtual === "ArrowDown") {
        boxTopFuturo += 50;
        gridTopFuturo += 1;
    } else if (keyAtual === "ArrowUp") {
        boxTopFuturo -= 50;
        gridTopFuturo -= 1;
    } else if (keyAtual === 'ArrowLeft') {
        boxLeftFuturo -= 50;
        gridLeftFuturo -= 1;
        direcao = 1;
    } else if (keyAtual === 'ArrowRight') {
        boxLeftFuturo += 50;
        gridLeftFuturo += 1;
        direcao = -1;
    }

    if (gridLeftFuturo < 0) {
        gridLeftFuturo = gridLeft;
        boxLeftFuturo = boxLeft;
    }

    if (gridLeftFuturo > 20) {
        gridLeftFuturo = gridLeft;
        boxLeftFuturo = boxLeft;
    }

    let xEy = map[gridTopFuturo][gridLeftFuturo];

    if (xEy === 'W') {
        gridLeftFuturo = gridLeft;
        gridTopFuturo = gridTop;
        boxTopFuturo = boxTop;
        boxLeftFuturo = boxLeft;
    } else {
        gridLeft = gridLeftFuturo;
        gridTop = gridTopFuturo;
        boxTop = boxTopFuturo;
        boxLeft = boxLeftFuturo;
    }

    document.getElementById("player").style.top = boxTop + "px";
    document.getElementById("player").style.left = boxLeft + "px";
    document.getElementById("player").style.transform = 'scaleX(' + direcao + ')';

    if (xEy === 'R') {
        pickeRick.play()
        document.getElementById('player').style.backgroundImage = 'url(../assests/ratSuit.png)'
    }

    if (xEy === 'I') {
        yes.play()
        document.getElementById('player').style.backgroundImage = 'url(../assests/Rick.png)'
    }

    if (xEy === 'F') {
        wub.play()
        document.getElementById('win').style.visibility = 'visible'
    }
  });
