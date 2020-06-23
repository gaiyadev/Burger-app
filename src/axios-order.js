import axios from 'axios';

const instance = axios.create({
    baseURL: "https://burger-app-49821.firebaseio.com/"
});

export default instance;