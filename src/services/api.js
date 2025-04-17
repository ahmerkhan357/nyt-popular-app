import axios from 'axios';

const API_KEY = 'Be7kIsgJGeGzidOg46xmCv5g9Go1wzlM';
const BASE_URL = 'https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json';

export const fetchArticles = async () => {
  const res = await axios.get(`${BASE_URL}?api-key=${API_KEY}`);
  return res.data.results;
};