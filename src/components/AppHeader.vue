<template>
  <v-app-bar app dark color="primary">
    <v-toolbar-title class="white--text ml-5">Quiz App</v-toolbar-title>
    <v-spacer />

    <div v-if="loggedIn">
      <v-skeleton-loader :loading="user.photoURL == null" type="avatar">
        <v-menu v-if="loggedIn" absolute offset-y style="max-width: 600px">
          <template v-slot:activator="{ on }">
            <v-avatar class="mr-5" v-on="on">
              <img :src="user.photoURL" />
            </v-avatar>
            <strong>
              {{ user.displayName }}
            </strong>
          </template>

          <v-list>
            <v-list-item @click="logout">
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-skeleton-loader>
    </div>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component({
  components: {}
})
export default class AppHeader extends Vue {
  name = "AppHeader";
  @Prop() logout;
  @Prop() user;
  @Prop() loggedIn;
}
</script>
