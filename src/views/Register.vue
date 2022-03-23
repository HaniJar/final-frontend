<template>
  <div class="containers">
    <div class="column">
      <h1 class="text-light">WELCOME TO ELECTRONIC DEPARTMENT STORE</h1>
      <div id="register">
        <img
          id="profile-img"
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          class="profile-img-card"
        />
        <Form @submit="handleRegister">
          <div v-if="!successful">
            <div class="form-group">
              <label for="fullname"></label>
              <Field
                name="fullname"
                placeholder="Fullname"
                class="form-control"
              />
              <ErrorMessage name="fullname" class="error-feedback" />
            </div>
            <div class="form-group">
              <label for="email"></label>
              <Field
                name="email"
                placeholder="email address"
                class="form-control"
                type="email"
              />
              <ErrorMessage name="email" class="error-feedback" />
            </div>
            <div class="form-group">
              <label for="phone_number"></label>
              <Field
                name="phone_number"
                class="form-control"
                placeholder="Phone Number"
                type="number"
              />
              <ErrorMessage name="phone_number" class="error-feedback" />
            </div>

            <div class="form-group">
              <label for="password"></label>
              <Field
                name="password"
                class="form-control"
                placeholder="Password"
                type="password"
              />
              <ErrorMessage name="password" class="error-feedback" />
            </div>
            <button class="btn btn-primary btn-" :disabled="loading">
              <span
                v-show="loading"
                class="spinner-border spinner-border-sm"
              ></span>
              <span>Register</span>
            </button>
            <br />
            <p style="color: black" class="login">
              Already a member? <a href="/login">Sign In</a>
            </p>
          </div>
        </Form>
        <div
          v-if="message"
          class="alert"
          :class="successful ? 'alert-success' : 'alert-danger'"
        >
          {{ message }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
export default {
  name: "Register",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      fullname: yup
        .string()
        .required("fullname is required!")
        .min(3, "Must be at least 3 characters!")
        .max(20, "Must be maximum 20 characters!"),
      email: yup
        .string()
        .required("Email is required!")
        .email("Email is invalid!")
        .max(50, "Must be maximum 50 characters!"),
      password: yup
        .string()
        .required("Password is required!")
        .min(6, "Must be at least 6 characters!")
        .max(40, "Must be maximum 40 characters!"),
      phone_number: yup.string().required("Password is required!"),
      // .min(6, "Must be at least 6 characters!")
      // .max(40, "Must be maximum 40 characters!"),
    });
    return {
      successful: false,
      loading: false,
      message: "",
      schema,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push("/login");
    }
  },
  methods: {
    handleRegister(user) {
      console.log("Successfully registered");
      this.message = "";
      this.successful = false;
      this.loading = true;
      this.$store.dispatch("auth/register", user).then(
        (data) => {
          console.log(data);
          this.message = data.message;
          this.successful = true;
          this.loading = false;
        },
        (error) => {
          console.log(error.message);
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          this.successful = false;
          this.loading = false;
        }
      );
    },
  },
};
</script>

<style scoped>
#register {
  border: 5px solid black;
  width: 35%;
  margin-right: auto;
  margin-left: auto;
  padding: 20px;
}
#register input {
  margin: 20px;
  border: none;
  border-bottom: 2px solid black;
  background-color: transparent;
}
.login a {
  color: red;
  transition: 0.3s;
}
.login a:hover {
  color: rgb(73, 73, 73);
  transition: 0.3s;
}
.form-control {
  color: #fff;
  font-size: 20px;
}
</style>
