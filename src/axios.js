import axios from 'axios';
import './App.css';

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
});

export default instance;