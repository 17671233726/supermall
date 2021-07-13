import { request2 } from "./request"
export function getMomentList() {
    return request2({
        url:'/moment',
        method:"post",
        data:{
            "content":"react天下无敌"

        },
        // headers: {
        //     Authorization:"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywibmFtZSI6InVzZXIiLCJpYXQiOjE2MjYxNDY1NDcsImV4cCI6MTYyNjIzMjk0N30.V0UiaCNVrBenXHWpYgozkWYz3-d_L71b7_CvHNrC9fM349_-NicDtYCEYIuK-vRWEiUG8wLzkgGZMG3Yx_tki4DWpkZfh5_5rg_VlpI4oMfts52cS1EYiy1sGzueqfqrtKqJgHO-hUk9x0N61zfk4ru-QkgiSohnqK-ZlyWewmU"
        // }
    })
}

export function register(name,password){
    return request2({
        url:'/users',
        method:"post",
        data:{
            "name":`${name}`,
            "password":`${password}`
        },
    })
}

export function login({name,password}){
    return request2({
        url:'/login',
        method:"post",
        data:{
            "name":`${name}`,
            "password":`${password}`
        },
    })
}

export function getUserInfo(id){
    return request2({
        url:`/users/${id}/info`,
        method:"get",
    })
}

export function getMoment(id){
    return request2({
        url:`/moment?offset=0&size=10`,
        method:"get",
    })
}

export function getVedio(id){
    return request2({
        url:`/upload/getVedio`,
        method:"get",
    })
}