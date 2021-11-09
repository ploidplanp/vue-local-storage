<template>
  <div id="app">
    <h1>our catie</h1>
    <hr>
    <button class="buttonWarning" @click="clearCat()">Clear</button>
    <div v-for="(cat, n) in myCatList" :key="n">
      <p>
          <span class="cat">{{ cat }}</span>
          <button class="buttonDanger" @click="removeCat(n)">x</button>
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Cat',
  data() {
    return {
      myCatList: [],
    }
  },
  mounted() {
    if(localStorage.getItem('myCats')){
      try {
        this.myCatList = JSON.parse(localStorage.getItem('myCats'))
      }catch(error){
        localStorage.removeItem('myCats')
      }
    }
  },
  methods: {
    removeCat(index){
      this.myCatList.splice(index, 1)
      this.saveCats()
    },
    saveCats(){
      this.newCat = ''
      const parsed = JSON.stringify(this.myCatList)
      localStorage.setItem('myCats', parsed)
    },
    clearCat(){
      localStorage.clear()
    }
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
button {
  background-color: white;
  padding: 5px;
  border-radius: 5%;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
}
.buttonWarning {
  border: 1px solid #FBD148;
}
.buttonWarning:hover {
  background-color: #FBD148;
}
.buttonDanger {
  background-color: #B91646;
  border: 1px solid #B91646;
  color: white;
}
.buttonDanger:hover {
  background-color: #C85C5C;
    border: 1px solid #C85C5C;
}
</style>

