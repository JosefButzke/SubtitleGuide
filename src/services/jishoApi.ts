import Axios from 'axios';

const jishoApi = Axios.create({
  baseURL: 'https://jisho.org/api/v1/search/words?keyword=house',
});

export default jishoApi;
