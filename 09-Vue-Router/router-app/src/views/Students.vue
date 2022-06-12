<template>
  <div>
    <h1>Öğrenciler</h1>
    <div v-for="student in students" :key="student.id">
      <router-link :to="{name:'studentInfo',params:{id:student.id}}">{{student.name}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      students: [
        {id:1, name:'Varol', not:55},
        {id:2, name:'Ali', not:75},
        {id:3, name:'Mehmet', not:85},
      ]
    }
  },
}
</script>

<style>

</style>