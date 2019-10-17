import { getModule, Module, Mutation, Action, VuexModule } from "vuex-module-decorators";
import db, { QUIZZES_COLLECTION } from "@/db";

import UserModule from "./user";

import store from "..";

export interface IAnswer {
  id?: string;
  title: string;
  isCorrect: Boolean;
}

export interface IQuestion {
  id?: string;
  title: string;
  answers: IAnswer[];
}

export interface IQuiz {
  id?: string;
  userId?: string;
  title: string;
  description: string;
  questions: IQuestion[];
}

export interface IQuizState {
  quizzes: IQuiz[];
  newQuiz: IQuiz;
  currentQuiz: IQuiz;
}

@Module({ dynamic: true, store, name: QUIZZES_COLLECTION })
class QuizzesModule extends VuexModule implements IQuizState {
  quizzes: IQuiz[] = [];
  newQuiz = this.createEmptyQuiz();
  currentQuiz = this.createEmptyQuiz();

  createEmptyQuiz(): IQuiz {
    return {
      title: "",
      description: "",
      questions: []
    };
  }

  @Mutation
  resetQuiz() {
    this.newQuiz = this.createEmptyQuiz();
  }

  @Mutation
  setCurrentQuiz(quiz: IQuiz) {
    this.currentQuiz = quiz;
  }

  @Mutation
  updateInformation(info) {
    this.newQuiz.title = info.title;
    this.newQuiz.description = info.description;
  }

  @Mutation
  addQuestion() {
    this.newQuiz.questions.push({
      title: `Question # ${this.newQuiz.questions.length + 1}`,
      answers: []
    });
  }

  @Mutation
  removeQuestion(questionIndex: number) {
    if (questionIndex >= 0 && this.newQuiz.questions.length >= 1) {
      this.newQuiz.questions.splice(questionIndex, 1);
    }
  }

  @Mutation
  updateQuestion({ questionIndex, title }) {
    if (questionIndex >= 0) {
      const question = this.newQuiz.questions[questionIndex];
      question.title = title;
    }
  }

  @Mutation
  addAnswer(questionIndex: number) {
    const { answers } = this.newQuiz.questions[questionIndex];
    if (answers && answers.length < 6) {
      answers.push({
        title: `Answer # ${answers.length + 1}`,
        isCorrect: false
      });
    }
  }

  @Mutation
  removeAnswer({ questionIndex, answerIndex }) {
    const question = this.newQuiz.questions[questionIndex];

    if (question && answerIndex >= 0 && question.answers.length >= 1) {
      question.answers.splice(answerIndex, 1);
    }
  }

  @Mutation
  updateAnswer({ questionIndex, answerIndex, title, isCorrect }) {
    if (questionIndex >= 0 && answerIndex >= 0) {
      const answer = this.newQuiz.questions[questionIndex].answers[answerIndex];
      answer.isCorrect = isCorrect;
      answer.title = title;
    }
  }

  @Mutation
  pushQuiz(quiz: IQuiz) {
    this.quizzes.push(quiz);
  }

  @Mutation
  restQuizzes() {
    this.quizzes = [];
  }

  @Mutation
  changeQuizzes({ newIndex, oldIndex, doc, type }) {
    if (type === "added") {
      this.quizzes.splice(newIndex, 0, doc.data());
    } else if (type === "modified") {
      this.quizzes.splice(oldIndex, 1);
      this.quizzes.splice(newIndex, 0, doc.data());
    } else if (type === "removed") {
      this.quizzes.splice(oldIndex, 1);
    }
  }

  @Action
  bindQuizzesRef() {
    this.restQuizzes();
    const unsubscribe = db.collection(QUIZZES_COLLECTION).onSnapshot(ref => {
      ref.docChanges().forEach(change => {
        this.changeQuizzes(change);
      });
    });
    return unsubscribe;
  }

  @Action
  async getById(id: string) {
    const quiz = await db
      .collection(QUIZZES_COLLECTION)
      .doc(id)
      .get();

    if (quiz.exists) {
      this.setCurrentQuiz({ id: quiz.id, ...(<IQuiz>quiz.data()) });
    }
  }

  @Action
  fetchById() {}

  @Action
  async create() {
    const { user } = UserModule;
    if (user) {
      this.newQuiz.questions.forEach(question => {
        const hasCorrectAnswer = question.answers.some(answer => {
          return answer.isCorrect === true;
        });
        if (!hasCorrectAnswer) {
          throw new Error(`Question: '${question.title}' doesn't have a correct answer!`);
        }
      });

      await db.collection(QUIZZES_COLLECTION).add({
        ...this.newQuiz,
        userId: user.uid
      });
    } else {
      throw new Error("Unauthorized");
    }
  }

  @Action
  update() {}

  @Action
  delete() {}
}

export default getModule(QuizzesModule);
