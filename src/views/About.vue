<template>
  <MDBCarousel
    v-model="carousel2"
    :items="items2"
    :controls="false"
    :indicators="false"
  />
  <br /><br />
  <h6 id="poke">
    Haniah's Pokémart was established early in the year of 2022 when she
    realised that she had a passion for anything Pokémon related.
  </h6>
  <br /><br />
  <MDBRow>
    <MDBCol col="2"></MDBCol>
    <MDBCol id="about" col="4"
      ><h1><b>ABOUT HANIAH AND CO.</b></h1>
      <p>
        The owner, Haniah realised how many Pokémon in this world were being
        mistreated so she and a small team came together and decided to make a
        Pokémart for Pokémon where you could find anything Pokémon needed to
        stay healthy and well
      </p></MDBCol
    >
    <MDBCol col="4"
      ><h1><b>WHO?</b></h1>
      <p>
        The team consists of a total of 6 people who all hold special and
        important jobs, where they must ensure that their vision is brought
        forth through quality and excellent service. The team spends a few days
        in advance to research before they start production and release it to
        public
      </p></MDBCol
    >
    <MDBCol col="2"></MDBCol>
  </MDBRow>
</template>
<script>
import { ref } from "vue";
import { MDBCarousel, MDBCol, MDBRow } from "mdb-vue-ui-kit";
export default {
  components: {
    MDBCarousel,
    MDBCol,
    MDBRow,
  },
  setup() {
    const items2 = [
      {
        src: "https://i.postimg.cc/fyNWwjC6/besties.jpg",
        alt: "...",
      },
      {
        src: "https://i.postimg.cc/50HCd5gB/pokeballs.webp",
        alt: "...",
      },
      {
        src: "https://i.postimg.cc/Kvsh4nDk/pokecenter.webp",
        alt: "...",
      },
    ];
    const carousel2 = ref(0);
    return {
      items2,
      carousel2,
    };
  },
};
</script>

<style scoped>
#poke {
  text-align: center;
  color: black;
}

#about {
  padding-left: 100px;
}
</style>
