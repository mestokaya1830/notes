<template>
  <div>
    <h2>Register Page</h2>

    <form @submit.prevent="register()">
      <input type="text" ref="name" placeholder="Name" />
      <input type="text" ref="email" placeholder="Email" />
      <input type="text" ref="password" placeholder="Password" />
      <!-- <input type="text" name="password" placeholder="Password Confirm"> -->
      <input type="submit" value="Register" />
    </form>
  </div>
</template>
<script>
export default {
  auth: "guest",
  data() {
    return {};
  },
  mounted() {
    this.$axios.$get("/sanctum/csrf-cookie");
  },
  methods: {
    async register() {
      const newUser = {
        name: this.$refs.name.value,
        email: this.$refs.email.value,
        password: this.$refs.password.value,
      };
      try {
        await this.$axios.$post("/register", newUser).then((result) => {
          this.$router.push("/login");
          console.log(result);
        });
      } catch (error) {
        console.log(error);
        if (error.response.status === 422) {
          console.log(error.response.data.errors);
        }
      }
    },
  },
};
</script>
