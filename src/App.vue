<template>
  <v-app>
    <v-app-bar app color="primary" dark>
    </v-app-bar>

    <v-content>
      <LandingPage/>
    </v-content>
  </v-app>
</template>

<script>
import LandingPage from './components/LandingPage.vue';

export default {
  name: 'App',

  components: {
    LandingPage,
  },

  data: () => ({
    //
  }),
};
</script>
