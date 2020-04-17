<template>
  <div>


      <h2> Confirmed Cases  <fd-badge filled type="warning"> {{ current_confirmed }} </fd-badge> </h2>
      <h2> Total Deaths  <fd-badge filled type="error"> {{ current_deaths }} </fd-badge> </h2>
      <h2> Total Recovered  <fd-badge filled type="success"> {{ current_recovered }} </fd-badge> </h2>
      <h2> Total Currently Testing  <fd-badge filled> {{ current_testing }} </fd-badge> </h2>
      * Source Data from <fd-link href="https://github.com/CSSEGISandData/COVID-19">Novel Coronavirus (COVID-19) Cases / JHU CSSE</fd-link> - {{ stat_day }} daily report

  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import axios from 'axios';
  //import current_stats from '../metrics/current_situation.json';

  @Component
  export default class Stats extends Vue {
      @Prop() private num_confirmed_raw_csv!: string;
      @Prop() private num_deaths_raw_csv!: string;
      @Prop() private num_testing_raw_csv!: string;
      @Prop() private num_recovered_raw_csv!: string;
      @Prop() private current_confirmed!: string;
      @Prop() private current_testing!: string;
      @Prop() private current_deaths!: string;
      @Prop() private current_recovered!: string;
      @Prop() private country!: string
      @Prop() private stat_day!: string
    mounted () {

        var today = new Date();
        var day_sta=(today.getMonth()+1)+'/'+(today.getDate()-1)+'/'+today.getFullYear().toString().substr(-2);
        this.stat_day=day_sta;

        axios.get('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv').then((response) => {

          this.country='Cameroon';
          const Papa = require('papaparse');


          var raw_metrics = Papa.parse(response.data,{delimiter:",", header: true}).data;

          var metrics=raw_metrics.find((stat:any) => stat["Country/Region"] == this.country)

          this.current_confirmed=metrics[day_sta]
          this.num_confirmed_raw_csv=metrics


      }).catch(error => { console.log(error) });

        axios.get('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv').then((response) => {

            this.country='Cameroon';
            const Papa = require('papaparse');
            var today = new Date();
            var day_sta=(today.getMonth()+1)+'/'+(today.getDate()-1)+'/'+today.getFullYear().toString().substr(-2);


            var raw_metrics = Papa.parse(response.data,{delimiter:",", header: true}).data;

            var metrics=raw_metrics.find((stat:any) => stat["Country/Region"] == this.country)

            this.current_deaths=metrics[day_sta]
            this.num_deaths_raw_csv=metrics


        }).catch(error => { console.log(error) })

        axios.get('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_recovered_global.csv').then((response) => {

            this.country='Cameroon';
            const Papa = require('papaparse');
            var today = new Date();
            var day_sta=(today.getMonth()+1)+'/'+(today.getDate()-1)+'/'+today.getFullYear().toString().substr(-2);


            var raw_metrics = Papa.parse(response.data,{delimiter:",", header: true}).data;

            var metrics=raw_metrics.find((stat:any) => stat["Country/Region"] == this.country)

            this.current_recovered=metrics[day_sta]
            this.num_recovered_raw_csv=metrics


        }).catch(error => { console.log(error) })

        this.current_testing='Not Available';
    }
  }
</script>
