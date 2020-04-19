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
                <a href to="https://ee.humanitarianresponse.info/x/#T1SgsyZM"><h2>Am I at risk?</h2></a>
            </vs-navbar-item>
            <vs-navbar-item index="1">
                <router-link to="/"><h2>Emergency Contact</h2></router-link>
            </vs-navbar-item>

            <vs-navbar-item index="3">
             <a href="http://covid19.minsante.cm/"><h2>#covid19</h2></a>
            </vs-navbar-item>

        </vs-navbar>
        <v-container fluid>
            <v-col>

        <router-view/>
            </v-col>

        </v-container>

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
