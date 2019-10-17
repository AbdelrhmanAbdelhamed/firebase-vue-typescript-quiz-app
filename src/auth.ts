import firebase from "firebase";
import router from "./router";
import UserModule from "@/store/modules/user";

export function getUser() {
  return firebase.auth().currentUser;
}

export function registerAuthUserState() {
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        UserModule.setUser({ user, loggedIn: true });
        if (router.currentRoute.fullPath === "/login") {
          router.push({
            path: "/"
          });
        } else {
          router.forward();
        }
      } else {
        UserModule.setUser({ user: null, loggedIn: false });
        router.push({
          path: "/login"
        });
      }
      resolve();
    });
  });
}
