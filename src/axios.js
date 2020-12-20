import axios from 'axios';

const instance = axios.create({ 
    baseURL: 'http://localhost:5001/clone-87d7d/us-central1/api'      //The API (cloud Function) URL
});


export default instance;