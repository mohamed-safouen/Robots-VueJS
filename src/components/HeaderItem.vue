<template >
  <h1 class="text-7xl  font-bold">
  All Robots
  </h1>
  <input  v-model="message" class="bg-neutral-300 px-3 py-2" type='search'  placeholder='search robots' />
</template>

<script>
export default {
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
