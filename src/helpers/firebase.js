import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBgRVzxkLKc2ss2SBxTzJNlRi1RjAdDZKo',
  authDomain: 'houzia-f1fb6.firebaseapp.com',
  databaseURL: 'https://houzia-f1fb6.firebaseio.com',
  projectId: 'houzia-f1fb6',
  storageBucket: 'houzia-f1fb6.appspot.com',
  messagingSenderId: '914940161901',
  appId: '1:914940161901:web:6dabba75555a1299f2b464',
  measurementId: 'G-MH5D72WD2L',
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
