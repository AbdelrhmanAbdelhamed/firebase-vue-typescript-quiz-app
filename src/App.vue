<template>
  <v-app v-cloak>
    <!-- <v-navigation-drawer app> </v-navigation-drawer> -->
    <app-header :logout="logout" :user="user" :loggedIn="loggedIn"></app-header>
    <v-content>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app> </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { getModule } from "vuex-module-decorators";
import AppHeader from "@/components/AppHeader.vue";

import UserModule from "@/store/modules/user";

@Component({
  components: { AppHeader }
})
export default class App extends Vue {
  name = "App";

  async logout() {
    await UserModule.logout();
  }

  get user() {
    return UserModule.user;
  }
  get loggedIn() {
    return UserModule.loggedIn;
  }
}
</script>

<style lang="scss">
[v-cloak] > * {
  display: none;
}
[v-cloak]::before {
  content: "loading...";
}
</style>
