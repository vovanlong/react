import Realm from 'realm';
import {User} from "./model/v1/User";
import {Coin} from "./model/v1/Coin";
import {UserV2} from "./model/v2/UserV2";
import {CoinV2} from "./model/v2/CoinV2";

/**
 * migration database from V1 to V2
 * @param oldRealm
 * @param newRealm
 */
const migrationV2 = (oldRealm, newRealm) => {
    alert('migration');
    const oldObjects = oldRealm.objects("User");
    const newObjects = newRealm.objects("User");
    for (let i = 0; i < oldObjects.length; i++) {
        newObjects[i].name = oldObjects[i].firstName + oldObjects[i].lastName;
        newObjects[i].age = 18;
    }
};

/**
 * List schemas
 * @type {*[]}
 */
const schemas = [
    {
        schema: [User, Coin],
        schemaVersion: 0
    },
    {
        schema: [UserV2, CoinV2],
        schemaVersion: 1,
        migration: migrationV2
    }
];

/**
 * migration database step by step
 * @type {number}
 */
let schemaIndex = Realm.schemaVersion(Realm.defaultPath);
if (schemaIndex !== -1) {
    while (schemaIndex < schemas.length) {
        const migratedRealm = new Realm(schemas[schemaIndex++]);
        migratedRealm.close();
    }
}

/**
 * Last version schema
 * @type {Realm}
 */
export const realm = new Realm(schemas[schemas.length - 1]);