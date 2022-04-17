import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { current, logout } from "../../JS/Actions/Users";
import "./Header.css";

function Header({ setsearch }) {
  // const isAuth = localStorage.getItem("token");
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   if (isAuth) {
  //     dispatch(current());
  //   }
  // }, []);
  // const users = useSelector((state) => state.userReducer.user);

  return (
    <div>
      <div className="header">
        <Link to="/lists">
          {" "}
          <img src="logo.png" className="logo"></img>
        </Link>
        {/* <nav class="navbar">{users.name} {users.lastname}</nav> */}
        <div class="search__container">
          <input
            class="search__input"
            type="text"
            placeholder="Search"
            onChange={(e) => setsearch(e.target.value)}
          />
        </div>
        {/* <div className="logout">
          <ion-icon name="log-out-outline">logo</ion-icon>
        </div> */}
      </div>
    </div>
  );
}

export default Header;
