import React, { Component } from 'react';
import './App.css';
import RoomList from './components/RoomList';
import * as firebase from 'firebase';


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC0n9P9vhpABver58KTslUkywqy0nCXIDM",
    authDomain: "bloc-chat-react-bce96.firebaseapp.com",
    databaseURL: "https://bloc-chat-react-bce96.firebaseio.com",
    projectId: "bloc-chat-react-bce96",
    storageBucket: "bloc-chat-react-bce96.appspot.com",
    messagingSenderId: "1060099057353"
  };
  firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div className="App">
      <header><h1>Bloc Chat</h1>
      </header>
        <main>
          <RoomList firebase={ firebase } />
        </main>
      </div>
    );
  }
}

export default App;
