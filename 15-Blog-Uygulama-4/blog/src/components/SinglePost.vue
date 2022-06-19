<template>
  <div class="post">
    <router-link :to="{ name: 'Post', params: { id: post.id } }">
      <h3>
        {{ post.title }}
      </h3>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["post"],
  setup(props) {},
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
h3 {
  cursor: pointer;
}
.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.material-icons {
  font-size: 24px;
  margin-left: 10px;
  color: #bbb;
  cursor: pointer;
}
.material-icons:hover {
  color: #777;
}
</style>
