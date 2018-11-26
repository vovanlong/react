import {parseString} from 'react-native-xml2js';

const URL = 'https://cointelegraph.com/feed';
export const fetchNews = () => {
    return fetch(URL).then(res => {
        return res.text();
    }).then(text => {
        return parse(text);
    })
};

const parse = (text) => new Promise((resolve, reject) => {
    parseString(text, (error, result) => {
        if (error) {
            reject(error);
        }
        const items = result
            && result.rss
            && result.rss.channel
            && result.rss.channel[0].item
            || [];
        resolve(items);
    })
});