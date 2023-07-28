interface Music {
    nombre: string;
    año: number;
    active: boolean;
    género: string;
}

const title = 'font-size:18px; background-color:green; font-weight:bold;'

const theBeatles = {
    nombre: 'the Beetles',
    año: 1960,
    active: true,
    género: 'Pop Rock',
};


console.log(`%c ${theBeatles.nombre}`, title);
// "color:red; font-size: 18px"

const queen = {
    nombre: 'Queen',
    año: 1970,
    active: false,
    género: 'Rock',
};

console.log(`%c ${queen.nombre}`, title);

const acdc = {
    nombre: 'ACDC',
    año: 1973,
    active: true,
    género: 'Hard Rock',
};

console.log(`%c ${acdc.nombre}`, title);

const beethoven = {
    nombre: 'Ludwig van Beethoven',
    año: 1770,
    active: false,
    género: 'Classic',
};

console.log(`%c ${beethoven.nombre}`, title);

const theRollingStones = {
    nombre: 'the Rolling Stones',
    año: 1962,
    active: true,
    género: 'Rock',
};

console.log(`%c ${theRollingStones.nombre}`, title);

let popRock = [theBeatles];
let rock = [queen, theRollingStones];
let hardRock = [acdc];
let classic = [beethoven];
