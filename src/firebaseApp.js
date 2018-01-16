import firebase from 'firebase'
import config from './secret.json'
export const firebaseApp = firebase.initializeApp(config)
export const eventsRef = firebaseApp.database().ref().child('events')
