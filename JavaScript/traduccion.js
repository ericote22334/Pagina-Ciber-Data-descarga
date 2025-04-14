const langBtn = document.getElementById('langBtn');
const continentMenu = document.getElementById('continentMenu');

// Datos: continentes y países
const continents = {
  América: ['Brasil', 'Estados Unidos', 'México'],
  Europa: [ 'Alemania', 'Francia', 'Italia', 'España'],
  Asia: ['China', 'Corea', 'Indonesia', 'Japon']
};

// Mapear país a idioma
const languageMap = {
  Brasil: 'por',
  México: 'es',
  España: 'es',
  'Estados Unidos': 'en',
  Francia: 'fr',
  Alemania: 'al' ,
  Italia: 'it' ,
  China: 'ch',
  Corea: 'co',
  Japon: 'ja',
  Indonesia: 'in'
};

// Mostrar lista de continentes
langBtn.addEventListener('click', () => {
  continentMenu.innerHTML = '';
  const ul = document.createElement('ul');

  Object.keys(continents).forEach(continent => {
    const li = document.createElement('li');
    li.textContent = continent;
    li.addEventListener('click', () => showCountries(continent));
    ul.appendChild(li);
  });

  continentMenu.appendChild(ul);
  continentMenu.style.display = 'block';
});

// Mostrar países de un continente
function showCountries(continent) {
  continentMenu.innerHTML = '';
  const ul = document.createElement('ul');

  continents[continent].forEach(country => {
    const li = document.createElement('li');
    li.textContent = country;
    li.addEventListener('click', () => {
      const lang = languageMap[country] || 'en';
      traducirPagina(lang);
      continentMenu.style.display = 'none';
    });
    ul.appendChild(li);
  });

  continentMenu.appendChild(ul);
}

// Cargar JSON de traducción y aplicar a elementos con data-i18n
function traducirPagina(idioma) {
  fetch(`lang/${idioma}.json`)
    .then(res => res.json())
    .then(data => {
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (data[key]) {
          el.textContent = data[key];
        }
      });
    })
    .catch(err => console.error("Error al cargar idioma:", err));
}
