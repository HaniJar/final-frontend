<template>
  <div id="nav">
    <Navbar />
  </div>
  <router-view />
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>
<style>
#app {
  background-color: black;
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
  z-index: 1;
  height: 180vh !important;
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
