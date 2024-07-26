<template>
  <div class="container border rounded p-5">
    <h3 style="margin-bottom: 30px;">Reset Password</h3>
    <div class="mb-3 row">
      <label for="email" class="form-label">Email</label>
      <div>
        <input type="email" class="form-control" id="email">
      </div>
    </div>
    <div class="mb-3 row">
      <label for="inputPassword" class="form-label">Password</label>
      <div>
        <input type="password" class="form-control" id="inputPassword">
      </div>
    </div>
    <div class="mb-3 row">
      <label for="confirm_password" class="form-label">Confirm Password</label>
      <div>
        <input type="password" class="form-control" id="confirm_password">
      </div>
    </div>
    <div class="d-grid">
      <button class="btn btn-dark btn-lg" @click="resetPassword()">Reset</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {

    }
  },
  methods: {
    async resetPassword() {
      console.log(this.$route.params.id)
      await axios.post('/api/reset-password', {token: this.$route.params.id}).then(res => {
        console.log(res.data)
      })
    }
  },
}
</script>