<template>
  <div id="app">
    <HelloWorld msg="Welcome to My Local Storage"/>
    <button @click="sayHi()">helo hai hai</button>
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
import cogoToast from 'cogo-toast';

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data() {
    return {
      cats: [],
      catList: [],
      newCat: ''
    }
  },
  // mounted() {
  //   if (localStorage.getItem('cats')) {
  //     try {
  //       this.cats = JSON.parse(localStorage.getItem('cats'));
  //     } catch(e) {
  //       localStorage.removeItem('cats');
  //     }
  //   }
  // },
  // methods: {
  //   addCat() {
  //     this.cats.push(this.newCat);
  //     this.newCat = '';
  //     this.saveCats();
  //   },
  //   saveCats() {
  //     const parsed = JSON.stringify(this.cats);
  //     localStorage.setItem('cats', parsed);
  //       cogoToast.success(
  //       'Add to Cart Success',
  //       {
  //         position: 'bottom-right',
  //         heading: 'Success',
  //       }
  //     )
  //   }
  // }
  mounted() {
    if (localStorage.getItem('cats')) {
      try {
        this.catList = JSON.parse(localStorage.getItem('cats'));
      } catch(e) {
        localStorage.removeItem('cats');
      }
    }
  },
  methods: {
    addCat() {
      this.catList.push(this.newCat);
      this.newCat = '';
      this.saveCats();
    },
    saveCats() {
      const parsed = JSON.stringify(this.catList);
      localStorage.setItem('cats', parsed);
        cogoToast.success(
        'Add to Cart Success',
        {
          position: 'bottom-right',
          heading: 'Success',
        }
      )
    }
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

