import axios from 'axios';


const API = axios.create({ baseURL: 'http://localhost:3000/api/greetings' });

export const getGreetings = () => API.get();

