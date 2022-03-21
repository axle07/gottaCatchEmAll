const mainDiv = document.getElementById('pokemons')

const fetchPokemon = fetch('https://pokeapi.co/api/v2/pokemon?limit=20/')

fetchPokemon.then(res => {
  res.json().then(pokemons => {
    pokemons.results.forEach(pokemon => {
    console.log(pokemon)
      const link = document.createElement('a')
      link.innerText = pokemon.name
      link.href = pokemon.url

      const node = document.createElement('p')
      node.appendChild(link)

      mainDiv.appendChild(node)
    })
  })
})
