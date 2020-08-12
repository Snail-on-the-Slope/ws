<template>
  <div class="app__body__home home">
    <div class="home__table-container">
      <div class="home__table-container_overflow">
        <Table :data="['Bids', data.bids]" />
        <Table :data="['Asks', data.asks]" />
      </div>
    </div>
  </div>
</template>

<script>
import Table from "@/components/Table.vue";

export default {
  name: "Home",
  data: () => ({
    symbol: null,
    data: {
      bids: null,
      asks: null,
    },
    socket: null,
  }),
  async created() {
    this.symbol = this.$store.symbol;
    let temp = await this.$sdk.get(this.symbol);
    this.data.bids = temp.bids.reverse();
    this.data.asks = temp.asks.reverse();
    this.subscribe();

    this.$store.$on("newSymbol", (s) => {
      this.$store.symbol = s;
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