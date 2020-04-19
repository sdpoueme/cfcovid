
<template>

    <v-container fluid>
        <line-chart  :colors="['orange','green','#b00']" :curve="true" :data="[{name:'Confirmed Cases',data: confirmed_metrics},{name: 'Recovered Cases',data: recovered_metrics}, {name: 'Deaths',data: deaths_metrics }]" :legend="true" xtitle="Date" ytitle="Number of Cases"/>
    </v-container>

</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    import axios from 'axios';




    @Component
    export default class TrendGraphs extends Vue {
        @Prop() private confirmed_dataset!:object;
        @Prop() private confirmed_labels!:object;
        @Prop() private confirmed_metrics!:object;
        @Prop() private recovered_dataset!:object;
        @Prop() private recovered_labels!:object;
        @Prop() private recovered_metrics!:object;
        @Prop() private deaths_dataset!:object;
        @Prop() private deaths_labels!:object;
        @Prop() private deaths_metrics!:object;
        @Prop() private country!:string;




        mounted () {




            axios.get('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv').then((response) => {


                let Papa = require('papaparse');


                let raw_metrics = Papa.parse(response.data,{delimiter:",", header: true}).data;
                let metrics=raw_metrics.find((stat:any) => stat["Country/Region"] == this.country);

                delete metrics["Province/State"];
                delete metrics["Lat"];
                delete metrics["Long"];
                delete metrics["Country/Region"];

                this.confirmed_dataset=Object.values(metrics);
                this.confirmed_labels=Object.keys(metrics);
                this.confirmed_metrics=metrics;



            }).catch(error => { console.log(error) });

            axios.get('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_recovered_global.csv').then((response) => {


                let Papa = require('papaparse');


                let raw_metrics = Papa.parse(response.data,{delimiter:",", header: true}).data;
                let metrics=raw_metrics.find((stat:any) => stat["Country/Region"] == this.country);

                delete metrics["Province/State"];
                delete metrics["Lat"];
                delete metrics["Long"];
                delete metrics["Country/Region"];

                this.recovered_dataset=Object.values(metrics);
                this.recovered_labels=Object.keys(metrics);
                this.recovered_metrics=metrics;



            }).catch(error => { console.log(error) });

            axios.get('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv').then((response) => {


                let Papa = require('papaparse');


                let raw_metrics = Papa.parse(response.data,{delimiter:",", header: true}).data;
                let metrics=raw_metrics.find((stat:any) => stat["Country/Region"] == this.country);

                delete metrics["Province/State"];
                delete metrics["Lat"];
                delete metrics["Long"];
                delete metrics["Country/Region"];

                this.deaths_dataset=Object.values(metrics);
                this.deaths_labels=Object.keys(metrics);
                this.deaths_metrics=metrics;



            }).catch(error => { console.log(error) });





        }
    }
</script>
