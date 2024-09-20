<template>
 <Home />
<h1>Posts</h1>

 <!-- <input type="number" v-model='PwithPagnation.page'
                       class="email ele" 
                       placeholder="PwithPagnation numberm">
 <input type="text" v-model='PwithPagnation.tag'
                       class="password ele" 
                       placeholder="Tag id or slug to retrive all relates posts">
   <input type="text" v-model='PwithPagnation.search'
                       class="password ele" 
                       placeholder="search key in post title or desrption or tags">                     
  <button class="clkbtn" v-on:click="PostswithPagnation">PostswithPagnation</button>
-->

 

  <div class="form-row align-items-center">
    <div class="col-sm-3 my-1">
      <label class="sr-only" for="inlineFormInputName">Title</label>
      <input type="text" v-model="Postsdata.title" class="form-control" id="inlineFormInputName" placeholder="Title">
    </div>

  <div class="col-sm-3 my-1">
      <label class="sr-only" for="Description">Description</label>
       <textarea v-model="Postsdata.description" class="form-control" id="Description" rows="4" placeholder="Description"></textarea>
    </div>
    <div class="col-sm-3 my-1">
      <label class="sr-only" for="inlineFormInputName">Name</label>
      <input type="text" v-model="Postsdata.tags" class="form-control" id="inlineFormInputName" placeholder="Tags">
    </div>
    <div class="col-auto my-1">
   <button  v-on:click="PostData" class="btn btn-primary">Post Data</button>
    </div>
  </div>

 

  

                  


<table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#ID</th>
                     <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Tags Name</th>
                     <th scope="col">Tags Slugs</th>
                     <th scope="col">User name</th>
                  <th scope="col">User Email</th>
                </tr>
            </thead>
            <tbody>
                <tr scope="row" v-for="(item, index) in getAlldata.data" :key="getAlldata.id">
              <td>{{index+1}}</td>
                <td>{{item.title}}</td>
                <td>{{item.description}}</td>
                <td>{{item.tags.map(({name}) => name).join(' ; ')}}</td>
                <td>{{item.tags.map(({slug}) => slug).join(' ; ')}}</td>
                    <td>{{item.user.name}}</td>
                     <td>{{item.user.email}}</td>
                </tr>
                
            </tbody>
            </table>
</template>

<script>
import axios from 'axios';
import Home from './Home.vue' 

export default {
  name: 'PostsM',
  components:{
    Home
  }
  ,
  data() {
       return {

        PwithPagnation:{
          page:"",
          tag:"",
          search:""
        },
          Postsdata:{
          title:"",
         description:"",
          tags:[]
         
        },
            getAlldata: {
                id:"",
                title: "",
                description: "",
                user: [
                {
                    id: "",
                    name: "",
                    slug: ""
                }
                ],
                tags: [
                {
                    id: "",
                    name: "",
                    slug: ""
                }
                ]
            }
     
        
    }
    },
     methods:{
        getTokenconfig(){
         var token=JSON.parse(localStorage.getItem('token'));
         //console.log(token);
         const config={
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer $'{token}`
                
                }
         };
         
         return config;
        },
    async PostswithPagnation(){

      let res=   await axios.get(`https://blogs.kingofkey.net/api/posts?page=${this.PwithPagnation.page}&tag=${this.PwithPagnation.tag}&search=${this.PwithPagnation.search}`)
      this.getAlldata=res.data.data;
      console.log(res.data.data);

    },
     PostData(){
      //console.log(this.Postsdata);
       // var formdata= new FormData();
       // for(var key in this.Postsdata){
          //   formdata.append(key,this.Postsdata[key]);
       // }

        var token=JSON.parse(localStorage.getItem('token'));
// "266|5KKZH7NXLdqFgThTvqVB52KNwG6mWP6h6OY837rq0f6ca12e"

       axios.post("https://blogs.kingofkey.net/api/posts",this.Postsdata,{
          headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer '+token
          }})  
      .then((response) => {
       
        console.log('response',response.data.data)

      })
      .catch((error) => {
        console.log('error',error.response)
        

      })

    },

    
     async GetAllData(){

      let res=   await axios.get(`https://blogs.kingofkey.net/api/posts`)
      this.getAlldata=res.data.data;
      console.log(res.data.data.data);

    }
     },
      
   mounted() {
    this.GetAllData();
   }

}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
