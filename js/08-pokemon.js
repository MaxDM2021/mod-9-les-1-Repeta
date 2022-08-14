const fetchPokemonById = id => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((r) => r.json());
   
};

fetchPokemonById(1).then(onFetchSuccess).catch(onFetchError);

fetchPokemonById(2).then(onFetchSuccess).catch(onFetchError);

fetchPokemonById(3).then(onFetchSuccess).catch(onFetchError);


function onFetchSuccess(pokemon) {
    console.log('onFetchSuccess -> onFetchSuccess')
    console.log(pokemon);
}

function onFetchError(error) {
    console.log('onFetchError-> onFetchError')
    console.log(error)
}

// ===============для закрепления==============



const makePromise = () => {
    return new Promise((resolve, reject) => {
        const passed = Math.random() > 0.5;

        setTimeout(() => {
            if(passed) {
                resolve('Куку это resolve');
            }
            reject('все пропало, это reject');
        }, 2000)
    });
};

makePromise()
.then(result => console.log(result))
.catch(error => console.log(error));

