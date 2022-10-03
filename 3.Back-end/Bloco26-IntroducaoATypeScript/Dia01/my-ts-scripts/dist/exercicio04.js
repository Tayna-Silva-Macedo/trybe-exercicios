"use strict";
const unitsCapacity = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];
const convertCapacity = (value, initialUnit, finalUnit) => {
    const initialIndex = unitsCapacity.indexOf(initialUnit);
    const finalIndex = unitsCapacity.indexOf(finalUnit);
    const exponent = finalIndex - initialIndex;
    return `${value} ${initialUnit} tem ${value * Math.pow(10, exponent)} ${finalUnit}`;
};
console.log(convertCapacity(1, 'l', 'kl'));
console.log(convertCapacity(1, 'kl', 'l'));
console.log(convertCapacity(9, 'dl', 'ml'));
