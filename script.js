const recordable = (state) => ({
  record: () => `I'm recording a new ${state.type}`,
});

const shareable = (state) => ({
  share: () => `Spread a word about ${state.name}...`,
});

const watchable = (state) => ({
  watch: () => `I'm watching right now ${state.name}`,
});

const movie = (name) => {
  const state = { name: name, type: "movie" };

  return Object.assign(
    {},
    recordable(state),
    shareable(state),
    watchable(state)
  );
};

const latestMovie = movie("Kompozycja vs Dziedziczenie");

latestMovie.record();
latestMovie.share();
latestMovie.watch();
