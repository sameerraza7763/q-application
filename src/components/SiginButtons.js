import React from 'react'
import { NavLink,useNavigate } from "react-router-dom";
import { useState } from 'react';

import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    getFirestore,
    doc,
    setDoc,
    swal,
    auth,
    addUserToDB,
    db,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    
  } from "./../config/Firebase";
  
  
const SiginButtons = () => {
    const navigate = useNavigate()
    // const siginGooglePage = () =>{
    //     navigate('/SiginGoogle')

    // }


    // Sigin with google 
    const signInGoogle = async () => {
        try {
          var provider = new GoogleAuthProvider();
          const result = await auth;
          await signInWithPopup(auth, provider);
          await addUserToDB();
          await swal("Congratulations!", "Loggined successfully!", "success");
          localStorage.setItem("uid",auth.currentUser.uid)
          navigate('/Website')
        } catch (e) {
          console.log(e.message);
        }
      };




        























      const [darkMode, setDarkMode] = useState(false);

    return (
        
        
<div     className={darkMode ? "dark-mode" : "light-mode"} style={{height:'780px', width:'100%'}}  >
        <div>     







<div >
      <div >
        <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
        <div className="switch-checkbox">
          <label className="switch">
            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
            <span className="slider round"> </span>
          </label>
        </div>
        <span style={{ color: darkMode ? "#c96dfd" : "grey" }}>☽</span>
      </div>
     
    </div>















            <div className="siginBtns">


                {/* <NavLink to="/SiginGoogle"> */}
                <button className="continueSignup " onClick={signInGoogle}  style={{background :darkMode?    "#c96dfd":"grey"  ,color:darkMode?  'black' :'white' }} >
                    <i
                        className="fab fa-google googleBtnLogin"
                        style={{ fontSize: "22px" }}
                    ></i>{" "}
                    &nbsp; Continue with Google
                </button>
                {/* </NavLink> */}

  <br />








            </div>
        </div>
        </div>
    )
}

export default SiginButtons
