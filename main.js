document.querySelector('#search').addEventListener('click', getPokemon)


function getPokemon() {
    
    let pokemon = document.querySelector('input').value
    const POKE_URL = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    fetch(POKE_URL)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            console.log(data.abilities[0]);
            document.querySelector('#pokeImg').src = data.sprites.front_default
            document.querySelector('#showName').innerText = data.name.toUpperCase()
            document.querySelector('#pokemonInfo').style.visibility = 'visible'
            document.querySelector('#pokeHeight').innerText = `${data.name.toUpperCase()}'S Height: ${data.height}`
            document.querySelector('#pokeWeight').innerText = `${data.name.toUpperCase()}'S Weight: ${data.weight}`
            document.querySelector('#pokeAbility').innerText = `${data.name.toUpperCase()}'S Ability: ${data.abilities[0].ability.name.toUpperCase()}`
        })
        .catch(err => `Error Caught: ${err}`)

}
