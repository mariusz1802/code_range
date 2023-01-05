const recordable = (state) => ({
  record : () => `I'm recordin a new ${state.type}!`,
})

const sharable = (state) => ({
share : () => `Spread a word about ${state.name}...`,
})

const watchable = (state) =>({
  watch : () => `I'm watching right now: ${state.name}`
})

const movie = (name) => {
  const state = {name : name, type: 'movie'}
    return Object.assign({}, recordable(state), sharable(state), watchable(state));
}



const latestMovie = movie('Kompozycja vs. Dziedziczenie');


latestMovie.record(); //I'm recording a new movie!
latestMovie.share(); //Spread a word about Kompozycja vs. Dziedziczenie ...
latestMovie.watch() //I'm watching right now: Kompozycja vs. dziedziczenie