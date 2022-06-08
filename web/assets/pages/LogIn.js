import React from "react";
import { db } from "../firebaseConfig";
import { useState, useEffect } from "react";

function LogIn() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setpasswordError("");
  };

  const handleLogin = () => {
    clearErrors();
    db.auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setpasswordError(err.message);
            break;
        }
      });
  };

  const handleSignup = () => {
    clearErrors();
    db.auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setpasswordError(err.message);
            break;
        }
      });
  };

  const handleLogout = () => {
    db.auth().signOut();
  };

  const authListener = () => {
    db.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
    <body>
      <div className="container" id="container">
        <div className="form-container log-in-container">
          <form action="#">
            <h1>Login</h1>

            <input
              type="text"
              placeholder="User name/Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="errorMsg">{emailError}</p>
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="errorMsg">{passwordError}</p>
            <a href="#">If you are new Please signup?</a>
            <button>Log In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
              <h1>Farmer login from here</h1>
              <p>
                So we can put some instruction for the farmer bls bla bla . . .
              </p>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default LogIn;
