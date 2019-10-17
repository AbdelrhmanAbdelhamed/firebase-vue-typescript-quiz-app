<template>
  <v-container fill-height style="height: calc(100vh - 58px);">
    <v-layout align-center>
      <v-flex text-center>
        <h1 class="display-2 primary--text">Whoops, 404</h1>
        <p>The page you were looking for does not exist</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import firebase from "firebase";
import * as firebaseui from "firebaseui";
import { UIConfig } from "@/firebase/configs";

import UserModule from "@/store/modules/user";

@Component({
  components: {}
})
export default class FourOhFour extends Vue {
  name = "FourOhFour";
  mounted() {
    this.$ssrContext.res.status(404);
  }
}
</script>

<style></style>
