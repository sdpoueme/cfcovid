<template>
    <div class="landingpage">

    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";
    import Stats from "@/components/Stats.vue"; // @ is an alias to /src
    @Component({
        components: {
            Stats,
        },
    })
    export default class LandingPage extends Vue {}
</script>
