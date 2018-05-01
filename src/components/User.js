import React, { Component } from 'react';

class User extends Component {
  constructor(props) {
    super(props);
  };

  componentDidMount() {
    this.props.firebase.auth().onAuthStateChanged( user => {
      this.props.setUser(user)
    });
  }

  handleSignIn(e) {
  const provider = new this.props.firebase.auth.GoogleAuthProvider();
  this.props.firebase.auth().signInWithPopup( provider);
  console.log("signed in");
  };

  handleSignOut(e) {
    this.props.firebase.auth().signOut();
    this.props.setUser("Guest");
    console.log("signed out")
  }

  render() {

    const userDisplayName = this.props.activeUser === (undefined || null) ? "Guest" : this.props.activeUser.displayName;

    return (
      <section className="userName">
        <button type="text" onClick={() => this.handleSignIn()}>sign in</button>
        <button type="text" onClick={() => this.handleSignOut()}>sign out</button>
        <div>hello, {userDisplayName}</div>
      </section>
    );
  }
};
export default User;
