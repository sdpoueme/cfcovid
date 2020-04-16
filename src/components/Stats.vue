<template>
  <div class="stats">
    <fd-section>
      <fd-panel>
        <fd-alert dismissible>
          Happy building! 🚀
        </fd-alert>
      </fd-panel>
    </fd-section>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import axios from 'axios';

  @Component
  export default class Stats extends Vue {
    @Prop() private stats!: string;
    @Prop() private city!: string;

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
