import {post, get} from './config';

/*招商*/
export const register = params => post('/sellermanager/register', params);//注册

export const loginout = params => post('sellermanager/loginout', params);//退出

export const login= params => post('/sellermanager/login', params);//登录

export const category = params => post('/sellermanager/category' , params); //分类

export const categoryfee = params => post('/sellermanager/categoryfee' , params); //资费查询

export const district = params => get('/sellerenter/district',params); //地区

export const protocol = params => get('/sellerEnter/protocol',params);//签署协议

export const sellerEnter = params => get('/sellerEnter',params);//状态列表

export const stepfour = params => post('/sellerenter/stepfour',params);//步骤四

export const categories = params => get('/sellerenter/categories',params); //经营类目

export const stepone = params => post('/sellerenter/stepone',params); //第一步：基本信息提交

export const steptwo = params => post('/sellerenter/steptwo',params); //第二部：店铺信息提交

export const brandlist = params => get('/sellerenter/brandlist',params); //品牌列表

export const storebrand = params => post('/sellerenter/storebrand',params); //上传品牌

export const stepthree = params => post('/sellerenter/stepthree', params) //第三步：资质信息提交

export const getMenus = params => get('/sellergroup/getMenus',params);//菜单列表


