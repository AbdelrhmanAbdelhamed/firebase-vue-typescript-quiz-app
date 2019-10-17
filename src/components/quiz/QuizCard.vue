<template>
  <v-card :color="randomColor()" class="white--text">
    <v-card-title primary-title>
      <div class="headline">{{ title }}</div>
    </v-card-title>
    <v-card-text>{{ description }}</v-card-text>

    <v-card-actions>
      <v-btn text dark :to="`/quiz/${id}`">Take it now</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import QuizzesModule from "@/store/modules/quizzes";

@Component({
  components: {}
})
export default class quizCard extends Vue {
  name = "quiz-card";
  @Prop() title;
  @Prop() description;
  @Prop() id;

  randomColor() {
    const colorsList = [
      "grey",
      "deep-orange",
      "brown",
      "blue-grey",
      "orange",
      "green",
      "cyan",
      "teal",
      "blue",
      "indigo",
      "pink",
      "red",
      "purple"
    ];

    const rand = Math.floor(Math.random() * colorsList.length);

    return colorsList[rand];
  }
}
</script>
