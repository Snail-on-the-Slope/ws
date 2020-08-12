<template>
  <nav class="menu">
    <ul class="menu__list">
      <li class="menu__link" @click.prevent="goToHome">
        <p class="menu__link_text">Home</p>
      </li>
      <li class="menu__link" @click.prevent="goToDropDown">
        <p class="menu__link_text">DropDown</p>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  methods: {
    goToHome() {
      window.location.pathname === "/"
        ? window.location.reload()
        : this.$router.replace("/");
    },
    goToDropDown() {
      window.location.pathname === "/dropdown"
        ? window.location.reload()
        : this.$router.replace("/dropdown");
    },
  },
};
</script>