<template>
    <div>

    <HelloWorld />
    <Compteur />
  <ToDoList />
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Compteur from '@/components/Compteur.vue'
import ToDoList from '@/components/ToDoList.vue'


export default {
  name: 'HomeView',
  components: {
    HelloWorld, Compteur,
    ToDoList
  }
}
</script>
