<template>
  <div class="trends">
        <fd-alert dismissible>
          Happy building! 🚀
        </fd-alert>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import axios from 'axios';

  @Component
  export default class TrendGraphs extends Vue {

    /*mounted () {

      axios.get('https://solinas-api.c4core.c.eu-nl-1.cloud.sap:5000/api/v1/customers').then((response) => {
        console.log(response)
        this.customers = response.data.customers
        this.loadingProgress = 'false'
        this.customerCount = this.customers.length
      }).catch(error => { console.log(error) })
    }*/
  }
</script>
