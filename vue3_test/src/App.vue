<template>
  <h1>我是APP组件</h1>
  <h3>{{name}}</h3>
  <h3>{{age}}</h3>
  <button @click="hello">点击sayHello</button>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  setup() {
    let name='sum';
    let age = 18;

    function hello(){
      alert('hello'+name)
    }

    return {
      name,
      age,
      hello,
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
