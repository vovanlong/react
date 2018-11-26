import { getToken } from "./store"

const URL = 'https://api.coinmarketcap.com/v1/ticker/?limit=100';

const request = async () => {
  const token = await getToken();
  //Add token to headers
  return fetch(URL).then(res => {
    return res.json();
  }).catch(error => {
    alert(JSON.stringify(error));
  })
};

export const getListCoin = () => {
  return request();
};