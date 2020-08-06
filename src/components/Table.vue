<template>
  <div class="tab">
    <h1>{{data[0]}}</h1>
    <div class="table-container">
      <table class="table" v-if="loading">
        <caption class="table__caption_bg">
          <slot></slot>
        </caption>
        <thead class="table__thead">
          <tr class="table-row">
            <th class="table-row__th">Price</th>
            <th class="table-row__th">Ammount</th>
            <th class="table-row__th table-row__th-total_hide">Total</th>
          </tr>
        </thead>
        <tbody class="table__tbody">
          <tr class="table-row" v-for="(item, index) in data[1]" :key="index">
            <td class="table-row__td">{{ parseInt(item[0]).toFixed(5) }}</td>
            <td class="table-row__td">{{ parseInt(item[1]).toFixed(5) }}</td>
            <td
              class="table-row__td table-row__td-total_hide"
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

<style scoped lang="scss">
.tab {
  margin: 0;
  width: 45%;
  h1 {
    margin: 3% 0;
  }
  .table-container {
    .table {
      position: relative;
      border-collapse: collapse;
      width: 100%;
      .table__thead {
        .table-row__th {
          position: sticky;
          border-bottom: 1px solid #bdb3e7;
          top: 0;
          background-color: #fff;
          &:not(:last-child) {
            border-right: 1px solid #bdb3e7;
          }
        }
      }
      .table__tbody {
        .table-row {
          &:hover {
            background-color: #ebecf1;
          }
          .table-row__td:not(:last-child) {
            border-right: 1px solid #bdb3e7;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 680px) {
  .table-container {
    margin: 0;
    .table {
      font-size: 14px;
      .table-row {
        .table-row__td {
          text-overflow: ellipsis;
          border-right: 1px solid #bdb3e7;
        }
        .table-row__td:first-child {
          border-right: 1px solid #bdb3e7;
        }
      }
      .table-row__th-total_hide,
      .table-row__td-total_hide {
        display: none;
      }
    }
  }
}
</style>