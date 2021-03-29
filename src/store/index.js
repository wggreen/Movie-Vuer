import Vue from "vue";
import Vuex from "vuex";

// TODO: Delete this later
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchTerm: "",
    searchResults: [],
    movieDetails: null,
    reviews: []
  },
  mutations: {
    setSearchTerm(state, payload) {
      state.searchTerm = payload;
    },
    setSearchResults(state, payload) {
      state.searchResults = payload;
    },
    setMovieDetails(state, payload) {
      state.movieDetails = payload;
    },
    setMovieReviews(state, payload) {
      state.reviews = payload;
    }
  },
  actions: {
    async searchMovies({ commit }, payload) {
      const apiBaseUrl = "https://api.themoviedb.org/3";
      const apiKey = process.env.VUE_APP_MOVIE_API_KEY;
      const url = `${apiBaseUrl}/search/movie?query=${payload}&api_key=${apiKey}`;

      const res = await fetch(url);
      const data = await res.json();
      commit("setSearchTerm", payload);
      commit("setSearchResults", data);
    },
    async selectMovie({ commit }, movie) {
      const apiBaseUrl = "https://api.themoviedb.org/3";
      const apiKey = process.env.VUE_APP_MOVIE_API_KEY;
      const movieDetailsUrl = `${apiBaseUrl}/movie/${movie.id}?api_key=${apiKey}`;
      const movieReviewsUrl = `${apiBaseUrl}/movie/${movie.id}/reviews?api_key=${apiKey}`;

      // get movie details
      const detailsRes = await fetch(movieDetailsUrl);
      const details = await detailsRes.json();
      commit("setMovieDetails", details);

      // get movie reviews
      const reviewsRes = await fetch(movieReviewsUrl);
      const reviewData = await reviewsRes.json();
      commit("setMovieReviews", reviewData.results);
    }
  },
  modules: {},
  getters: {
    viewableMovies(state) {
      if (!state.searchResults.results) {
        return [];
      }
      return state.searchResults.results.filter(movie => !!movie.poster_path);
    }
  }
});
