import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import createReduxStore from "./config/createReduxStore";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { createFirestoreInstance } from "redux-firestore";



const firebaseConfig = {
  apiKey: "AIzaSyCamFywveHClnmaIJsEbOPzo3_UZ3D8_KI",
  authDomain: "telechubbies-fb75c.firebaseapp.com",
  databaseURL: "https://telechubbies-fb75c.firebaseio.com",
  projectId: "telechubbies-fb75c",
  storageBucket: "telechubbies-fb75c.appspot.com",
  messagingSenderId: "906283372553",
  appId: "1:906283372553:web:724750eaec24610af128d8",
  measurementId: "G-J7K3CEXNSS",
  userProfile: "users", // where profiles are stored in database
  useFirestoreForProfile: true, // use Firestore for profile instead of RTDB
};
const rrfConfig = { userProfile: "users" };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

const store = createReduxStore();
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
};

ReactDOM.render(
  <React.StrictMode>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <Provider store={store}>
        <App />
      </Provider>
  </ReactReduxFirebaseProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
