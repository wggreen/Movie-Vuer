<template>
  <v-app>
    <app-header />
    <v-main>
      <v-container>
        <search-results />
        <v-row class="mt-6">
          <v-col :sm="12" :md="6">
            <movie-details />
          </v-col>
          <v-col :sm="12" :md="6">
            <movie-reviews />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import MovieDetails from "./components/MovieDetails.vue";
import SearchResults from "./components/SearchResults";
import MovieReviews from "./components/MovieReviews";

export default {
  components: {
    SearchResults,
    AppHeader,
    MovieDetails,
    MovieReviews,
  },
};
</script>