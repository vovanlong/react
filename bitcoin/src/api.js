import { parseString } from 'react-native-xml2js';

const API_URL =
  'https://api.coinmarketcap.com/v2/ticker/?start=101&limit=10&sort=id&structure=array';

export const fetchNews = async (url, method, body) => {
  try {
    const response = await fetch(url, { method, body: JSON.stringify(body) });
    const data = await response.json();
    return data;
  } catch (error) {}
};

const parse = text =>
  new Promise((resolve, reject) => {
    parseString(text, (error, result) => {
      console.log(result);
      if (error) {
        reject(error);
      }
      const items =
        (result &&
          result.rss &&
          result.rss.channel &&
          result.rss.channel[0].data) ||
        [];
      resolve(items);
    });
  });
