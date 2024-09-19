<template>
<ul>
  <li><a class="active" href="/">Home</a></li>
  <li><a href="/PostsM">Posts</a></li>
  <li><a href="/TagM">Tag</a></li>
  <li><a v-on:click="logout" href="#about">Logout({{Userdata.name}})</a></li>
</ul>


</template>

<script>
export default {
  name: 'Home',
   methods:{
    logout(){
      localStorage.clear();
       this.$router.push({name:'Signup'})
    }
   },
   LoginName:"",
   data() {
       return {
            Userdata:JSON.parse(localStorage.getItem('user'))
     
       } 
    },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover {
  background-color: #111;
}
</style>
