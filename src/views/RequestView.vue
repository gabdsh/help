<template>
  <div class="video-list-wrap">
    <Button type="primary" size="large" class="go-back" @click="goBack()"
      >Назад</Button
    >
    <div class="head-text">Не нашли ответ на интересующий вопрос?</div>
    <div class="head-text2">Форма обращения в службу поддержкит ВСК</div>
    <div class="request-title">Описание вопроса (не более 500 символов)</div>
    <Input
      v-model="text"
      type="textarea"
      :rows="7"
      placeholder="Введите текст"
    />
    <Button
      type="primary"
      size="large"
      class="send-request"
      :disabled="text.trim() == ''"
      @click="sendRequest()"
      >Отправить</Button
    >
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "VideoList",
  data() {
    return {
      text: "",
    };
  },
  computed: {
    ...mapState(["selected_question", "questions"]),
    questionList() {
      return this.questions.filter((q) => q.id != this.selected_question.id);
    },
  },
  created: function () {
    if (this.selected_question.id == "") {
      this.$store.dispatch("getQuestions").then(() => {
        let findQuestion = this.questions.find(
          (q) => q.id == this.$route.params.id
        );
        if (findQuestion != undefined) {
          this.$store.commit("setSeleted", findQuestion);
        }
      });
    }
  },
  methods: {
    goBack() {
      this.$router.push({ name: "home" });
    },
    goTo(el) {
      if (el.code == "last") {
        this.$router.push({ name: "request" });
      } else {
        this.$store.commit("setSeleted", el);
        this.$router.push({ name: "question", params: { id: el.id } });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.go-back {
  width: 117px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.2px;
  background: white;
  color: #0172b7;
}
.head-text {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  color: #333333;
  margin: 24px 0px;
}
.head-text2 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  margin-bottom: 24px;
}
.request-title {
  margin-bottom: 4px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #333333;
}

.send-request {
  margin-top: 24px;
  float: right;
}
</style>
