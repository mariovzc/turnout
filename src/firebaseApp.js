import firebase from 'firebase'
const config = {
  apiKey: 'AIzaSyDdV2FLjFx7LL1zL8MiMvqs38-EdLfE3w0',
  authDomain: 'turnout-75299.firebaseapp.com',
  databaseURL: 'https://turnout-75299.firebaseio.com',
  projectId: 'turnout-75299',
  storageBucket: 'turnout-75299.appspot.com',
  messagingSenderId: '1015653609834'
}

export const firebaseApp = firebase.initializeApp(config)
