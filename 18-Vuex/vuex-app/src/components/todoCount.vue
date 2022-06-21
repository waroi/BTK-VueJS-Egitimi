<template>
  <div>
    <p>Yapılanlar: {{ todoDoneCount }}</p>
    <p>Yapılmayanlar: {{ todoNotDoneCount }}</p>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  setup() {
    const store = useStore();
    const todoDoneCount = computed(() => {
      return store.getters.todoDoneCount;
    });
    const todoNotDoneCount = computed(() => {
      return store.getters.todoNotDoneCount;
    });
    return { todoDoneCount, todoNotDoneCount };
  },
};
</script>

<style></style>
