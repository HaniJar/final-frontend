<template>
  <form @submit.prevent="login" class="form neu-border">
    <h2 class="form-heading">Admin Login</h2>
    <h5>Log in to your account now</h5>
    <input
      class="form-input neu-border-inset"
      type="fullname"
      v-model="fullname"
      placeholder="Fullname"
    />
    <input
      class="form-input neu-border-inset"
      type="password"
      v-model="password"
      placeholder="Password"
    />
    <button type="submit" class="form-btn neu-border">Sign in</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      fullname: "",
      password: "",
    };
  },
  methods: {
    login() {
      fetch("https://final-backend1.herokuapp.com/users/signin", {
        method: "PATCH",
        body: JSON.stringify({
          fullname: this.fullname,
          password: this.password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          localStorage.setItem("jwt", json.jwt);
          alert("User logged in");
          this.$router.push({ name: "Dashboard" });
        })
        .catch((err) => {
          alert(err);
        });
    },
  },
};
</script>

<style scoped>
.neu-border {
  border-radius: 30px;
}
.neu-border-inset {
  border-radius: 30px;
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  gap: 20px;
  width: 100%;
  margin-inline: auto;
  max-width: 600px;
  margin-top: 200px;
  background-color: rgb(0, 195, 255);
}

.form-heading {
  text-align: center;
  text-transform: uppercase;
}

.form-input,
.form-btn {
  border: none;
  outline: none;
  padding: 20px;
}

.form-btn {
  cursor: pointer;
  transition: all 0.1s linear;
}

.form-btn:hover {
  transform: scale(1.05);
}

.form-social-login {
  display: flex;
  justify-content: space-between;
}

.form-social-btn {
  width: 45%;
  color: #333;
}
</style>
