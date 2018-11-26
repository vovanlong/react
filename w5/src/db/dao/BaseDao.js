import {realm} from '../Realm'

export default class BaseDao {
    constructor(name) {
        this.name = name;
    }

    save(user) {
        realm.write(() => {
            realm.create(this.name, user);
        })
    }

    getAll() {
        return realm.objects(this.name);
    }

    saveOrUpdate(user) {
        realm.write(() => {
            realm.create(this.name, user, true);
        })
    }

    saveList(users) {

    }

    find() {

    }

    listen(callback) {
        realm.addListener('change', () => {
            callback();
        })
    }
}