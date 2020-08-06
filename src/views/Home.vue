<template>
  <div class="home">
    <p>Символ: {{symbol}}</p>
    <hr />
    <div class="table-container">
      <Table :data="['Bids', data.bids]" />
      <Table :data="['Asks', data.asks]" />
    </div>
  </div>
</template>

<script>
import Table from "@/components/Table.vue";

export default {
  name: "Home",
  data: () => ({
    symbol: localStorage.symbol,
    data: {
      bids: null,
      asks: null,
    },
    socket: null,
  }),
  async created() {
    let temp = await this.$sdk.get(this.symbol);
    this.data.bids = temp.bids.reverse();
    this.data.asks = temp.asks.reverse();
    this.subscribe();

    this.$store.$on("newSymbol", (s) => {
      localStorage.symbol = s;
      this.socket.close();
    });
  },
  methods: {
    subscribe() {
      this.socket = this.$sdk.subscribe(this.symbol);

      this.socket.onmessage = async (e) => {
        let temp = JSON.parse(e.data);
        let [newAsks, newBids] = [
          temp.a.filter((item) => item[1] != 0),
          temp.b.filter((item) => item[1] != 0),
        ];

        newAsks.reverse();
        newBids.reverse();

        this.data.asks.splice(
          this.data.asks.length - newAsks.length,
          newAsks.length
        );

        this.data.bids.splice(
          this.data.bids.length - newBids.length,
          newBids.length
        );

        this.data.asks = [...newAsks, ...this.data.asks];
        this.data.bids = [...newBids, ...this.data.bids];
      };
    },
  },
  components: {
    Table,
  },
};
</script>


<style scoped lang="scss">
.home {
  padding-top: 7%;
  p {
    font-size: 20px;
  }
  hr {
    width: 45%;
    margin-top: 10px;
    height: 1px;
    border: 0;
    border-top: 1.5px solid #bdb3e7;
  }
  .table-container {
    display: flex;
    margin-top: 2%;
    margin-left: 3%;
    height: 60vh;
    overflow-y: auto;
    ::-webkit-scrollbar {
      margin-top: 5%;
    }
  }
  @media screen and (max-width: 900px) {
    padding-top: 10%;
  }
  @media screen and (max-width: 680px) {
    padding-top: 17%;
  }
}
</style>