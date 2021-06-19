import React, { useState } from "react";
import classes from "./ProfilePage.module.css";
import { useRef } from "react";
import { useHistory } from "react-router";

const ProfilePage = () => {
  const apiUrl = "http://localhost:5000/admin";
  const history = useHistory();
  const [user, setUser] = useState({});
  const name = useRef("");
  const email = useRef("");

  const switchToPasswordHandler = () => {
    history.push("/changepassword");
  };
  const fetchData = () => {
    return fetch(apiUrl).then((response) => {
      return response.json();
    });
  };

  const showUser = () => {
    fetchData().then((response) => {
      setUser(response);
    });
  };
  const saveChanges = () => {
    fetch(apiUrl,{
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name: name.current.value, email: email.current.value})
    }).then(()=>{
      showUser()
    })
    
  };

  return (
    <div className="container d-flex justify-content-center ">
      <div className={classes.card}>
        <div className={classes.imageSection}>
          {user.image &&
          <img
          className={classes.image}
          alt='profile-img'
          src={user.image}
        ></img>
          }
          
        </div>
        <div className={classes.info}>
          <p>{user.name}</p>
        </div>
        <div className={classes.info}>
          <p>{user.email}</p>
        </div>
        <div className={classes.changeInputs}>
          <div className={classes.changeEmail}>
            <input placeholder={user.name} ref={name}></input>
          </div>
          <div className={classes.changeName}>
            <input placeholder={user.email} ref={email}></input>
          </div>
        </div>
        <div className="d-flex justify-content-center ">
        <button className="btn btn-success small m-4 mt-3" onClick={showUser}>
            Get User Data
          </button>
          <button className="btn btn-primary  m-4 mt-3" onClick={saveChanges}>
            Save Changes
          </button>
          <button
            className="btn btn-primary m-4 mt-3"
            onClick={switchToPasswordHandler}
          >
            Change Password
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
