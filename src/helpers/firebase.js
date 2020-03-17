import Vue from 'vue'
import firebase from 'firebase/app'
import 'firebase/firebase-auth'
import * as firebaseui from 'firebaseui'

const firebaseConfig = {
    apiKey: 'AIzaSyB_yC2aNHie1nPLYo-ZvaizPo26R-9eFv4',
    authDomain: 'login-9b0d6.firebaseapp.com',
    databaseURL: 'https://login-9b0d6.firebaseio.com',
    projectId: 'login-9b0d6',
    storageBucket: 'login-9b0d6.appspot.com',
    messagingSenderId: '285518885662',
    appId: '1:285518885662:web:01165078edc1d20f500f0f'
  }


firebase.initializeApp(firebaseConfig)

const ui = new firebaseui.auth.AuthUI(firebase.auth())



Vue.prototype.$firebase = firebase

Vue.prototype.$firebaseui = ui