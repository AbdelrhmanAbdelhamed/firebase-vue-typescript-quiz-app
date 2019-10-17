<template>
  <v-container>
    <v-col>
      <v-text-field
        hide-details
        label="Title"
        :value="quiz.title"
        @input="updateTitle"
      ></v-text-field>
    </v-col>
    <v-col>
      <v-textarea
        label="Description"
        auto-grow
        clearable
        hide-details
        :value="quiz.description"
        @input="updateDescription"
      ></v-textarea>
    </v-col>
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
export default class quizInformation extends Vue {
  name = "quiz-information";

  get quiz() {
    return QuizzesModule.newQuiz;
  }

  updateTitle(value) {
    QuizzesModule.updateInformation({
      title: value,
      description: this.quiz.description
    });
  }

  updateDescription(value) {
    QuizzesModule.updateInformation({
      description: value,
      title: this.quiz.title
    });
  }
}
</script>
