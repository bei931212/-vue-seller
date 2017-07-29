import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/view/index.vue'
import Home from '@/components/view/home.vue' //招商入口首页
import Register from '@/components/view/register.vue'
import Cost from '@/components/view/cost.vue'
import Process from '@/components/view/process.vue'
import Standard from '@/components/view/standard.vue'
import Manager from '@/components/manager/manager.vue'
import Sign from '@/components/manager/sign/sign.vue'
import Manager_home from '@/components/manager/manager_home.vue' //后台首页
import Qualification from '@/components/manager/submit/Qualification.vue' //提交资质
import Step1 from '@/components/manager/submit/step1.vue' //
import Step2 from '@/components/manager/submit/step2.vue' //
import Step3 from '@/components/manager/submit/step3.vue' //
import Step4 from '@/components/manager/submit/step4.vue' //
import Step5 from '@/components/manager/submit/step5.vue' //
import Menu from '@/components/back/menu.vue' //
Vue.use(Router)
export default new Router({
	routes: [
    	{
    		path: '/',
            name: 'Index',
    		component: Index,
            redirect: "/home",
    		children: [
    			{
    				path: "cost",
                    name: 'Cost',
    				component: Cost,
    			},
    			{
    				path: "process",
                    name: 'Process',
    				component: Process
    			},
    			{
    				path: "standard",
                    name: 'Standard',
    				component: Standard
    			},
    			{
    				path: "home",
                    name: 'Home',
    				component: Home
    			},
                {
                    path: "register",
                    name: 'Register',
                    component: Register,
                }
    		]
    	},	
        {
            path: '/manager_home',
            name: 'Manager_home',
            component: Manager_home,
            children: [
                {
                    path: "manager",
                    name: 'Manager',
                    component: Manager,
                },
                {
                    path: "sign",
                    name: 'Sign',
                    component: Sign,
                },
                {
                    path: "submit",
                    name: 'Qualification',
                    component: Qualification,
                    redirect: "/manager_home/submit/step1",
                    children:[{
                        path: "step1",
                        name: 'Step1',
                        component: Step1,
                        meta:{
                            stepNum:1
                        }
                    },
                    {
                        path: "step2",
                        name: 'Step2',
                        component: Step2,
                        meta:{
                            stepNum:2
                        }
                    },
                    {
                        path: "step3",
                        name: 'Step3',
                        component: Step3,
                        meta:{
                            stepNum:3
                        }
                    },
                    {
                        path: "step4",
                        name: 'Step4',
                        component: Step4,
                        meta:{
                            stepNum:4
                        }
                    },
                    {
                        path: "step5",
                        name: 'Step5',
                        component: Step5,
                        meta:{
                            stepNum:5
                        }
                    }]
                }
            ]
        },  
        {
            path: '/menu',
            component:Menu,
        }
    ]
})