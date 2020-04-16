<template>
    <div>
        <vs-navbar v-model="activeItem" class="nabarx">
            <div slot="title">
                <vs-navbar-title>
                  {{ city }}
                </vs-navbar-title>
            </div>

            <vs-navbar-item index="0">
                <router-link to="/">What is coronavirus?</router-link>
            </vs-navbar-item>
            <vs-navbar-item index="1">
                <router-link to="/">Am I at risk?</router-link>
            </vs-navbar-item>
            <vs-navbar-item index="2">
                <router-link to="/">Public Alerts</router-link>
            </vs-navbar-item>

            <vs-navbar-item index="3">
                <fd-link href="https://twitter.com/i/events/1219057585707315201">#covid19</fd-link>
            </vs-navbar-item>
        </vs-navbar>

        <router-view/>

        <fd-panel>

            <v-footer absolute>
              My current address > <fd-link href="#"> {{ address }} </fd-link>

            </v-footer>
        </fd-panel>

    </div>

</template>

<script>

  export default {
    name: 'App',
    data: () => ({
      activeItem: 0,
      location: [],
      city:"Yaounde",
      address:"x.y.z",
    }),
  };
</script>
<style scope>
    { fontSize: 20pxs }
</style>

