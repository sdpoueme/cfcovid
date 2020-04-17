<template>
    <div>
        <fd-container fluid>
            <fd-panel>
                <fd-panel-grid :col="2">
                    <fd-panel>
                        <h1 align="center">Current Situation</h1>
                        <Stats/>
                    </fd-panel>
                    <fd-panel>
                        <fd-panel>
                            <h2>Heat Maps</h2>
                            <Heatmaps/>
                        </fd-panel>
                        <fd-panel>
                            <h2>Trend Graph</h2>
                            <TrendGraphs/>
                        </fd-panel>
                    </fd-panel>
                </fd-panel-grid>

                <fd-panel>
                    <h2>News & Advices </h2>
                    <News/>
                </fd-panel>

            </fd-panel>

    </fd-container>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";
    import Stats from "@/components/Stats.vue"; // @ is an alias to /src
    import Heatmaps from "@/components/HeatMaps.vue"; // @ is an alias to /src
    import TrendGraphs from "@/components/TrendGraphs.vue"; // @ is an alias to /src
    import News from "@/components/News.vue"; // @ is an alias to /src
    @Component({
        components: {
            Stats,
            Heatmaps,
            TrendGraphs,
            News
        },
    })
    export default class LandingPage extends Vue {}
</script>
