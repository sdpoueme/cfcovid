<template>
    <v-container fluid>

        <div v-for="alert in public_alerts" :key="alert.title">
            <fd-alert :type="alert.type" dismissible="false">
                <h3>{{ alert.title }}</h3>
            </fd-alert>
            <br />

        </div>
        </v-container>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import axios from 'axios';

  @Component
  export default class News extends Vue {

      @Prop() private public_alerts!:object;

      mounted() {
          axios.get('https://raw.githubusercontent.com/sdpoueme/cfcovid/master/data/alerts.json').then((response) => {

              this.public_alerts = response.data;
          }).catch(error => {
              console.log(error)
          })

      }
  }
</script>
