<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">{{ todo.todo }}</li>
  </ul>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  setup() {
    const store = useStore();
    const todos = computed(() => {
      return store.state.todos;
    });

    return { todos };
  },
};
</script>

<style></style>
