<template>
  <v-container>
    <v-skeleton-loader :loading="quiz.questions.length <= 0" type="card, article">
      <v-container v-if="done">
        <v-row justify="center" align="center">
          <h1 class="display-4">You Scored: 90/100</h1>
        </v-row>
        <v-row class="pa-4 ma-4" justify="center" align="center">
          <v-btn to="/" color="primary">Go Home</v-btn>
        </v-row>
      </v-container>
      <v-stepper v-else v-model="step" non-linear vertical>
        <template v-for="(question, i) in quiz.questions">
          <v-stepper-step
            editable
            edit-icon="$vuetify.icons.complete"
            :step="i + 1"
            :key="`${i + 1}-step`"
            :complete="step > i + 1"
          >
            {{ `Question ${i + 1}` }}
          </v-stepper-step>
          <v-stepper-content :key="`${i + 1}-content`" :step="i + 1">
            <v-card>
              <v-card-title class="justify-left">
                {{ question.title }}
              </v-card-title>
              <v-card-text class="text-left">
                <v-radio-group v-model="selectedStepAnswer">
                  <v-radio
                    v-for="(answer, j) in question.answers"
                    :key="j"
                    :label="answer.title"
                    :value="j"
                  ></v-radio>
                </v-radio-group>
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary" @click="nextStep">{{
                  i + 1 === quiz.questions.length ? "Finish" : "Next"
                }}</v-btn>
              </v-card-actions>
            </v-card>
          </v-stepper-content>
        </template>
      </v-stepper>
    </v-skeleton-loader>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import QuizzesModule from "@/store/modules/quizzes";

@Component({
  components: {}
})
export default class Quiz extends Vue {
  name = "Quiz";
  getQuiz = QuizzesModule.getById;
  step: number = 1;
  selectedStepAnswer: number = -1;
  done: Boolean = false;
  mistakes: {
    title: string;
    correctAnswer: string;
    chosenAnswer: string;
  }[] = [];

  get quiz() {
    return QuizzesModule.currentQuiz;
  }

  created() {
    this.getQuiz(this.$route.params.id);
  }

  nextStep() {
    if (this.selectedStepAnswer < 0) return;
    const question = this.quiz.questions[this.step - 1];
    const answer = question.answers[this.selectedStepAnswer];
    if (answer && answer.isCorrect) {
      // add answer's points to score
    } else {
      this.mistakes.push({
        title: question.title,
        correctAnswer: question.answers.find(targetAnswer => targetAnswer.isCorrect)!.title,
        chosenAnswer: answer.title
      });
    }
    if (this.step < this.quiz.questions.length) {
      this.step = this.step + 1;
      this.selectedStepAnswer = -1;
    } else {
      this.done = true;
    }
  }
}
</script>
