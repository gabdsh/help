<template>
  <div class="list-item-wrap">
    <img :src="video.img_url" @click="openModal(video)" />
    <div class="video-title" @click="openModal(video)">{{ video.name }}</div>
    <div class="play-button">
      <img src="@/assets/play.svg" @click="openModal(video)" />
    </div>
  </div>
  <!-- Модальное окно для просмотра видео -->
  <Modal v-model="showModal" width="750" @on-cancel="closeModal">
    <template #header>
      <span> {{ modalFile.name }}</span>
    </template>
    <div style="text-align: center">
      <video
        :key="modalFile.url"
        controls="controls"
        style="height: 430px; width: 100%; overflow: auto"
      >
        <source :src="modalFile.url" />
      </video>
    </div>
    <template #footer>
      <p>&nbsp;</p>
    </template>
  </Modal>
</template>

<script>
export default {
  name: "VideoItem",
  data() {
    return {
      showModal: false,
      modalFile: {
        url: "",
        name: "",
      },
    };
  },
  props: {
    video: {
      type: Object,
      required: false,
    },
  },
  methods: {
    openModal(file) {
      this.modalFile.url = file.url;
      this.modalFile.name = file.name;
      this.showModal = true;
    },
    closeModal() {
      this.modalFile.url = "";
      this.modalFile.name = "";
      this.showModal = false;
      this.$Modal.remove();
    },
  },
};
</script>

<style lang="less" scoped>
.video-title {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #333333;
}
.list-item-wrap {
  position: relative;
}
.list-item-wrap:hover {
  cursor: pointer;
  .play-button {
    display: block;
  }
}
.play-button {
  position: absolute !important;
  display: none;
  top: 32px;
  left: 69px;
  opacity: 0.7;
}
</style>
