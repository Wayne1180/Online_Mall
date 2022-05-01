//当前这个模块：API进行统一管理
import requests from "./request";
import mockRequests from './mockAjax'

//三级联动接口
//发请求：axios发请求返回结果Promise对象
//export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' })

export const reqCategoryList = () => requests.get(`/product/getBaseCategoryList`)

//获取banner（Home首页轮播图接口）
export const reqGetBannerList = () => mockRequests.get('/banner')

//获取floor数据
export const reqFloorList = () => mockRequests.get('/floor')

//获取搜索模块数据 地址：/api/list  请求方式：post
//请求参数 

//当前这个接口，给服务器传递参数params，至少是一个空对象
export const reqGetSearchInfo = (params) => requests({ url: '/list', method: 'post', data: params })

