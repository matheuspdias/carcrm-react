import axios from 'axios';
import { useDispatch } from 'react-redux';

const Api = axios.create({
    baseURL: 'http://localhost:8000/api'
});

export default {
    login: async (email, password) => {
      let {data:res} = await Api.post('/auth/login', {email, password});
      return res;
    }
};