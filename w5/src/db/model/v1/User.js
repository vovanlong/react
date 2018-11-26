export class User {

}

User.schema = {
    name: 'User',
    properties: {
        firstName: {type: 'string'},
        lastName: {type: 'string'},
        email: {type: 'string'}
    }
};