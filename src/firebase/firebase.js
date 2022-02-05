import firebase from "firebase/app";
import "firebase/firestore"

const app = firebase.initializeApp({
    apiKey: "AIzaSyBP6omITv0ovfxDNEUGSK2vyoIP1KyQe5o",
    authDomain: "melodyclothes-88b3d.firebaseapp.com",
    projectId: "melodyclothes-88b3d",
    storageBucket: "melodyclothes-88b3d.appspot.com",
    messagingSenderId: "244613500690",
    appId: "1:244613500690:web:bdea88c76d666d43e8edcb"
})

export function getFirebase(){
    return app
}

export function getFirestore(){
    return firebase.firestore(app)
}