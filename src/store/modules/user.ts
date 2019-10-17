import { getModule, Module, Mutation, Action, VuexModule } from "vuex-module-decorators";

import { auth } from "firebase";
import firebase from "@/firebase";
import store from "..";

export interface IUserState {
  user: firebase.User | null;
  loggedIn: Boolean;
}

@Module({ dynamic: true, store, name: "user" })
class UserModule extends VuexModule implements IUserState {
  user: firebase.User | null = null;
  loggedIn: Boolean = false;

  @Action
  async login() {
    if (this.loggedIn) return;
    const provider = new auth.GoogleAuthProvider();
    try {
      await firebase.auth().signInWithPopup(provider);
    } catch (error) {
      throw error;
    }
  }

  @Mutation
  setUser({ user, loggedIn }) {
    this.loggedIn = loggedIn;
    this.user = user;
  }

  @Action
  async logout() {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      throw error;
    }
  }
}

export default getModule(UserModule);
