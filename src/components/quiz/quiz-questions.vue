<template>
  <v-container>
    <v-expansion-panels>
      <v-expansion-panel
        v-for="(item, questionIndex) in quiz.questions"
        :key="questionIndex"
        focusable
        class="grey lighten-3"
      >
        <v-expansion-panel-header>
          {{ item.title }}
        </v-expansion-panel-header>
        <v-expansion-panel-content focusable>
          <v-card outlined class="grey lighten-3">
            <v-card-text>
              <v-row>
                <v-text-field
                  label="Question title"
                  placeholder="Enter Question title"
                  hide-details
                  :value="item.title"
                  @input="updateQuestionTitle($event, questionIndex)"
                ></v-text-field>
              </v-row>
              <v-row> </v-row>

              <v-container v-for="(answer, answerIndex) in item.answers" :key="answerIndex">
                <v-row>
                  <v-col cols="8">
                    <v-text-field
                      label="Answer"
                      placeholder="Enter answer"
                      hide-details
                      :value="answer.title"
                      @input="updateAnswerTitle($event, questionIndex, answerIndex)"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="3">
                    <v-checkbox
                      label="Is the correct answer"
                      :input-value="answer.isCorrect"
                      hide-details
                      @change="updateAnswerState($event, questionIndex, answerIndex)"
                    ></v-checkbox>
                  </v-col>
                  <v-col cols="1">
                    <v-btn
                      fab
                      dark
                      small
                      color="red"
                      @click="removeAnswer({ questionIndex, answerIndex })"
                    >
                      <v-icon>remove</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container>
              <v-container>
                <v-row>
                  <v-spacer />
                  <v-col cols="1">
                    <v-btn
                      v-if="item.answers.length < 6"
                      fab
                      dark
                      small
                      color="green"
                      @click="addAnswer(questionIndex)"
                    >
                      <v-icon>add</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-btn class="mt-4" color="red" dark @click="removeQuestion(questionIndex)"
                >Remove Question
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
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
export default class QuizQuestions extends Vue {
  name = "quiz-questions";
  removeQuestion = QuizzesModule.removeQuestion;
  updateQuestion = QuizzesModule.updateQuestion;
  addAnswer = QuizzesModule.addAnswer;
  removeAnswer = QuizzesModule.removeAnswer;
  updateAnswer = QuizzesModule.updateAnswer;

  get quiz() {
    return QuizzesModule.newQuiz;
  }

  updateQuestionTitle(value, questionIndex) {
    this.updateQuestion({
      title: value,
      questionIndex
    });
  }

  updateAnswerTitle(value, questionIndex, answerIndex) {
    this.updateAnswer({
      title: value,
      isCorrect: this.quiz.questions[questionIndex].answers[answerIndex].isCorrect,
      questionIndex,
      answerIndex
    });
  }

  updateAnswerState(value, questionIndex, answerIndex) {
    this.updateAnswer({
      isCorrect: value,
      title: this.quiz.questions[questionIndex].answers[answerIndex].title,
      questionIndex,
      answerIndex
    });
  }
}
</script>

<style>
.mathfield {
  border: 1px solid #ddd;
  padding: 5px;
  margin: 10px 0 10px 0;
  border-radius: 5px;
  background-color: #fff;
  font-weight: bold;
  font-size: 24px;
}
</style>
