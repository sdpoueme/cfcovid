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
                <a href="https://ee.humanitarianresponse.info/x/#T1SgsyZM"><h2>Am I at risk?</h2></a>
            </vs-navbar-item>

            <vs-navbar-item index="3">
             <a href="http://covid19.minsante.cm/"><h2>More infos</h2></a>
            </vs-navbar-item>

        </vs-navbar>
        <v-container fluid>
            <v-col>

        <router-view/>
            </v-col>

        </v-container>

       <fd-panel>

            <v-footer absolute>
                <h4>Use your 3 words address to get emergency assistance: <a :href="map" target="_blank">{{ address }}</a> </h4>
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
      address: "musical.ouverture.create",
      map:"https://what3words.com/musical.overture.create",
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
