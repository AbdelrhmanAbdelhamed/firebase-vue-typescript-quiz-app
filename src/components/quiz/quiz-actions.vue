<template>
  <v-container>
    <v-row>
      <v-col class="text-left">
        <v-btn v-show="quiz.questions.length < 10" color="primary" @click="addQuestion">
          Add Question
        </v-btn>
      </v-col>
      <v-spacer />
      <v-col class="text-right">
        <v-btn text to="/">Cancel</v-btn>
        <v-btn text color="warning" @click="resetQuiz">Reset</v-btn>
        <v-btn text @click="action" color="purple">{{ actionName }}</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import QuizzesModule from "@/store/modules/quizzes";

@Component({
  components: {}
})
export default class QuizActions extends Vue {
  name = "quiz-actions";

  @Prop() action;
  @Prop() actionName;

  get quiz() {
    return QuizzesModule.newQuiz;
  }

  addQuestion = QuizzesModule.addQuestion;
  resetQuiz = QuizzesModule.resetQuiz;
}
</script>
