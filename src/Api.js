import axios from 'axios';

const Api = axios.create({
    baseURL: 'http://localhost:8000/api'
});

export default {
    login: async (email, password) => {
      let {data:res} = await Api.post('/auth/login', {email, password});
      return res;
    },
    register: async (name, email, password) => {
      let { data:res } = await Api.post('/user', {name, email, password});
      return res;
    }
};