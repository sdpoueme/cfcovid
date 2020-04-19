<template>
    <v-container fluid>
    <div class="centerx">
        <vs-navbar
                v-model="indexActive"
                :color="colorx"
                text-color="rgb(255,255,255)"
                active-text-color="rgb(255,255,255)"
                class="myNavbar">
            <div slot="title">
                <vs-navbar-title>
                    <h1> {{ country }} Fights Covid</h1>
                </vs-navbar-title>
            </div>

            <vs-navbar-item index="0">
                <router-link to="/"><h2>Am I at risk?</h2></router-link>
            </vs-navbar-item>
            <vs-navbar-item index="1">
                <router-link to="/"><h2>1510 Emergency Center</h2></router-link>
            </vs-navbar-item>
            <vs-navbar-item index="2">
                <router-link to="/"><h2>Alerts</h2></router-link>
            </vs-navbar-item>

            <vs-navbar-item index="3">

             <a href="https://twitter.com/i/events/1219057585707315201"><h2>#covid19</h2></a>
            </vs-navbar-item>

        </vs-navbar>

        <router-view/>

        <fd-panel>

            <v-footer absolute>
                <h3> Your city: {{ city }}</h3><v-spacer> </v-spacer> <h3>Your What3Words address: {{ address  }}</h3>

            </v-footer>
        </fd-panel>

    </div>

    </v-container>

</template>

<script>

  export default {
    name: 'App',
    data: () => ({
      activeItem: 0,
      colorx:'#4285F4',
      location: [],
      city:"Yaounde",
      address:"x.y.z",
      country: "Cameroon"
    }),
  };
</script>

<style lang="stylus" scoped>
    .input-color
        margin-bottom 10px
        position relative
        display block
    .myNavbar
        color rgb(255,255,255)


</style>
