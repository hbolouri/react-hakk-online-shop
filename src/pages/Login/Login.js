import React, { useContext, useEffect } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import GoogleButton from "react-google-button";
import { MyContext } from "../App";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDING_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const Login = () => {
  const { setUser } = useContext(MyContext);
  //to change the url parameter
  const navigate = useNavigate();
  const loginWithGoogle = () => {
    //which services we want to show
    signInWithPopup(auth, googleProvider)
      .then((userInfo) => {
        setUser(userInfo.user);
        //login page disappeared and we want to change parameter
        //{replace:true} change the previous path
        navigate("/profile");
        //navigate(-2)go two step back

        console.log(userInfo);
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div>
      <h1>Login Page</h1>
      <GoogleButton onClick={loginWithGoogle} />
    </div>
  );
};

export default Login;
