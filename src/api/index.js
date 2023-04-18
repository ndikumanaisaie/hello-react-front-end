import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3000/api/greetings' });

const getGreetings = () => API.get();

export default getGreetings;
