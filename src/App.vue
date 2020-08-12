<template>
  <div id="app">
    <div class="app__header">
      <Navbar />
    </div>

    <div class="app__symbol">
      <p>Символ: {{$store.symbol}}</p>
      <hr />
    </div>

    <div class="app__body">
      <component :is="layout">
        <router-view />
      </component>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  computed: {
    layout() {
      return this.$route.name === "Home"
        ? () => import("@/views/Home.vue")
        : () => import("@/views/DropDown.vue");
    },
  },
  created() {
    this.$store.symbol = "BTCUSDT";
  },
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";
@media screen and (max-width: 680px) {
  @import "@/assets/styles/mobile.scss";
}
</style>