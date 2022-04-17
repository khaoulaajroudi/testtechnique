import React, { useEffect } from "react";
import Add from "../AddContact/Add";
import Header from "../Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { current, logout } from "../../JS/Actions/Users";
import Lists from "../Lists/Lists";
import "./ContactList.css";
import Details from "../Détails/Details";

function ComtactList() {
  const dispatch = useDispatch();
  // const isAuth = localStorage.getItem("token");
  // useEffect(() => {
  //   if (isAuth) {
  //     dispatch(current());
  //   }
  // }, []);
  const users = useSelector((state) => state.userReducer.user);
  return (
    <div className="listcont">
      <Header />
      <Add />
      <div className="grandbox">
        <div className="boxleft">
          <Lists />
        </div>
        <div className="boxreight"></div>
      </div>
    </div>
  );
}

export default ComtactList;
