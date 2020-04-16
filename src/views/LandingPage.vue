<template>
    <div class="landingpage">
        <fd-container fluid>
            <fd-panel>
                <fd-panel-grid :col="2">
                    <fd-panel>
                            Current Situation
                        <Stats />
                    </fd-panel>
                    <fd-panel>
                        <fd-panel>
                            Heat Maps
                            <Heatmaps/>
                        </fd-panel>
                        <fd-panel>
                            Trend Graph
                            <TrendGraphs/>
                        </fd-panel>
                    </fd-panel>
                </fd-panel-grid>

                <fd-panel>
                    News & Advices
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
