import { get, post } from './request'
export const apiOne = p => get('/user/liuyan/list', p)
export const apiTwo = p => post('/user/liuyan', p)
export const tableList = (url, p) => get(url, p)
