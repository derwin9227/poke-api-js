function buscarPokemon(id){
    if(id>0 && id<=1008)
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(response => response.json())
            .then(pokeDatos => {
                document.querySelector(".container").innerHTML =`<div class="card">
                  <div class="photo">
                    <img src="${pokeDatos.sprites.front_default}" alt="">
                  </div>
                  </div>
                  <h2 class="name">${pokeDatos.species.name.toUpperCase()}</h2>
              <h2>Attacks</h2>
                  <ul>
                    <li>${pokeDatos.moves[0].move.name}</li>
                    <li>${pokeDatos.moves[1].move.name}</li>
                    <li>${pokeDatos.moves[2].move.name}</li>
                    <li>${pokeDatos.moves[3].move.name}</li>
                  </ul>`;
            }
            )
            .catch(e=>console.log(e));
      else{
        buscarPokemon(1);
        document.getElementById("inputIdPokemon").value = 1;
        alert("Ingresa un numero valido, Solo Tenemos 1008 pokemones registrados");
      }
    }
    let inputIdPokemon = document.getElementById("inputIdPokemon");
buscarPokemon(1);
document.getElementById("buscarPokemon").addEventListener("click", event => {
  
  buscarPokemon(parseInt(inputIdPokemon.value));
});

document.getElementById("inputIdPokemon").addEventListener("change", event => {
   
  buscarPokemon(parseInt(inputIdPokemon.value));
});