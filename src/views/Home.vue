<template>
  <div v-if="loggedIn">
    <v-skeleton-loader :loading="quizzes.length <= 0" type="card@3">
      <v-row>
        <v-col cols="12" v-for="quiz in quizzes" :key="quiz.id">
          <quiz-card :title="quiz.title" :description="quiz.description" :id="quiz.id" />
        </v-col>
      </v-row>
    </v-skeleton-loader>

    <v-btn v-if="loggedIn" absolute dark fab bottom right color="purple" to="/create" class="mb-5">
      <v-icon>add</v-icon>
    </v-btn>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";
import QuizCard from "@/components/quiz/QuizCard.vue";

import UserModule from "@/store/modules/user";
import QuizzesModule from "@/store/modules/quizzes";

@Component({
  components: { QuizCard }
})
export default class Home extends Vue {
  name = "Home";
  unsubscribeToQuizzies: any = null;

  get loggedIn() {
    return UserModule.loggedIn;
  }
  get quizzes() {
    return QuizzesModule.quizzes;
  }

  async created() {
    this.unsubscribeToQuizzies = await QuizzesModule.bindQuizzesRef();
  }

  destroyed() {
    if (this.unsubscribeToQuizzies) this.unsubscribeToQuizzies();
  }
}
</script>
