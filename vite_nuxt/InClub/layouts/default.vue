<template>
  <v-app dark>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="fixed"
      app
      class="py-0 px-0"
    >
      <BottomNavigation></BottomNavigation>
    </v-footer>
  </v-app>
</template>

<script>
import BottomNavigation from '../components/BottomNavigation.vue';

export default {
    name: "DefaultLayout",
    data() {
        return {
            clipped: false,
            drawer: false,
            fixed: false,
            miniVariant: false,
            right: true,
            rightDrawer: false,
            title: "Vuetify.js"
        };
    },
    components: { BottomNavigation }
}
</script>
