<template>
  <v-card>
    <v-card-title primary-title>
      <div>
        <div class="headline"><v-icon>question_answer</v-icon> New Quiz</div>
      </div>
    </v-card-title>
    <v-card-text>
      <v-subheader>Quiz Information</v-subheader>
      <quiz-information />
      <v-subheader>Quiz Questions</v-subheader>
      <quiz-questions />
      <v-card-actions>
        <quiz-actions :action="createQuiz" actionName="Create" />
      </v-card-actions>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import QuizInformation from "@/components/quiz/quiz-information.vue";
import QuizQuestions from "@/components/quiz/quiz-questions.vue";
import QuizActions from "@/components/quiz/quiz-actions.vue";

import QuizzesModule from "@/store/modules/quizzes";

@Component({
  components: { QuizInformation, QuizQuestions, QuizActions }
})
export default class Create extends Vue {
  name = "Create";
  create = QuizzesModule.create;
  async createQuiz() {
    try {
      await this.create();
      this.$router.push("/");
    } catch (error) {
      throw error;
    }
  }
}
</script>
