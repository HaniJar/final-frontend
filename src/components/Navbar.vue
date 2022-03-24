<template>
  <MDBNavbar expand="lg" light bg="light" container>
    <MDBNavbarBrand href="#">
      <img
        src="https://i.postimg.cc/FznLt1qF/pokemart.jpg"
        height="60"
        margin-left="20px"
        alt=""
        loading="lazy"
      />
    </MDBNavbarBrand>
    <MDBNavbarToggler
      target="#navbarCenterAlignExample"
      @click="collapse6 = !collapse6"
    ></MDBNavbarToggler>
    <MDBCollapse id="navbarCenterAlignExample" v-model="collapse6">
      <MDBNavbarNav center class="mb-2 mb-lg-0">
        <MDBNavbarItem router-link :to="{ name: 'Home' }"> Home </MDBNavbarItem>
        <MDBNavbarItem router-link :to="{ name: 'About' }">
          About
        </MDBNavbarItem>
        <MDBNavbarItem router-link :to="{ name: 'Login' }">
          Login
        </MDBNavbarItem>
        <MDBNavbarItem router-link :to="{ name: 'Register' }">
          Register
        </MDBNavbarItem>
        <MDBNavbarItem router-link :to="{ name: 'Products' }">
          Products
        </MDBNavbarItem>
        <MDBNavbarItem router-link v-if="currentUser" :to="{ name: 'Cart' }">
          Cart
        </MDBNavbarItem>
        <MDBNavbarItem router-link v-if="currentUser" :to="{ name: 'Profile' }">
          Profile
        </MDBNavbarItem>
        <MDBNavbarItem
          router-link
          v-if="showAdminBoard"
          :to="{ name: 'Admin' }"
        >
          Admin
        </MDBNavbarItem>
        <MDBNavbarItem
          router-link
          v-if="showAdminBoard"
          :to="{ name: 'Dashboard' }"
        >
          Dashboard
        </MDBNavbarItem>
        <MDBNavbarItem router-link :to="{ name: 'Contact' }">
          Contact
        </MDBNavbarItem>
        <button class="btn" v-if="currentUser" @click="logOut">Logout</button>
      </MDBNavbarNav>
    </MDBCollapse>
  </MDBNavbar>
</template>

<script>
import {
  MDBNavbar,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdb-vue-ui-kit";
import { ref } from "vue";
export default {
  components: {
    MDBNavbar,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBCollapse,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
  },
  setup() {
    const collapse6 = ref(false);
    const dropdown9 = ref(false);
    return {
      collapse6,
      dropdown9,
    };
  },
  methods: {
    toggleNav() {
      this.isActive = !this.isActive;
    },
    logOut() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/login");
    },
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
};
</script>

<style scoped>
.navbar-brand img {
  margin-left: 15px;
}
</style>
