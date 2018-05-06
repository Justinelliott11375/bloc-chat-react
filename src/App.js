import React, { Component } from 'react';
import './App.css';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
import User from './components/User';
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
      activeRoom: {}, activeUser:"Guest"
    };
    this.setActiveRoom = this.setActiveRoom.bind(this);
    this.setUser = this.setUser.bind(this);
  }

  setActiveRoom(room) {
    this.setState({activeRoom: room}, () => console.log("Active room:", this.state.activeRoom));
  }

  setUser(user) {
    this.setState({activeUser: user});
  }

  render() {
    return (
      <div className="App">

        <main>
          <User firebase={firebase} setUser={this.setUser} activeUser={this.state.activeUser}/>
          <RoomList firebase={ firebase } setActiveRoom={ (room) => this.setActiveRoom(room) } activeRoom={this.state.activeRoom}/>
          <MessageList firebase={firebase} activeRoom={this.state.activeRoom} activeUser={this.state.activeUser}/>
        </main>
      </div>
    );
  }
}

export default App;
