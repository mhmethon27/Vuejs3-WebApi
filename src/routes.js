import {createRouter, createWebHistory} from 'vue-router'
import Home from './components/Home.vue'
import Signup from './components/Signup.vue'
import TagM from './components/TagM.vue'
import PostsM from './components/PostsM.vue'

const routes=[ 
    {   name:'Home',
        component:Home,
        path:'/'
    },
    {   name:'Signup',
        component:Signup,
        path:'/Signup'
    }
    ,
    {   name:'TagM',
        component:TagM,
        path:'/TagM'
    }
    ,
    {   name:'PostsM',
        component:PostsM,
        path:'/PostsM'
    }



]

const router=createRouter({
    history:createWebHistory(),
    routes,
})


router.beforeEach(async (to) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ['/Signup'];
    const authRequired = !publicPages.includes(to.path);
    const auth = localStorage.getItem('token');

    if (authRequired && !auth) {
        
        return '/Signup';
    }
});

export default router




