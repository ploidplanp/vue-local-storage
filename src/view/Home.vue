<template>
  <div id="app">
    <HelloWorld msg="Welcome to My Local Storage"/>
      <h1>our new catie: {{ newCat }}</h1>
      <input type="text" v-model="newCat">
      <button type="button" @click="addCat()">add cat</button>
    <div v-for="(cat, n) in catList" :key="n">
      <p>
        <span class="cat">{{ cat }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data() {
    return {
      catList: [],
      newCat: ''
    }
  },
  mounted() {
    if(localStorage.getItem('myCats')){
      try {
        this.catList = JSON.parse(localStorage.getItem('myCats'))
        this.newCat = ''
      }catch(error){
        this.newCat = ''
        localStorage.removeItem('myCats')
      }
    }
  },
  methods: {
    addCat() {
      if(this.newCat != ''){
        this.catList.push(this.newCat)
        console.log(this.myCats)
        this.newCat = ''
        this.saveCats()
      }
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

