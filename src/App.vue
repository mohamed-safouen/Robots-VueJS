<template >
  <div class="container pt-5  mx-auto items-center gap-10 flex-col flex ">
  <HeaderItem />
  <CardList />
  </div>
</template>

<script>
import HeaderItem from './components/HeaderItem.vue'
import CardList from './components/CardList.vue'

export default {
  name: 'App',
  components: {
    HeaderItem,
    CardList
  }
}
</script>

<style>

</style>
