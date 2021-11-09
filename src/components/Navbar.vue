<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <ul>
        <li>
            <router-link to="/">Home</router-link>
        </li>
        <li>
            <router-link to="/cats">Cat</router-link>
        </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>
<style scoped>
    .container{
        margin-top: 0;
    }
</style>
