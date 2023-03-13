// class StarWarsPlanets {
//   constructor() {
//     this.url = "https://ajax.test-danit.com/api/swapi/planets";
//   }

//   async getAllPlanets() {
//     try {
//       const response = await fetch(this.url);
//       const data = await response.json();
//       const planets = data;
//       return planets.sort((a, b) => b.diameter - a.diameter);
//     } catch (error) {
//       console.error(error);
//     }
//   }
// }

// Пример использования класса
// const starWarsPlanets = new StarWarsPlanets();
// starWarsPlanets.getAllPlanets().then(planets => {
//     planets.forEach(planet => {
//         console.log(planet.name, planet.diameter / 2);
//     });
// })


// class StarWarsAPI {
//   static getPlanets() {
//     return new Promise((resolve, reject) => {
//       fetch('https://ajax.test-danit.com/api/swapi/planets')
//         .then(response => {
//           if (!response.ok) {
//             throw new Error('Failed to fetch planets');
//             }
//             // console.log(response);
//           return response.json();
//         })
//           .then(data => {
//               const planets = data;
//             //   console.log(planets)
//               planets.sort((a, b) => b.diameter - a.diameter
// );
//           resolve(planets);
//         })
//         .catch(error => {
//           reject(error);
//         });
//     });
//   }
// }
// // StarWarsAPI.getPlanets().then(el=>console.log(el))
// StarWarsAPI.getPlanets().then(planets => {
//   planets.forEach(planet => {
//     console.log(planet.name, planet.diameter/2);
//   });
// }).catch(error => {
//   console.error(error);
// });

class Requests {
  constructor(url) {
    this.url = url;
  }

  async sendRequest(endpoint) {
    const response = await fetch(`${this.url}${endpoint}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
      const data = await response.json();
      console.log(data)
    return data;
  }
}


class StarWars {
  constructor() {
    this.requests = new Requests("https://ajax.test-danit.com/api/swapi/");
    this.planetForm = document.getElementById("starForm");
    this.planetInput = document.getElementById("planet");
    this.planetInfo = document.getElementById("planetInfo");
    this.planetNumber = 0;
    this.maxPlanets = 60;
    this.planetForm.addEventListener("submit", this.handleSubmit.bind(this));
  }

  async handleSubmit(event) {
    event.preventDefault();
    const planetNumber = parseInt(this.planetInput.value);
    if (planetNumber < 1 || planetNumber > this.maxPlanets) {
      alert(`Invalid planet number. Please enter a number between 1 and ${this.maxPlanets}.`);
      return;
    }
    this.planetNumber = planetNumber;
    this.displayPlanetInfo();
  }

  async displayPlanetInfo() {
    try {
      const planetData = await this.requests.sendRequest(`planets/${this.planetNumber}`);
      const planetName = planetData.name;
      const planetPopulation = planetData.population === "unknown" ? "unknown" : numberWithCommas(planetData.population);
      const planetDiameter = numberWithCommas(planetData.diameter);
      const planetClimate = planetData.climate;
      const planetTerrain = planetData.terrain;
      const planetFilms = planetData.films.length;
      this.planetInfo.innerHTML = `
        <h2>${planetName}</h2>
        <p>Population: ${planetPopulation}</p>
        <p>Diameter: ${planetDiameter} km</p>
        <p>Climate: ${planetClimate}</p>
        <p>Terrain: ${planetTerrain}</p>
        <p>Featured in ${planetFilms} films</p>
      `;
    } catch (error) {
      console.log(error);
      alert("An error occurred while fetching data from the server. Please try again later.");
    }
  }
}

// function numberWithCommas(x) {
//   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// }

const starWars = new Requests("https://ajax.test-danit.com/api/swapi/planets/");
starWars.sendRequest(10)