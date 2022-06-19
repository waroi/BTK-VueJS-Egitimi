<template>
  <div class="home">
    <Contents :contents="contents"></Contents>
  </div>
</template>

<script>
import { ref, computed, watch, watchEffect } from "vue";
import Contents from "../components/Contents.vue";
export default {
  name: "HomeView",
  components: { Contents },
  setup() {
    const contents = ref([
      { id: 1, title: "Deneme 1", details: "Detail 1" },
      { id: 2, title: "Deneme 2", details: "Detail 2" },
      { id: 3, title: "Deneme 3", details: "Detail 3" },
      { id: 4, title: "Deneme 4", details: "Detail 4" },
    ]);
    return { contents };
  },
};
</script>
