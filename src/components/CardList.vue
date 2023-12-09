<template>
    <div class="mt-6 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-4">
          <div v-for="robo in filteredRobots" :key="robo.name" class="group relative bg-white relative w-full overflow-hidden rounded-lg p-2">
            <div class=" sm:aspect-h-1 sm:aspect-w-2 h-80 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75">
              <img :src="`https://robohash.org/${robo.id}`" :alt="robo.name" class="h-full w-full object-cover object-center" />
            </div>
            <h3 class="mt-6 text-sm text-gray-500">
                {{ robo.name }}
            </h3>
            <p class="text-base font-semibold text-gray-900">{{ robo.email }}</p>
          </div>
        </div>
</template>

<script>

export default {
    name:"CardList",
    props: {
    result: {
      type: String, 
      default: '' 
    }},
    data(){ return {
    AllRobots:[] ,
    
}},
mounted() {
    this.fetchUserData();
    
  },
  methods: {
    fetchUserData() {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          this.AllRobots = data;
        })
        .catch(error => {
          console.error('Error fetching user data', error);
        });
    },
   
  },
  computed:{
    filteredRobots(){
      return this.AllRobots.filter(robot => {
        return robot.name.toLowerCase().includes(this.result);
      });
    }
  }
}

</script>

<style>

</style>