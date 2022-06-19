<template>
  <div>
    <div v-for="content in contents" :key="content.id">
      {{ content.title }}
    </div>
    <div v-if="err">
      {{ err }}
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import getContentsFetch from "../composables/getContentsFetch";
import { useRoute, useRouter } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    const router = useRouter();

    console.log("Route: ", route);
    console.log("Router: ", router);

    const { contents, err, getContents } = getContentsFetch();
    getContents();

    return { contents, err };
  },
};
</script>

<style></style>
