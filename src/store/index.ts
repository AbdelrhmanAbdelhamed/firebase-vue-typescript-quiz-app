import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import { IUserState } from "./modules/user";
import { IQuizState } from "./modules/quizzes";

Vue.use(Vuex);

export interface IRootState {
  user: IUserState;
  quizzes: IQuizState;
  routeState: any;
}

export default new Vuex.Store<IRootState>({
  plugins: [createPersistedState()]
});
