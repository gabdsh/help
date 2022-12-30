<template>
  <div class="questions-head-title">Наиболее частые вопросы</div>
  <div class="questions-list">
    <div class="quest" v-for="el in questions" :key="el.id" @click="goTo(el)">
      {{ el.name }}
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "QuestionsList",
  methods: {
    goTo(el) {
      if (el.code == "last") {
        window.location = "mailto:" + this.helpdesk_mail;
      } else {
        this.$store.commit("setSeleted", el);
        this.$router.push({ name: "question", params: { id: el.id } });
      }
    },
  },
  computed: {
    ...mapState(["questions", "helpdesk_mail"]),
  },
};
</script>

<style lang="less" scoped>
.questions-head-title {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  color: #333333;
  margin-bottom: 16px;
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
