<template>
  <div class="container mt-5">
    <h1>Compteur</h1>
    <p>Vous avez cliqué {{ total }}</p>
    <button class="btn btn-primary" @click="increment">Incrémenter</button>
    <p>total Géneral {{ getTotal }}</p>
    <p>total Géneral {{ doubleDuTotal }}</p>
  </div>
</template>

<script>
export default {
  name: "Compteur",
  data() {
    return {
      total: 0,
    };
  },
  computed: {
    getTotal() {
      return this.$store.state.totalGlobal;
    },
    doubleDuTotal() {
      return this.$store.getters.doubleTotal;
    },
  },
  methods: {
    increment() {
      this.total += 1;
      this.$store.commit("setTotal", (this.getTotal += 1));
    },
  },
};
</script>

<style scoped></style>
