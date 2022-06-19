<template>
  <nav class="main-nav">
    <router-link :to="{ name: 'Home' }">Blog</router-link>
    <router-link :to="{ name: 'AddPost' }">Add New Post</router-link>
  </nav>
</template>

<script>
export default {};
</script>

<style>
.main-nav {
  text-align: center;
  margin: 40px auto;
}
.main-nav a {
  display: inline-block;
  text-decoration: none;
  margin: 0 10px;
  color: #999;
  font-size: 18px;
}
a.router-link-active {
  border-bottom: 2px solid #76dd78;
  padding-bottom: 4px;
  color: #76dd78;
}
</style>
