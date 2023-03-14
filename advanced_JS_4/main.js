class RenderCharacters {
  constructor(elementUL) {
    this.elementUL = elementUL;
  }
  renderingCharacters(obj) {
    for (const [property, value] of Object.entries(obj)) {
      const li = document.createElement('li');
      li.textContent = `${property}: ${value}`;
      this.elementUL.appendChild(li);
    }
  }
}

class fetchCharacters {
  constructor(characters) {
    this.characters = characters
  }
  getCharacters(ulForAllCharacters, loading) {
    loading.classList.add('loading-spinner')
    const promises = this.characters.map((url) => fetch(url));
    Promise.all(promises)
      .then(responses => {
        responses.forEach(response => response.json()
          .then(data => {
            const liForEachCharacter = document.createElement('li');           
            const ulForEachCharacterInfo = document.createElement('ul');

            const eachCharacter = new RenderCharacters(ulForEachCharacterInfo);
            eachCharacter.renderingCharacters(data);

            liForEachCharacter.append('character:', data.id, ulForEachCharacterInfo);
            ulForAllCharacters.appendChild(liForEachCharacter);
          })
          )
      }).catch(error => console.log(error))
      .finally(() => {
        loading.classList.remove('loading-spinner')
      })
  };
}
  

class Render{
  constructor(data, placeForList) {
    this.data = data
    this.placeForList = placeForList
  }
  rendering() {
  this.data.reduce((acc, { episodeId, name, openingCrawl, characters}) => {
    const ulForFilms = document.createElement('ul');

    const liForCharacters = document.createElement("li");
    liForCharacters.className = 'loading-characters';
    const ulForAllCharacters = document.createElement('ul');
    const loading = document.createElement('div');
    liForCharacters.append('chracters : ', loading, ulForAllCharacters);

    const dataFromFetchCharacters = new fetchCharacters(characters);
    dataFromFetchCharacters.getCharacters(ulForAllCharacters, loading);
    

    const liForId = document.createElement("li");
    liForId.append('episodeId: ', episodeId);

    const liForName = document.createElement("li");
    liForName.append('name : ', name);
    
    const liForCrawl = document.createElement("li");
    liForCrawl.append('openingCrawl : ', openingCrawl);

    ulForFilms.append(liForId, liForName, liForCharacters, liForCrawl);
    acc.append(ulForFilms);
    return acc
  }, this.placeForList);
}
}


function fetchFilms() {
  const filmList = document.querySelector('.films'); 
  const request = new XMLHttpRequest();

  request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const data = JSON.parse(this.response);
      const films = new Render(data, filmList);
      films.rendering();
    }
  }

  request.open('GET', 'https://ajax.test-danit.com/api/swapi/films', true);
  request.send();
}

fetchFilms();

