<template>
  <div class="home">
    <img src="@/assets/baseimg.jpeg" class="main-img" alt="" />
    <VideoList />
    <QuestionsList />
    <router-view />
  </div>
</template>

<script>
import VideoList from "@/views/VideoList.vue";
import QuestionsList from "@/views/QuestionsList.vue";

export default {
  name: "HomeView",
  created: function () {
    this.$store.dispatch("getQuestions");
  },
  components: {
    VideoList,
    QuestionsList,
  },
};
</script>

<style lang="less" scoped>
.main-img {
  margin-bottom: 48px;
}
</style>
