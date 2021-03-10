import axios from 'axios';

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'https://us-central1-fir-eb03f.cloudfunctions.net/apifir',
});

export default instance;
