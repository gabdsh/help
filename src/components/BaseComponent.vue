<template>
  <div class="basecomponent">
    {{ text }} {{ msg }} = {{ ruPrice(9876543210) }} руб
  </div>
</template>

<script>
// import { mapState } from "vuex";
// import GoBack from "@/components/GoBack.vue";

export default {
  name: "BaseComponent",
  components: {
    // GoBack,
  },
  data() {
    return {
      text: "Base component",
    };
  },
  props: {
    msg: { type: String, required: true, default: "" },
  },
  mounted: function () {
    // this.$store.dispatch("actionName", { a: 1 });
  },
  methods: {
    ruPrice(number) {
      return new Intl.NumberFormat("ru-RU").format(number);
    },
    goTo(id) {
      this.$router.push({ name: "RouteName", params: { id: id } });
    },
  },
  computed: {
    // ...mapState(["steps"]),
  },
};
</script>

<style scoped>
.basecomponent {
  margin: 16px 0px;
}
</style>
