const cities = ['Rome', 'Kyiv', 'Berlin', 'Brugge', 'LA'];

const fourCity = cities.find(city => city.length === 4);

const lastFourCity = cities.slice().reverse().find(city => city.length === 4);

const sixCity = cities.slice().reverse().find(city => city.length === 6);

const indexOfLA = cities.indexOf('LA');

const firstCityWithI = cities.find(city => city.toLowerCase().includes('i'));

console.log(fourCity);
console.log(lastFourCity);
console.log(sixCity);
console.log(indexOfLA);
console.log(firstCityWithI);

