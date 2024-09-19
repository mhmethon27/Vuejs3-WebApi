<template>

 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" 
          content="width=device-width, 
                         initial-scale=1.0">
    <title>GeeksforGeeks</title>
    <link rel="stylesheet" 
          href="style.css">
</head>

<body>


    <!-- container div -->
    <div class="container">

        <!-- upper button section to select
             the login or signup form -->
        <div class="slider"></div>
        <div class="btn">
            <button class="login">Login</button>
            <button class="signup">Signup</button>
        </div>

        <!-- Form section that contains the
             login and the signup form -->
        <div class="form-section">

            <!-- login form -->
            <div class="login-box">
                <input type="email" v-model='user.email'
                       class="email ele" 
                       placeholder="youremail@email.com">
                <input type="password" v-model='user.password'
                       class="password ele" 
                       placeholder="password">
                <button class="clkbtn" v-on:click="login">Login</button>
            </div>

            <!-- signup form -->
            <div class="signup-box">
                <input type="text" v-model='signup.name'
                       class="name ele" 
                       placeholder="Enter your name">
                <input type="email" v-model='signup.email'
                       class="email ele" 
                       placeholder="youremail@email.com">
                <input type="password" v-model='signup.password'
                       class="password ele" 
                       placeholder="password">
                <input type="password" v-model='signup.password_confirmation'
                       class="password ele" 
                       placeholder="Confirm password">
                <button class="clkbtn" v-on:click="SignUp">Signup</button>
            </div>
        </div>
    </div>
</body>
</html>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Signup',
  data(){
   return{
       user:{
        email:"",
        password:""
       },
       signup:{
        name:"",
        email:"",
        password:"",
        password_confirmation:""
       },
       info:"hi"
   }

  },
  methods:{
    async SignUp(){
       if(this.signup.password!=this.signup.password_confirmation){
        alert("password not match")
       }

         await axios.post("https://blogs.kingofkey.net/api/register",this.signup)
      .then(response =>
       {
        if(response.data.data.id>0)
        {
            console.log(response.data.data);
          
          alert("SuccessFully Register")
          this.signup="";

        }
       
       })
       .catch(error=>{
         if(error.response)
          console.log(error.response.data);
       })

    },
   async login(){
      await axios.post(`https://blogs.kingofkey.net/api/login?email=${this.user.email}&password=${this.user.password}`)
      .then(response =>
       {
        if(response.data.data.id>0)
        {
        localStorage.setItem("token", JSON.stringify(response.data.data.token));
        response.data.data.token="";
        localStorage.setItem("user", JSON.stringify(response.data.data));
        this.$router.push({name:'Home'})
        }
       
       })
       .catch(error=>{
         if(error.response)
          console.log(error.response.data);
       })
      

    }
  }
  ,
   mounted() {
    let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");

signup.addEventListener("click", () => {
    slider.classList.add("moveslider");
    formSection.classList.add("form-section-move");
});

login.addEventListener("click", () => {
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
});


  },
 
}
</script>

<style scoped>
@import url(
"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
}

body {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
    background-color: rgb(231, 231, 231);
}

header {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

.heading {
    color: green;
}

.title {
    font-weight: 400;
    letter-spacing: 1.5px;
}

.container {
    height: 600px;
    width: 500px;
    background-color: white;
    box-shadow: 8px 8px 20px rgb(128, 128, 128);
    position: relative;
    overflow: hidden;
}

.btn {
    height: 60px;
    width: 300px;
    margin: 20px auto;
    box-shadow: 10px 10px 30px rgb(254, 215, 188);
    border-radius: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.login,
.signup {
    font-size: 22px;
    border: none;
    outline: none;
    background-color: transparent;
    position: relative;
    cursor: pointer;
}

.slider {
    height: 60px;
    width: 150px;
    border-radius: 50px;
    background-image: linear-gradient(to right,
            rgb(255, 195, 110),
            rgb(255, 146, 91));
    position: absolute;
    top: 20px;
    left: 100px;
    transition: all 0.5s ease-in-out;
}

.moveslider {
    left: 250px;
}

.form-section {
    height: 500px;
    width: 1000px;
    padding: 20px 0;
    display: flex;
    position: relative;
    transition: all 0.5s ease-in-out;
    left: 0px;
}

.form-section-move {
    left: -500px;
}

.login-box,
.signup-box {
    height: 100%;
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0px 40px;
}

.login-box {
    gap: 50px;
}

.signup-box {
    gap: 30px;
}

.ele {
    height: 60px;
    width: 400px;
    outline: none;
    border: none;
    color: rgb(77, 77, 77);
    background-color: rgb(240, 240, 240);
    border-radius: 50px;
    padding-left: 30px;
    font-size: 18px;
}

.clkbtn {
    height: 60px;
    width: 150px;
    border-radius: 50px;
    background-image: linear-gradient(to right,
            rgb(255, 195, 110),
            rgb(255, 146, 91));
    font-size: 22px;
    border: none;
    cursor: pointer;
}

/* For Responsiveness of the page */

@media screen and (max-width: 650px) {
    .container {
        height: 600px;
        width: 300px;
    }

    .title {
        font-size: 15px;
    }

    .btn {
        height: 50px;
        width: 200px;
        margin: 20px auto;
    }

    .login,
    .signup {
        font-size: 19px;
    }

    .slider {
        height: 50px;
        width: 100px;
        left: 50px;
    }

    .moveslider {
        left: 150px;
    }

    .form-section {
        height: 500px;
        width: 600px;
    }

    .form-section-move {
        left: -300px;
    }

    .login-box,
    .signup-box {
        height: 100%;
        width: 300px;
    }

    .ele {
        height: 50px;
        width: 250px;
        font-size: 15px;
    }

    .clkbtn {
        height: 50px;
        width: 130px;
        font-size: 19px;
    }
}

@media screen and (max-width: 320px) {
    .container {
        height: 600px;
        width: 250px;
    }

    .heading {
        font-size: 30px;
    }

    .title {
        font-size: 10px;
    }

    .btn {
        height: 50px;
        width: 200px;
        margin: 20px auto;
    }

    .login,
    .signup {
        font-size: 19px;
    }

    .slider {
        height: 50px;
        width: 100px;
        left: 27px;
    }

    .moveslider {
        left: 127px;
    }

    .form-section {
        height: 500px;
        width: 500px;
    }

    .form-section-move {
        left: -250px;
    }

    .login-box,
    .signup-box {
        height: 100%;
        width: 250px;
    }

    .ele {
        height: 50px;
        width: 220px;
        font-size: 15px;
    }

    .clkbtn {
        height: 50px;
        width: 130px;
        font-size: 19px;
    }
}

</style>
