<template>
  <!-- Start Main Container -->
  <div class="main-container">
    <!-- Start Pokemon Ball Top Part -->
    <div class="pokemon-top-part"></div>

    <div class="main-forms">
      <div class="signup-form">
        <form
          class="sign-back"
          @submit.prevent="handleRegister"
          :validation-schema="schema"
        >
          <h1>sign UP</h1>
          <div class="signup-row">
            <i class="fa fa-user"></i>
            <input type="text" name="" value="" placeholder="FULL NAME" />
          </div>
          <div class="signup-row">
            <i class="fa fa-envelope-o"></i>
            <input type="text" name="" value="" placeholder="EMAIL" />
          </div>
          <div class="signup-row">
            <i class="fa fa-phone"></i>
            <input type="text" name="" value="" placeholder="MOBILE" />
          </div>
          <div class="signup-row">
            <i class="fa fa-key"></i>
            <input type="password" name="" value="" placeholder="PASSWORD" />
          </div>
          <div class="signup-row">
            <a href="#">
              <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
            </a>
          </div>
          <button class="btn btn-primary btn-" :disabled="loading">
            <span
              v-show="loading"
              class="spinner-border spinner-border-sm"
            ></span>
            <span>Register</span>
          </button>
          <div class="form-bottom">
            <div class="remember">
              <a href="/login">Already Have Account?</a>
            </div>
          </div>
        </form>
      </div>
    </div>
    <!-- End Main Forms -->
    <!-- Start Pokemon Ball Bottom Part -->
    <div class="pokemon-bottom-part">
      <div class="white-part"></div>
      <div class="black-line"></div>
    </div>
    <!-- End Pokemon Ball Bottom Part -->
  </div>
  <!-- End Main Container -->
  <!-- Start Scripts -->
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
      this.$router.push("/profile");
    }
    {
      var blackLine = ".black-line",
        ball = ".main-container",
        mainForm = ".main-forms",
        top = ".pokemon-top-part",
        bottom = ".pokemon-bottom-part",
        h = ".sign-back h1",
        row = ".signup-row",
        arrow = ".signup-row a",
        rem = ".remember",
        tl = new TimelineMax();

      // Start
      tl.to(blackLine, 0.1, { className: "+=red-circle" })
        .to(blackLine, 0.1, { className: "-=red-circle" })
        .to(blackLine, 0.1, { className: "+=red-circle" })
        .to(blackLine, 0.1, { className: "-=red-circle" })
        .to(blackLine, 0.1, { className: "+=red-circle" })
        .to(blackLine, 0.1, { className: "-=red-circle" })
        .to(blackLine, 0.1, { className: "+=red-circle" })
        .to(blackLine, 0.1, { className: "-=red-circle" })
        .to(ball, 0.1, { y: "-70%", ease: Power4.easeOut })
        .to(ball, 0.1, { y: "-50%", ease: Bounce.easeOut })
        .to(ball, 0.1, { y: "-85%", ease: Power4.easeOut }, "+=0.5")
        .to(ball, 0.1, { y: "-50%", ease: Bounce.easeOut })
        .to(ball, 0.1, { y: "-100%", ease: Power4.easeOut }, "+=0.5")
        .to(ball, 0.1, { y: "-50%", ease: Bounce.easeOut, onComplete: toggle });
      function toggle(o) {
        $(".main-forms").slideDown(1500);
        tl.to(top, 1, { autoAlpha: 0 })
          .to(bottom, 1, { autoAlpha: 0 }, "-=1")
          .fromTo(
            h,
            1,
            { autoAlpha: 0, y: -20 },
            { autoAlpha: 1, y: 0 },
            "+=0.5"
          )
          .staggerFrom(row, 1, { left: "-100%", autoAlpha: 0 }, 0.2)
          .staggerFrom(rem, 1, { cycle: { y: [20, -20] }, autoAlpha: 0 }, 0.2);
      }
    }
  },
  methods: {
    handleRegister(user) {
      console.log("we made it");
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
html {
  height: 100vh;
}

body {
  font-family: "Ubuntu", sans-serif;
  background: url("https://lh3.googleusercontent.com/ohXfK_gejGdGoxN7Vzf2hE9EWsvXhR9AnPlRqylsbhSFn1hU2pDZ4dkG8Q8Wj8cd4g9hVGShd2X7qBSTkbWiX-2UmhH44u_-M4xpO2nMBYsi0ymKeMpfZFOMWXtTJW28YdTjVquwquv9pTTCBFpTnG_C8euEUgO08mXO63oDcqIN9bmSvh5B8MUDw2MJ_oYAMJoCi8UeI9nvfs7z3UbcQQPNYHyXgi0wKW9aMmz8ogaRUPHf5Z7tKv9Am8my9XsleXNzeZjlTY7qobFffw5xwpNBUGNYdPWfkF-XWQyhrcJsESwGFHUlFDtVvU_V6IOgHA-jZmnmu8e3_wBA50VTO713U-DoDMjhZliK1qSUoR9FBxcPE7Z_O3kVk9v5qFUgwO2wmybVKDmH9gn55vDnBEiHCr-0cfKJgJHYlgIFm3fwguGYtIEpYK5ucGAxjz_NPcM5fw9BNQ-M67dyM5eY9Tdav198oMNTAJLKGmdaEG4v8UqRsxk5hyFhOWeufn6vuaG2TrxB9_kDR5gaYroneuDaYB9CySvKyXo_AmqA3po7mGl8W0HBphFHzOPkfFqyGdpTfeJNurtKuuV99cb57kHxwieMwWCPwUNRFzZwOByzNyfcPkeVMgy8z7tpYj6Eb9SUpt8Y-6j9-Qj9lfxnHJNTZ0CTzxvJ-N_Mwya-YA=w1135-h638-no")
    no-repeat;
  background-size: cover;
  height: 100vh;
  margin: 0;
  overflow: hidden;
}

.main-container {
  width: 500px;
  margin: 0 auto;
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.pokemon-top-part {
  width: 200px;
  height: 100px;
  background: #f22613;
  margin: 0 auto;
  border-radius: 200px 200px 0 0;
  border: 5px solid #333;
}

.pokemon-bottom-part {
  position: relative;
}

.white-part {
  width: 200px;
  height: 100px;
  background: #ffffff;
  margin: 0 auto;
  border-radius: 0 0 200px 200px;
  border: 5px solid #333;
}

.black-line {
  width: 210px;
  height: 25px;
  background: #333;
  margin: 0 auto;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
}

.black-line::after {
  content: "";
  width: 50px;
  height: 50px;
  background: #333;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -25%);
}

.black-line::before {
  content: "";
  width: 30px;
  height: 30px;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -2px);
  z-index: 999;
}

.signup-form {
  background: url("https://lh3.googleusercontent.com/6ObGgH3qiiOYrkZyd2dsxvvaulkjw2h-RF-I9764grYVGxz6dM_SYOW7EfUkvTIgUxtKOmpnYBrH0tDkJvsoYGLPYtAfgs_hM06Oyxo2QyiB19nNAOA0lqgQAX5Pf1i7qjCCN54cJnGW3jsmA2YbhHaL3cMSdKY8hzOk7QGXxyAALPANU-aQs88FlS9RT8uaL59K4yhFFHBhZzTZ9aj3dWxgrT0FRJy5fQJjM6qEZTnsrAc9cstFsyyYX7tHSQasMc9ER7ypAQjPHqj9gxEjLz4DDPFgY4vBx_3XgQ-fD5QdxCR3N5XuxFfovbeKwI2sPCfr4uP2IhNW684qPHD2uH1GCE1FQ8JZt8IXpsNevzVE0yNOmFGcHa064wGkTPCtjTQcZ0Y6KOnqBUDfKWqt5UkkKGz_C5QM3sDuMUHa6cNmwejLkF-RDrWNnPr_-6MYIziztw7ExYZYJ71HWEyPNRqREeSO6wgw2O38OyzTwE_eJ4K0KOYyqVGL8Jw9tn6bKpLJsoVtQ17rXg0N57uG41Jqa-P5q8AltDWmsePSzBstx5pAFbcrRkizwESHAlV_JnsYcNeIFUZTOSKDxZuvlafr9PVK3dbIdEp1EHz6QnM_6MCXRSaaP3Nu9FocxRd_nlOGDG1X-_sBpXLsmooM7bGmopx1HzUux9ROKzPyJg=w1135-h638-no")
    no-repeat;
  background-size: cover;
  border-radius: 10px;
}

.sign-back {
  background: linear-gradient(rgba(255, 202, 0, 0.4), #ffca00 60%);
  border-radius: 10px;
  padding: 65px 0;
}

.sign-back h1 {
  text-transform: uppercase;
  text-align: center;
  color: #fff;
  margin-top: 0;
  letter-spacing: 5px;
  text-shadow: 1px 1px 1px #333;
}

.signup-row {
  text-align: center;
  margin: 20px 0;
  position: relative;
}

.signup-row input {
  padding: 5px 0;
  border: 0;
  border-bottom: 1px solid #fff;
  background: transparent;
  width: 50%;
  text-align: center;
  outline: none;
  color: #fff;
  font-family: "Ubuntu", sans-serif;
}

.signup-row input::-webkit-input-placeholder {
  color: #fff;
  text-shadow: 1px 1px 1px rgba(51, 51, 51, 0.6);
}

.signup-row i {
  color: #fff;
  position: relative;
  left: 20px;
  text-shadow: 1px 1px 1px rgba(51, 51, 51, 0.6);
}

.signup-row a {
  font-size: 40px;
  text-decoration: none;
}

.signup-row a i {
  left: 0;
}

.form-bottom {
  display: flex;
  justify-content: center;
}

.remember:not(:last-child) {
  margin-right: 30px;
  color: #af942d;
}
.remember:not(:last-child):hover {
  margin-right: 30px;
  color: #fff;
  transition: all 500ms;
}

.remember a {
  text-decoration: none;
  color: #af942d;
  transition: all 500ms;
}
.remember a:hover {
  text-decoration: none;
  color: #fff;
}

input[type="checkbox"] {
  position: relative;
  top: 1px;
  transition: all 500ms;
}

.main-forms {
  overflow: hidden;
  display: none;
  position: relative;
}

.red-circle::before {
  background: #f22613;
}
</style>
