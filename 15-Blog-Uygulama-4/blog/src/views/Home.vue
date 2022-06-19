<template>
  <div class="home">
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post"></SinglePost>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import SinglePost from "../components/SinglePost.vue";
import getPosts from "../composables/getPosts";
export default {
  name: "Home",
  components: { SinglePost },
  setup() {
    const posts = ref([]);
    getPosts().then((data) => {
      posts.value = data;
    });
    return { posts };
  },
};
</script>
