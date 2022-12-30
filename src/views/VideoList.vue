<template>
  <div class="video-list-wrap">
    <div v-for="video in videos" :key="video.id">
      <VideoItem :video="video" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import VideoItem from "@/components/VideoItem.vue";

export default {
  components: { VideoItem },
  name: "VideoList",
  computed: {
    ...mapState(["videos"]),
  },
};
</script>

<style lang="less" scoped>
.video-list-wrap {
  display: grid;
  grid-template-columns: 233px 233px 233px;
  grid-column-gap: 24px;
  margin-bottom: 48px;
}
</style>
