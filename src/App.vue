<template>
  <div :class="{ dev: !devMode }">
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      devMode: process.env.NODE_ENV === "production",
    };
  },
};
</script>

<style>
#app-main {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #333333;
}

.dev {
  width: 886px;
  margin: 0 auto;
  background: #f7f7f7;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
