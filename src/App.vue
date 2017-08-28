<template>
  <div id="app">
    <router-view></router-view> 
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
    msg:'Hello Vue!',
    num:0
    }
  }
}
</script>
<style>
  .left{
    width:20%;
    border: 1px solid gray;
    float: left;
  }
</style>
