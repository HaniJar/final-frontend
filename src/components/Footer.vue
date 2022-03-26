<template>
  <MDBFooter
    bg="none"
    :text="['center', 'white']"
    style="background-color: black"
    class="footer"
  >
    <div class="text-center p-1" style="background-color: white">
      © 2022 Copyright: Haniah
    </div>
  </MDBFooter>
</template>

<script>
import { MDBFooter, MDBContainer, MDBBtn } from "mdb-vue-ui-kit";
export default {
  components: {
    MDBFooter,
    MDBContainer,
    MDBBtn,
  },
};
</script>
<style>
.footer {
  padding-bottom: 0;
  position: fixed;
  bottom: 0;
  width: 100%;
}
.text-center {
  text-align: center !important;
  color: black;
}
</style>
