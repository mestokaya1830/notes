<template>
  <div class="categories-page fac">
    <header class="categories-header fjsbac">
      <img src="@/assets/img/desktop.png" alt="" @click="setMobil('false')" width="30px" height="30px" v-if="$store.state.auth.mobil">
      <img src="@/assets/img/mobil.png" alt="" @click="setMobil('true')" width="20px" height="30px" v-else>
      <a href="#" @click="logout()" title="Çıkış">
        <LoaderComponent v-if="isLoader"/>
        <img v-else src="@/assets/img/signout.webp" alt="" class="categories-logout">
      </a> 
    </header>
    <div class="categories-con fjsaac">
      <a
        href="/games/soccer"
        class="categories-links fjeac-col"
      >
      <img src="@/assets/img/soccer.webp" alt="" class="categories-icons">
        <span class="categories-text">FUTBOL</span>
      </a>
      <a
      href="/games/soccer-live"
      class="categories-links fjeac-col"
      >
      <img src="@/assets/img/live.webp" alt="" class="categories-icons">
      <span class="categories-text">FUTBOL CANLI</span>
    </a>
    <a
    href="/games/basket"
    class="categories-links fjeac-col"
    >
    <img src="@/assets/img/basket.webp" alt="" class="categories-icons">
       
        <span class="categories-text">BASKET</span>
      </a>
      <a
        href="/games/basket-live"
        class="categories-links fjeac-col"
      >
      <img src="@/assets/img/live.webp" alt="" class="categories-icons">
        <span class="categories-text">BASKET CANLI</span>
      </a>
      <a
      href="/admin"
      class="categories-links fjeac-col"
      >
      <img src="@/assets/img/admin.webp" alt="" class="categories-icons">
        <span class="categories-text">HESABIM</span>
      </a>
    </div>
  </div>
</template>
<script>
import axios from "axios"
import mixins from '@/mixins/index.js'
import LoaderComponent from '@/components/loader-component.vue'

export default {
  name: "CategoriesPage",
  mixins:[mixins],
  components:{
    LoaderComponent
  },
  data() {
    return {
      isLoader: false,
      mobilIcon: false,
      mobilState: this.$store.state.auth.mobil
    };
  },
  mounted() {
    this.getSettings();
    this.betInfoMix()
    if(window.matchMedia('screen and (max-width: 1280px)').matches){
      this.mobilIcon = true
    }
  },
  methods: {
    async getSettings() {
      await axios.get("/api/admin/settings").then((result) => {
        if (result.data.result.length > 0) {
          localStorage.setItem("set", JSON.stringify(result.data.result))
          return false
        }
        localStorage.removeItem('set')
      })
    },
    async logout() {
      this.isLoader = true;
      await axios.post("/api/logout").then((result) => {
        if (result.data.code == 200) {
          this.$store.commit("setBetSlip", false);
          this.$store.commit("removeSlips", "");
          this.$store.commit("setAuth", '');
          this.$store.commit("setOpenChat", false);
          localStorage.clear();
          this.isLoader = false;
          this.$router.push("/");
        }
      })
    },
    async setMobil(state) {
      await axios.put("/api/admin/setmobil", {state: state}).then((result) => {
        if(result.data.code == 200){
          this.logout()
        }
      })
    },
  },
};
</script>

<style scoped>
.categories-page {
  width: 100%;
  min-height: 100vh;
  background-image: url('@/assets/img/home.webp');
  background-position: center;
  background-size: cover;
}
.categories-header {
  width: 100%;
  height: calc(60px + 1vw);
  color: #fff;
  padding: 0 20px;
}
.categories-con {
  width: 86%;
  height: 180px;
  margin-top: 60px;
  padding: 10px;
  border-radius: 10px;
}
.categories-links {
  align-self: auto;
  width: 20%;
  height: calc(150px + 1vh);
  border-radius: 5px;
  margin: 0 20px;
  padding: 10px;
  color: #fff;
  background-color: rgba(24, 32, 42, 0.8);
  box-shadow: #111 5px 5px 5px;
  font-family: roboto;
}
.categories-icons{
  width: calc(64px + 0.5vw);
}
.categories-text {
  margin: 10px 0;
  text-align: center;
  padding: 0 5px;
}
.categories-logout{
  width: calc(30px + 0.5vw);
}
@media screen and (max-width: 1280px){
  .categories-header {
    background-color: #18202A;
    box-shadow: 3px 3px 3px #000;
  }
  .categories-con {
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    margin: 0;
  }
  .categories-links {
    width: 40%;
    margin: 10px;
  }
} 
</style>