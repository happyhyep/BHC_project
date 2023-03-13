import axios from 'axios';


export const getAxios = (endPoint, data = {}, config = {}) =>
    axios({
        url: `http://172.16.251.79:8080${endPoint}`,
        method: 'get',
        withCredentials: true,
        data: data,
        ...config,
    });

export const postAxios = (endPoint, data = {}, config = {}) =>
    axios({
        url: `http://172.16.251.79:8080${endPoint}`,
        method: 'POST',
        withCredentials: true,
        data: data,
        ...config,
    });

export const deleteAxios = (endPoint) =>
    axios({
        url: `http://172.16.251.79:8080${endPoint}`,
        method: 'DELETE',
        withCredentials: true,
    });


// // 사용예시
// getAxios('/user/list').then((res) => {
//     console.log(res);
// });

// postAxios('/user/register', {
//     motto: 'string',
//     nickname: 'string',
// }).then((res) => {
//     console.log(res);
// });