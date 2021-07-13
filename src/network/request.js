import axios from 'axios'

const token=window.sessionStorage.getItem('token');

export function request(config) {
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:8000/api/w6',
        timeout: 5000
    });
    instance.interceptors.request.use(con => {
        return con
    }, err => {

    });
    instance.interceptors.response.use(res => {
        return res.data
    }, err => { })
    return instance(config)
}

export function request2(config) {
    const instance = axios.create({
        baseURL: 'http://120.79.146.219:8000',
        timeout: 5000,
        headers:{
            Authorization:token
        }
    });
    instance.interceptors.request.use(con => {
        return con
    }, err => {

    });
    instance.interceptors.response.use(res => {
        return res
    }, err => { })
    return instance(config)
}
