// 1 - Dado o código abaixo, qual a ordem de finalização de execução das linhas comentadas?

const planetDistanceFromSun = ({
  name,
  distanceFromSun: { value, measurementUnit },
}) => `${name} is ${value} ${measurementUnit} apart from the Sun`;

const mars = {
  name: 'Mars',
  distanceFromSun: {
    value: 227900000,
    measurementUnit: 'kilometers',
  },
};

const venus = {
  name: 'Venus',
  distanceFromSun: {
    value: 108200000,
    measurementUnit: 'kilometers',
  },
};

const jupiter = {
  name: 'Jupiter',
  distanceFromSun: {
    value: 778500000,
    measurementUnit: 'kilometers',
  },
};

console.log(planetDistanceFromSun(mars)); // A 1º
console.log(planetDistanceFromSun(venus)); // B 2º
console.log(planetDistanceFromSun(jupiter)); // C 3º