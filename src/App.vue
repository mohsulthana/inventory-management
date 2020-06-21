<template>
  <v-app>
    <v-app-bar src="https://picsum.photos/1920/1080?random" absolute app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Inventory Management</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',

  components: {
    // HelloWorld,
  },

  data: () => ({
    tab: null,
    items: [
      { tab: 'One', content: 'Tab 1 Content' },
      { tab: 'Two', content: 'Tab 2 Content' },
    ],
  }),
};
</script>
