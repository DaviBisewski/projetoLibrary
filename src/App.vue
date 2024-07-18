<template>
  <Header />
  <div>
    <router-view></router-view>
  </div>
  <Footer />

</template>

<script>
import { RouterLink, RouterView } from 'vue-router';
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
name: 'App',
components: {
  Header,
  Footer,
}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600&display=swap');
*{
  box-sizing: border-box;
  margin: 0;
  border: 0;
  padding: 0;
  font-family: 'Raleway', sans-serif;
}

:root {
--dark-color: #0D0D0D;
--bright-color: #FFF;
--cinzaescuro-color: #212121;
--azulnaval-color: #274360;
--rosaclaro-color: #e91e63;
}

ul{
list-style: none;
margin:0;
padding:0;
}
a{
text-decoration: none;
}

::-webkit-scrollbar{
width: 10px;
background-color: var(--cinzaescuro-color);
}
::-webkit-scrollbar-thumb{
width: 10px;
background-color: var(--rosaclaro-color);
border-radius: 10px;
}
</style>
