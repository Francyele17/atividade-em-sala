const pokemonInput = document.getElementById("pokemon-input");
const searchButton = document.getElementById("search-button");
const pokemoncard = document.getElementById("pokemon-card-container");

// Função para buscar os dados do pokemon

async function getPokemonData(pokemon){
    try{
        // garantir que o nome do pokemon esteja em minúsculas

        const pokemonNameOrId = pokemon.toLowerCase().trim();
        // fazer a requisição  a api do pokemon

        const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId}`);

        // Verificar 

        if(!response.ok){
            throw new Error (`Pokemon "${pokemonNameOrId}" não encontrado!`);
        }

        // converter a resposta para JSON
        const data = await response.json();

        // renderizar os dados do pókemon
        renderPokemonData(data);
    } catch(error){
} 
}

// função para renderizar os dados do pókemon
function renderPokemonData(pokemonData){

    // Transformar os tipos de pókemon em uma String
    const types = pokemonData.types.map(typeInfo=> typeInfo.type.name);
    // Juntar os tipos em uma String separada por vírgulas
    const typesNames = types.join(',');

    const cardPokemon = `
    <div class="pokemon-card">
    <h2>${pokemonData.name}</h2>
    <img src="${pokemonData.sprites.front_default}" alt=${pokemonData.name}" class="pokemon-image">
    <ul  class="info-list">
    <li> <strong>ID:</strong> <span> ${pokemonData.id}</span> </li>
    <li> <strong>Altura:</strong> <span>${(pokemonData.height/10).toFixed(1)} m</span> <li>
    <li> <strong>Peso:</strong> <span>${(pokemonData.weight/10).toFixed(1)} kg</span> <li>
    <li> <strong>Tipos:</strong> <span>${typesNames}</span> <li>
    </ul>
    </div>
    `
    pokemoncard.innerHTML = cardPokemon;
}

// Adicionar um evento de clique ao botão de pesquisa
searchButton.addEventListener('click', () => {
    // Obter o valor do input e remover espaços em brancos
    const pokemonNameOrId = pokemonInput.value.trim();
    //Verificar se o input não está vazio
    if (pokemonNameOrId){
        // Chamar a função para buscar os dados do pókemon 
        getPokemonData(pokemonNameOrId);
    }
})