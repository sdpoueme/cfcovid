<template>
    <div>

            <fd-panel>
                <fd-panel-grid :col="2">
                    <fd-panel>
                        <h1 align="center">Current Situation</h1>
                        <Stats country="Cameroon"/>
                    </fd-panel>
                    <fd-panel>
                            <h1>Cases Evolution</h1>
                            <TrendGraphs country="Cameroon"/>
                    </fd-panel>
                </fd-panel-grid>

                <fd-panel>
                    <h1>Public Alerts </h1>
                    <News/>
                </fd-panel>

            </fd-panel>


    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import Stats from "@/components/Stats.vue"; // @ is an alias to /src
    import TrendGraphs from "@/components/TrendGraphs.vue"; // @ is an alias to /src
    import News from "@/components/News.vue";

    @Component({
        components: {
            Stats,
            TrendGraphs,
            News
        },
    })
    export default class LandingPage extends Vue {



    }
</script>
