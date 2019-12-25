import firebase from "firebase/app"
import "firebase/database"

const config = {
  apiKey: "AIzaSyCWk6xUnbrPmpJ3SGI93gi6S1VLmjlndZQ",
  authDomain: "foodlist-feda3.firebaseapp.com",
  databaseURL: "https://foodlist-feda3.firebaseio.com",
  projectId: "foodlist-feda3",
  storageBucket: "foodlist-feda3.appspot.com",
  messagingSenderId: "620813262067",
  appId: "1:620813262067:web:09d8636eab2d6c3de86b86"
}

class Firebase {
    constructor() {
        firebase.initializeApp(config);
        this.db = firebase.database();
    }

    async readFoodDb() {
        return await this.db.ref('food').once('value')
            .then(snapshot =>  snapshot.val()).catch(()=> alert(123))
           
    }

    async writeFoodDb(name, ch, count, price, id) {
        return await this.db.ref('food/' + id).set({
            Name: name,
            Ch: ch,
            Count: count,
            Price: price
        },
        (err) => { 
            if (err) {
                console.log("Write error: " + err)
                this.status = 'Err'
            }
            else
                this.status = 'Ok'
            } 
        );
    }

    async readWatherDb() {
        return await this.db.ref('wather').once('value')
            .then(snapshot =>  snapshot.val())
    }

    async writeWatherDb(name, ch, count, price, id) {
        return await this.db.ref('wather/' + id).set({
            Name: name,
            Ch: ch,
            Count: count,
            Price: price
        }, (err) => { 
            if (err) {
                console.log("Write error: " + err)
                this.status = 'Err'
            }
            else
                this.status = 'Ok'
            } 
        )
    }
}

export default new Firebase()