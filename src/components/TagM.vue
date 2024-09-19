<template>
 <Home />
<h1>Tag</h1>
<table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#ID</th>
                    <th scope="col">Name</th>
                   <th scope="col">Slug</th>
                </tr>
            </thead>
            <tbody>
                <tr scope="row" v-for="(item, index) in TagsData" :key="TagsData.id">
                <th scope="row">{{index+1}}</th>
                <td>{{item.name}}</td>
                <td>{{item.slug}}</td>
                </tr>
                
            </tbody>
            </table>

</template>

<script>
import Home from './Home.vue'
import axios from 'axios';

export default {
  name: 'TagM',
  components:{
    Home
  },
  data() {
       return {
            TagsData:[]
     
       } 
    },
   async  mounted() {
     let res=  await axios.post("https://blogs.kingofkey.net/api/tags");
     this.TagsData=res.data.data;
     // console.log(res);
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
