<template>
  <div class="post">
    <h3>
      {{ post.title }}
    </h3>
    <div class="content">
      <p>{{ post.content }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import getPosts from "../composables/getPosts";
export default {
  props: ["id"],
  setup(props) {
    const post = ref("");
    getPosts().then((data) => {
      post.value = data.find((e) => e.id == props.id);
    });
    return { post };
  },
};
</script>

<style>
.post {
  margin: 20px auto;
  background: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);
  border-left: 4px solid #ff5500;
}
</style>
