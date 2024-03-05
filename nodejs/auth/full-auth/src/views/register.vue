<template>
  <div class="login-page fjcac">
    <form class="login-form" @submit.prevent="register()">
      <header class="login-header fjcac-col">
        <img src="@/assets/img/logo.webp" alt="" class="login-logo">
      </header>
      <div class="login-center f-col">
        <div class="input-con">
          <input v-model="newUser.user" type="text" ref="username" @focus="removeError()" class="login-inputs" placeholder="Kullanıcı Adı" required
            pattern="^[A-Za-z0-9].{3,50}"
            oninvalid="this.setCustomValidity('Üye alanı en az 4 karekter ilk karekter Harf yada Sayı olmalıdır')"
            oninput="setCustomValidity('')" tabindex='0'>
          <input v-model="newUser.email" type="text" ref="email" @focus="removeError()" class="login-inputs" placeholder="Email" required
            pattern="^[A-Za-z0-9].{3,50}"
            oninvalid="this.setCustomValidity('Email alanı en az 4 karekter ilk karekter Harf yada Sayı olmalıdır')"
            oninput="setCustomValidity('')" tabindex='0'>
        </div>
        <div class="input-con">
          <input v-model="newUser.pass" type="password" @focus="removeError()" class="login-inputs" placeholder="Şifre" required
            oninvalid="this.setCustomValidity('Şifre alanı boş bırakılamaz!')" oninput="setCustomValidity('')" tabindex='0'>
          <input v-model="passConfirm" type="password" @focus="removeError()" class="login-inputs" placeholder="Şifre Tekrar" required
            oninvalid="this.setCustomValidity('Şifre alanı boş bırakılamaz!')" oninput="setCustomValidity('')" tabindex='0'>
        </div>
          <input v-if="!isLoader && !message" type="submit" value="Devam" class="login-button">
        <div class="loader-container">
          <LoaderComponent v-if="isLoader"/>
        </div>
        <AlertComponent v-if="message" :message="message" />
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios"
import LoaderComponent from "@/components/loader-component.vue";
import AlertComponent from "@/components/alert-component.vue";
export default {
  name: 'LoginPage',
  components:{
    LoaderComponent,
    AlertComponent
  },
  data() {
    return {
      newUser:{
        user: '',
        pass: '',
        email:'',
      },
      passConfirm: '',
      message: '',
      isLoader: false
    }
  },
  mounted(){
    this.$refs.username.focus()
  },
  methods: {
    async register() {
      if (navigator.onLine === true) {
        if(this.newUser.pass !== this.passConfirm){
          this.message = {
            state: 'error',
            result: 'Şifreler uyuşmuyor!'
          }
          this.isLoader = false
          return false
        }
        this.isLoader = true
        await axios.post('/api/register', {newUser: this.newUser}).then((result) => {
          if (result.data.code == 200) {
            this.isLoader = false
            this.message = {
              state: 'success',
              result: result.data.message
            }
            this.$router.push('/login')
          } else {
            this.isLoader = false
            this.message = {
              state: 'error',
              result: result.data.message
            }
          }
        })
        return false
      }
      this.message = {
        state: 'error',
        result: 'Baglanti Yok!'
      }
    },
    removeError() {
      this.message = null
    }
  }
}
</script>