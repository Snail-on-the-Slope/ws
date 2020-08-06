const axios = require("axios");

export const SDK = {
    get: async(symbol, limit = 100) => {
        let glass = await axios.get(
            `https://www.binance.com/api/v1/depth?symbol=${symbol}&limit=${limit}`
        );
        return glass.data;
    },
    subscribe: function(symbol) {
        const { Store } = require("./store");
        let ws = new WebSocket(
            `wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@depth`
        );
        return ws;
    },
};