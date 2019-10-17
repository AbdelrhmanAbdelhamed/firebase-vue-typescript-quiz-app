import * as firebase from "firebase/app";
import * as firebaseui from "firebaseui";

export const config = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID,
  measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID
};

export const UIConfig = {
  signInOptions: [
    {
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      customParameters: {
        prompt: "select_account"
      }
    },
    {
      provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      customParameters: {
        display: "popup"
      }
    },
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  signInFlow: "popup",
  credentialHelper: firebaseui.auth.CredentialHelper.NONE
};
