export class Coin {

}

Coin.schema = {
    name: 'Coin',
    properties: {
        id: {type: 'string'},
        name: {type: 'string'},
        price_usd: {type: 'string'}
    }
};