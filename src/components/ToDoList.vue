<template>
  <div class="container mt-5">
    <div v-for="task in getTasks" :key="task.id">
      <Task v-bind:test="task" />
    </div>
    <div class="mt-2 justify-content-start d-flex">
      <input type="text" v-model="tache" placeholder="Tache..." />
      <button class="btn btn-secondary mr-1" @click="addTask(tache)">
        Ajouter
      </button>
    </div>
  </div>
</template>

<script>
import Task from "./Task.vue";
export default {
  components: { Task },
  name: "ToDoList",
  data() {
    return {
      total: 0,
      tache: "",
    };
  },
  computed: {
    getTasks() {
      return this.$store.getters.getTasks;
    },
  },
  methods: {
    addTask(tache) {
      const newTask = {
        id: Date.now(),
        text: tache,
      };
      this.$data.tache = "";
      this.$store.commit("addTask", newTask);
    },
  },
};
</script>

<style scoped></style>
