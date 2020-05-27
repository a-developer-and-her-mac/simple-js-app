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

  function addListItem(pokemon){
    let ulElement=document.querySelector('.pokemon-list');
    let listItem=document.createElement('li');
    let button=document.createElement('button');
    button.innerText= pokemon;
    button.classList.add('button-class');
    listItem.appendChild=('button');
    ulElement.appendChild=('listItem');
  }
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();

pokemonRepository.getAll().forEach(function(pokemonList) {
pokemonRepository.addListItem(pokemonList.name);
});
