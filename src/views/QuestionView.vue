<template>
  <div class="video-list-wrap">
    <Button type="primary" size="large" class="go-back" @click="goBack()"
      >Назад</Button
    >
    <div class="head-text">{{ selected_question.name }}</div>
    <div class="main-text">
      <span v-html="selected_question.text_area"></span>
    </div>
    <div class="questions-head-title">Наиболее частые вопросы</div>
    <div class="questions-list">
      <div
        class="quest"
        v-for="el in questionList"
        :key="el.id"
        @click="goTo(el)"
      >
        {{ el.name }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "VideoList",
  computed: {
    ...mapState(["selected_question", "questions", "helpdesk_mail"]),
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
        window.location = "mailto:" + this.helpdesk_mail;
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
.main-text {
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0em;
}
.questions-head-title {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  color: #333333;
  margin: 16px 0px;
}
.quest {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  color: #0172b7;
  margin-bottom: 4px;
}

.quest:hover {
  cursor: pointer;
}
</style>

<style>
li {
  margin-left: 16px !important;
}
</style>
