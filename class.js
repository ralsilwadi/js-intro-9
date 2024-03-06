const cities = ['Berlin', 'Rome', 'Chicago', 'Kiev', 'Istanbul', 'Tokyo'];
let iInCity = []
for (const city of cities) {
    if (city.toLowerCase().includes('i')) {
        iInCity.push(city)
    }
}
console.log(iInCity)
