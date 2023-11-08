// conectando a pokeapi

//variaveis globais

let searchPokemon = 0

const pokemonName = document.querySelector(".pokemon_name")

const pokemonNumber = document.querySelector(".pokemon_number")

const pokemonImage = document.querySelector(".pokemon_image")

const form = document.querySelector(".form")

const input = document.querySelector(".imput_search")

const buttonPrev = document.querySelector(".btn-prev")

const buttonNext = document.querySelector(".btn-next")

const fetchPokemon = async (pokemon) => {

    const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

    if (APIresponse.status === 200) {
        const data = await APIresponse.json();
        return data;

    } 



}

// renderizar dados pokemon

const renderPokemon = async (pokemon) => {

    pokemonName.innerHTML = "Carregando..."

    pokemonNumber.innerHTML = ""

    const data = await fetchPokemon(pokemon)
    console.log(data)

    if (data) {
        pokemonName.innerHTML = data.name;

        pokemonNumber.innerHTML = data.id

        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
        input.value = ""
        searchPokemon =data.id
    } else {
        pokemonImage.src = ""
        input.value = ""
    }


}

form.addEventListener("submit", () => {
    event.preventDefault();
    renderPokemon(input.value.toLowerCase())
})


//eventos dos botões prev e next

buttonPrev.addEventListener("click", ()=>{
    
    if (searchPokemon > 1) {
        searchPokemon -= 1
        renderPokemon(searchPokemon) 
    }
})

buttonNext.addEventListener("click", ()=>{
    searchPokemon += 1
    renderPokemon(searchPokemon)
})

renderPokemon(6)

