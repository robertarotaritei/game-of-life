import { extendObservable } from 'mobx';

class UserStore {
    constructor() {
        extendObservable(this, {
            loading: true,
            key: '',
            username: ''
        })
    }
}
export default new UserStore();