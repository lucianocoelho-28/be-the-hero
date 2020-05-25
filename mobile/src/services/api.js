import axios from 'axios';

const api = axios.create({
      baseURL: 'http://10.0.2.15:3333'
//    baseURL: 'http://em-5dh.anonymous.mobile.exp.direct:80'
});

export default api;

