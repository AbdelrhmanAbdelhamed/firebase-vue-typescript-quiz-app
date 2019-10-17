import * as firebase from "firebase/app";
import { config } from "./configs";
import "firebase/firestore";

export default firebase.initializeApp(config);
