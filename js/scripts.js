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

pokemonList.forEach(function(pokemonList) {
  document.write('<h2>' + pokemonList.name + '</h2>' + 'Height: ' + pokemonList.height + ' ');

});
