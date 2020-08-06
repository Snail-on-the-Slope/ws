<template>
  <div id="app">
    <header>
      <nav class="menu">
        <ul class="menu__list">
          <li class="menu__group">
            <router-link class="menu__link" to="/">Home</router-link>
          </li>
          <li class="menu__group">
            <router-link class="menu__link" to="/dropdown">DropDown</router-link>
          </li>
        </ul>
      </nav>
    </header>

    <router-view />
  </div>
</template>

<script>
export default {
  created() {
    localStorage.symbol = "BTCUSDT";
  },
};
</script>

<style lang="scss">
* {
  max-width: 1400px;
  margin: 0 auto;
}

#app {
  font-family: "Lexend Exa", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}

header {
  width: 100%;
  padding: 1% 0;
  background-color: #fff;
  position: fixed;
  display: flex;
}

.menu {
  margin: 0 50%;
  transform: translateX(-50%);
  display: inline-block;
  border: 2px solid #ebecf1;
  border-radius: 30px;
  animation: slide-in 1s ease-out;
}

.menu__list {
  position: relative;
  display: flex;
  flex: 1 1 auto;
  margin: 0;
  padding: 0 30px;
  list-style-type: none;
  .menu__group:not(:last-child) {
    margin-right: 40px;
  }
  .menu__group {
    border: 2px solid transparent;
    border-radius: 5px;
    padding: 10px;
    transition: background 0.2s;
    .menu__link {
      color: #2375d8;
      text-decoration: none;
      text-transform: uppercase;
      transition: color 0.2s;
    }
    &:hover {
      background: #d9d2f8;
      border: 2px solid #c9c1ee;
      border-right: 2px solid #bdb3e7;
      border-bottom: 2px solid #bdb3e7;
      .menu__link {
        color: #f9f8fd;
      }
    }
  }
}

@keyframes slide-in {
  0% {
    top: -50px;
  }
  40% {
    top: 3.5%;
  }
  70% {
    top: 2.5%;
  }
  100% {
    top: 3%;
  }
}
</style>
