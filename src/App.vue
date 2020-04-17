<template>
    <div class="centerx">
        <vs-navbar
                v-model="indexActive"
                :color="colorx"
                text-color="rgb(255,255,255)"
                active-text-color="rgb(255,255,255)"
                class="myNavbar">
            <div slot="title">
                <vs-navbar-title>
                    <h3> {{ country }} Fights Covid</h3>
                </vs-navbar-title>
            </div>

            <vs-navbar-item index="0">
                <router-link to="/"><h1>What is coronavirus?</h1></router-link>
            </vs-navbar-item>
            <vs-navbar-item index="1">
                <router-link to="/"><h1>Am I at risk?</h1></router-link>
            </vs-navbar-item>
            <vs-navbar-item index="2">
                <router-link to="/"><h1>Public Alerts</h1></router-link>
            </vs-navbar-item>

            <vs-navbar-item index="3">

             <a href="https://twitter.com/i/events/1219057585707315201"><h1>#covid19</h1></a>
            </vs-navbar-item>

        </vs-navbar>

        <router-view/>

        <fd-panel>

            <v-footer absolute>
                <h3> Your city: {{ city }}</h3><v-spacer> </v-spacer> <h3>Your What3Words address: {{ address  }}</h3>

            </v-footer>
        </fd-panel>

    </div>

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
