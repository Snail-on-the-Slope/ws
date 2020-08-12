<template>
  <div class="home_item-table table">
    <h1>{{data[0]}}</h1>
    <div class="table__container">
      <table class="table__item" v-if="loading">
        <thead class="table__thead">
          <tr class="table__row">
            <th class="table__row__th">Price</th>
            <th class="table__row__th">Ammount</th>
            <th class="table__row__th table__row__th_hide">Total</th>
          </tr>
        </thead>
        <tbody class="table__tbody">
          <tr class="table__tbody__row table__row" v-for="(item, index) in data[1]" :key="index">
            <td class="table__row__td">{{ parseInt(item[0]).toFixed(5) }}</td>
            <td class="table__row__td">{{ parseInt(item[1]).toFixed(5) }}</td>
            <td
              class="table__row__td table__row__td_hide"
            >{{ parseInt(item[0] * item[1]).toFixed(5) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  data: () => ({
    loading: false,
  }),
  mounted() {
    this.loading = true;
  },
};
</script>