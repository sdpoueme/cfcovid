<template>
    <v-container fluid>


      <h2> Confirmed Cases  <fd-badge filled type="warning"> {{ current_confirmed }} </fd-badge> </h2>
      <h2> Total Deaths  <fd-badge filled type="error"> {{ current_deaths }} </fd-badge> </h2>
      <h2> Total Recovered  <fd-badge filled type="success"> {{ current_recovered }} </fd-badge> </h2>
      <h2> Total Tests Performed  <fd-badge filled> {{ current_testing }} </fd-badge> </h2>
      <h2> Case-Fatality Ratio  <fd-badge filled> {{ ((Number(current_deaths)/(Number(current_confirmed))*100)).toFixed(2)  }}% </fd-badge> </h2>
      * Source Data from <fd-link href="https://github.com/CSSEGISandData/COVID-19">Novel Coronavirus (COVID-19) Cases / JHU CSSE</fd-link> - {{ stat_day }} daily report

    </v-container>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import axios from 'axios';
  //import current_stats from '../metrics/current_situation.json';

  @Component
  export default class Stats extends Vue {
      @Prop() private current_confirmed!: string;
      @Prop() private current_testing!: string;
      @Prop() private current_deaths!: string;
      @Prop() private current_recovered!: string;
      @Prop() private country!: string
      @Prop() private stat_day!: string
      @Prop() private covid_confirmed_global!: string;
      @Prop() private covid_deaths_global!: string;
      @Prop() private covid_recovered_global!: string;
      @Prop() private covid_testing_global!: string;

      mounted () {

        var today = new Date();
        var day_sta=(today.getMonth()+1)+'/'+(today.getDate()-1)+'/'+today.getFullYear().toString().substr(-2);
        var previous_day_sta=(today.getMonth()+1)+'/'+(today.getDate()-2)+'/'+today.getFullYear().toString().substr(-2);
        this.stat_day=day_sta;

          //this.country='Cameroon';
          axios.get('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv').then((response) => {


              this.covid_confirmed_global=response.data;
              let Papa = require('papaparse');


              let raw_metrics = Papa.parse(this.covid_confirmed_global,{delimiter:",", header: true}).data;

              let metrics=raw_metrics.find((stat:any) => stat["Country/Region"] == this.country);

              if(!metrics[day_sta])
              {

                  this.current_confirmed=metrics[previous_day_sta];
              }
              else
              {
                  this.current_confirmed=metrics[day_sta];
              }


          }).catch(error => { console.log(error) });

          axios.get('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv').then((response) => {

              this.covid_deaths_global=response.data;

              let Papa = require('papaparse');

              let raw_metrics = Papa.parse(this.covid_deaths_global,{delimiter:",", header: true}).data;

              let metrics=raw_metrics.find((stat:any) => stat["Country/Region"] == this.country);

              if(!metrics[day_sta])
              {

                  this.current_deaths=metrics[previous_day_sta];
              }
              else
              {
                  this.current_deaths=metrics[day_sta];
              }


          }).catch(error => { console.log(error) })

          axios.get('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_recovered_global.csv').then((response) => {

              this.covid_recovered_global=response.data;
              let Papa = require('papaparse');

              let raw_metrics = Papa.parse(this.covid_recovered_global,{delimiter:",", header: true}).data;

              let metrics=raw_metrics.find((stat:any) => stat["Country/Region"] == this.country);

              if(!metrics[day_sta])
              {

                  this.current_recovered=metrics[previous_day_sta];
              }
              else
              {
                  this.current_recovered=metrics[day_sta];
              }


          }).catch(error => { console.log(error) })

          this.current_testing='Not Available';




    }
  }
</script>
