let pokemonRepository = (function() {
  let pokemonList = [{
      name: 'Charmander',
      height: 0.6,
      types: ['Ground', 'Rock', 'Water', 'Steel', 'Fire', 'Ice', 'Fairy']
    },
    {
      name: 'Squirtle',
      height: 0.5,
      types: ['Grass', 'Electric', 'Steel', 'Fire', 'Water', 'Ice']
    },
    {
      name: 'Fearow',
      height: 1.2,
      types: ['Rock', 'Electric', 'Ice', 'Bug', 'Grass', 'Ghost', 'Ground']
    }
  ];

  function add(item) {
    pokemonList.push(item);
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    let ulElement = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerHTML = pokemon.name;
    ulElement.appendChild(listItem);
    listItem.appendChild(button);
    button.classList.add('button-class');
    button.addEventListener('click', function(event) {
      showDetails(pokemon);
    })

  }

  function showDetails(pokemon) {
    console.log(pokemon);
  }
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();

pokemonRepository.getAll().forEach(function(pokemonList) {
  pokemonRepository.addListItem(pokemonList);
});
