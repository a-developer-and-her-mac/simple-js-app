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

for (let i = 0; i < pokemonList.length; i++) {
  document.write('<h2>' + pokemonList[i].name + '</h2>' + 'Height: ' + pokemonList[i].height + ' ');
  if (pokemonList[i].height >= 1) {
    document.write('\(Wow, that\'s big!\)');
  }
}
