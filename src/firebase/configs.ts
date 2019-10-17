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

/*
export const config = {
  apiKey: "AIzaSyD9GS_S1DWBgZUWU3bczU3XjhFkfSJSLUw",
  authDomain: "quiz-maker-719a7.firebaseapp.com",
  databaseURL: "https://quiz-maker-719a7.firebaseio.com",
  projectId: "quiz-maker-719a7",
  storageBucket: "quiz-maker-719a7.appspot.com",
  messagingSenderId: "988431093253",
  appId: "1:988431093253:web:bc9d6f23d937b66f5a966c",
  measurementId: "G-XESCL4BEF8"
}; */

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
