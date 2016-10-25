import axios from 'axios';

export function getCharacters(query) {
  axios.get('/characters/find/:query')
    .then(res => {
      console.log(res.data);
    })
    .catch(console.error);
};
