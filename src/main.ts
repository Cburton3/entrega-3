interface Music-groups {
    nombre: string;
    año: number;
    active: boolean;
    género: string;
}

const theBeatles = {
    nombre: 'the Beetles',
    año: 1960,
    active: true,
    género: 'Pop Rock',
};

console.log(`%ctheBeatles, font-size: 18px, background-color: green, font-weight: bold`);

const queen = {
    nombre: 'queen',
    año: 1970,
    active: false;
    género: 'Rock',
};

const acdc = {
    nombre: 'ACDC',
    año: 1973,
    active: true;
    género: 'Hard Rock',
};

const beethoven = {
    nombre: 'Ludwig van Beethoven',
    año: 1770,
    active: false;
    género: 'Classic',
};

const theRollingStones = {
    nombre: 'the Rolling Stones',
    año: 1962,
    active: true;
    género: 'Rock',
};

let popRock = theBeatles;
let rock = queen, theRollingStones;
let hardRock = acdc;
let classic = beethoven;
