<template>
  <div class="app__body__dropdown dropdown">
    <div class="dropdown__input-field input-field">
      <label>Выберите новый символ</label>
      <select v-model="symbol">
        <option>BTCUSDT</option>
        <option>BNBBTC</option>
        <option>ETHBTC</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "dropdown",
  data: () => ({
    symbol: null,
  }),
  created() {
    this.symbol = this.$store.symbol;
  },
  watch: {
    symbol: function () {
      this.$store.$emit("newSymbol", this.symbol);
    },
  },
};
</script>
