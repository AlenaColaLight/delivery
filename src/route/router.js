import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../components/Home.vue";
import Category from "../components/Category.vue";
import Cart from "../components/Cart.vue";
import About from "../components/About.vue";

    let router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/',
            component: Home,
        },
        { 
            path: "/category/:id", 
            name: "Category", 
            component: Category, 
            props: true 
        },
        {
            path:'/cart',
            component: Cart,
        },
                {
            path:'/about',
            component: About,
        },
    ]
})

export  default router;