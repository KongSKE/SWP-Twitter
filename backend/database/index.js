const firebase = require("firebase/app");
require("firebase/database");

const apis = {
  apiKey: "AIzaSyCwqzuiiu2sBxmYWorMAmTYHhmrpGTJCeg",
  authDomain: "swp-final-twitter-140a3.firebaseapp.com",
  databaseURL: "https://swp-final-twitter-140a3.firebaseio.com",
  projectId: "swp-final-twitter-140a3",
  storageBucket: "swp-final-twitter-140a3.appspot.com",
  messagingSenderId: "129722124308",
  appId: "1:129722124308:web:247b134958b5488f"
};

firebase.initializeApp(apis);
const push = value => {
  firebase
    .database()
    .ref("/database")
    .push(value);
};

module.exports = {
  push
};
