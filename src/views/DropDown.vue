<template>
  <div class="dropdown">
    <div class="input-field">
      <label>Выберите символ</label>
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
    symbol: localStorage.symbol,
  }),
  watch: {
    symbol: function () {
      this.$store.$emit("newSymbol", this.symbol);
    },
  },
};
</script>

<style scoped lang="scss">
.dropdown {
  padding-top: 7%;
  .input-field {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 4%;
    label {
      align-self: center;
      font-size: 20px;
    }
    select {
      align-self: center;
      margin-top: 2%;
      width: 20%;
      height: 30px;
      outline: none;
      padding-left: 15px;
      font-size: 15px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  }
}
@media screen and (max-width: 900px) {
  .dropdown {
    padding-top: 10%;
  }
}
@media screen and (max-width: 680px) {
  .dropdown {
    padding-top: 17%;
    .input-field {
      select {
        width: 35%;
      }
    }
  }
}
</style>
