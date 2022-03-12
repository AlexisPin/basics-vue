import { createStore } from "vuex";

export default createStore({
  state: {
    totalGlobal: 0,
    tasks: [],
  },
  getters: {
    doubleTotal(state) {
      return state.totalGlobal * 2;
    },
    getTasks(state) {
      return state.tasks;
    },
  },
  mutations: {
    setTotal(state, newTotal) {
      state.totalGlobal = newTotal;
    },
    addTask(state, newTask) {
      state.tasks.push(newTask);
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
  },
  actions: {},
  modules: {},
});
