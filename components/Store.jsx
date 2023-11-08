import { createStore } from 'state-pool';
const store = createStore();
store.setState('datauser', { email: '', fullname: '', role: '' });
store.setState('Task', []);
store.setState('eventId', '');
export default store;
