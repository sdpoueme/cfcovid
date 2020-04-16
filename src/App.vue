<template>
    <div>
        <vs-navbar v-model="activeItem" class="nabarx">
            <div slot="title">
                <vs-navbar-title>
                   Yaounde, Cameroon
                </vs-navbar-title>
            </div>

            <vs-navbar-item index="0">
                <a href="#">What is coronavirus?</a>
            </vs-navbar-item>
            <vs-navbar-item index="1">
                <a href="#">Am I at risk?</a>
            </vs-navbar-item>
            <vs-navbar-item index="2">
                <a href="#">Public Alerts</a>
            </vs-navbar-item>
        </vs-navbar>
        <fd-panel>
            <router-view/>
        </fd-panel>
        <v-footer>#stayhome</v-footer>
    </div>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    activeItem: 0
  }),
};
</script>
