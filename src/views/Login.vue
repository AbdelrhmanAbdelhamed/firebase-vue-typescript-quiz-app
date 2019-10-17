<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <div id="firebaseui-auth-container"></div>
      </v-col>
    </v-row>
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
export default class Login extends Vue {
  name = "Login";
  login = UserModule.login;

  mounted() {
    const authUi =
      firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth());
    authUi.start("#firebaseui-auth-container", UIConfig);
  }
}
</script>

<style src="firebaseui/dist/firebaseui.css"></style>
