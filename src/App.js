import React, { Component } from 'react';
import './App.css';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
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
  constructor(props) {
    super(props);
    this.state = {
      activeRoom: {}
    };
    this.setActiveRoom = this.setActiveRoom.bind(this);
  }

  setActiveRoom(room){
    this.setState({activeRoom: room}, () => console.log("Active room state:", this.state.activeRoom));
    console.log("Room changed:", room);
  }

  render() {
    return (
      <div className="App">

        <main>
          <RoomList firebase={ firebase } setActiveRoom={ (room) => this.setActiveRoom(room) } />
          <MessageList firebase={firebase} activeRoom={this.state.activeRoom}/>
        </main>
      </div>
    );
  }
}

export default App;
