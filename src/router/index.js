import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/view/index'
import Home from '@/components/view/home' //招商入口首页
import Register from '@/components/view/register'
import Cost from '@/components/view/cost'
import Process from '@/components/view/process'
import Standard from '@/components/view/standard'
import Manager from '@/components/manager/manager'
import Sign from '@/components/manager/sign/sign'
import Manager_home from '@/components/manager/manager_home' //后台首页
import Qualification from '@/components/manager/submit/Qualification' //提交资质
import Step1 from '@/components/manager/submit/step1' //
import Step2 from '@/components/manager/submit/step2' //
import Step3 from '@/components/manager/submit/step3' //
import Step4 from '@/components/manager/submit/step4' //
import Step5 from '@/components/manager/submit/step5' //
import Seller_list from '@/components/seller/list' //用户列表
import Seller_group from '@/components/seller/sellergroup' //工作组列表
import Order_list from '@/components/order/list' //订单列表
import Goods_add from '@/components/goods/add' //商品添加
import Goods_list from '@/components/goods/list' //商品列表


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
                },
                {
                    path: "seller/list",
                    component: Seller_list,
                },
                {
                    path: 'sellergroup/list',
                    component: Seller_group,
                },
                {
                    path: 'order/list',
                    component: Order_list
                },
                {
                    path: 'goods/add',
                    component: Goods_add
                },
                {
                    path: 'goods/list',
                    component: Goods_list
                }
            ]
        },
    ]
})