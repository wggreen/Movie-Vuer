<template>
  <v-app-bar app color="red darken-1" dark>
    <v-row justify="space-between" align="center">
      <v-col :sm="6">
        <div class="d-flex align-center">
          <h1>Movie Vuer</h1>
        </div>
      </v-col>

      <v-col :sm="2" class="mt-5">
        <form @submit.prevent="handleSubmit">
          <v-text-field
            v-model="query"
            dense
            rounded
            filled
            placeholder="Search movie titles"
            background-color="red lighten-2"
            prepend-inner-icon="mdi-magnify"
          ></v-text-field>
        </form>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      query: "",
    };
  },
  methods: {
    ...mapActions(["searchMovies"]),

    handleSubmit() {
      console.log("Search for:", this.query);
      this.searchMovies(this.query);
    },
  },
};
</script>