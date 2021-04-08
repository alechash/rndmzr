const rndmzr = require('./index')

// names
console.log(rndmzr.name({
    type: 'f'
}));
console.log(rndmzr.name({
    type: 'fm'
}));
console.log(rndmzr.name({
    type: 'fml'
}));

// numbers
console.log(rndmzr.number({
    floor: true
}));
console.log(rndmzr.number({
    min: 20,
    max: 40
}));
console.log(rndmzr.number({
    min: 20,
    max: 40,
    floor: true
}));