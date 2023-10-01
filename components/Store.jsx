import { createStore } from 'state-pool';
const store = createStore();
store.setState('datauser', { email: '', role: '', fullname: '' });
export default store;
