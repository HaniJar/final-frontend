<template>
  <div id="nav">
    <Navbar />
  </div>
  <Footer />
  <router-view />
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>
<style>
#app {
  background: url(https://i.postimg.cc/4xcz7Kd1/bulby.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
  z-index: 1;
  height: 100vh !important;
  margin: 0;
  padding: 0;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #222224;
}

#nav a.router-link-exact-active {
  color: #ee1515;
}
</style>
