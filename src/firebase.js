import firebase from "firebase/app"
import "firebase/database"

const config = {
    apiKey: "AIzaSyDecfjkte78sM7DsyKEqZHJ_jif6AoHnlU",
    authDomain: "carfoodsite.firebaseapp.com",
    databaseURL: "https://carfoodsite.firebaseio.com",
    projectId: "carfoodsite",
    storageBucket: "carfoodsite.appspot.com",
    messagingSenderId: "619940298294",
    appId: "1:619940298294:web:f72f99345f22024e4d2297",
    measurementId: "G-94JTTJLEFH"
}

class Firebase {
    constructor() {
        firebase.initializeApp(config);
        this.db = firebase.database();
    }
    readDb() {
        return this.db.ref('feedback').once('value')
            .then(snapshot => { return JSON.stringify(snapshot.val()) })
            .then((val) => this.feedbackCallback(val));

    }

    async writeDb(text, select) {
        return await this.db.ref('feedback/' + this.getCurrentUsername()).set({
            email: this.auth.currentUser.email,
            text: text,
            select: select
        });
    }
}

export default new Firebase()