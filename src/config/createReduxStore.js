import rootReducer from "../store/reducers/rootReducer";
import { createStore, applyMiddleware,compose } from "redux";
import thunk from "redux-thunk";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase,getFirebase } from "react-redux-firebase";
import firebase from "firebase/app";

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

const initialState = {};

export default () => {
  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
      reduxFirestore(firebase, firebaseConfig)
    )
  );
};