<template>
  <div class="home">
    <List />
    <AddTodo />
    <todoCount />
  </div>
</template>

<script>
import { ref, onUpdated } from "vue";
import List from "../components/List.vue";
import todoCount from "../components/todoCount.vue";
import AddTodo from "../components/AddTodo.vue";
import { useRoute } from "vue-router";
export default {
  name: "Home",
  components: { List, AddTodo, todoCount },
  setup() {},
};
</script>
