<template>
  <Navbar></Navbar>
  <Sidebar></Sidebar>
  <router-view />
</template>

<script>
import Navbar from './components/Navebar.vue';
import Sidebar from './components/Sidebar.vue';

export default{
  components:{
    Navbar,
    Sidebar,
  }
}
</script>
