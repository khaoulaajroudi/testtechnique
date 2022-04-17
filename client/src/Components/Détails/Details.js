import React, { useEffect, useState } from "react";
import "./Details.css";
import { useLocation, useNavigate, useParams } from "react-router";
import axios from "axios";
import Header from "../Header/Header";
import Add from "../AddContact/Add";
import Lists from "../Lists/Lists";
import { useDispatch, useSelector } from "react-redux";
import { deletecontact, getcontact } from "../../JS/Actions/Contact";
import { editcontact } from "../../JS/Actions/Contact";

function Details() {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { contact } = location.state;
  const [editcont, seteditcont] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getcontact());
  }, []);
  const contacts = useSelector((state) => state.contactReducer.contactList);
  return (
    <div>
      <div className="listcont">
        <Header />
        <Add />
        <div className="grandbox">
          <div className="boxleft">
            <div className="boxlarge">
              <Header />
              <ul class="responsive-table">
                <li class="table-row">
                  <div class="col col-1" data-label="Job Id">
                    {contact.status === "active" ? (
                      <img
                        src="cerclerouge.png"
                        alt="act"
                        className="imagecr"
                      />
                    ) : (
                      <img src="cerclevert.png" alt="act" className="imagecr" />
                    )}
                  </div>
                  <div class="col col-2" data-label="Customer Name">
                    {contact.name} {contact.lastname}
                  </div>
                  <div class="col col-3" data-label="Customer Name">
                    <div className="icont">
                      <ion-icon
                        name="trash-outline"
                        onClick={() =>
                          dispatch(deletecontact({ id: contact._id }))
                        }
                      ></ion-icon>
                      <ion-icon name="create-outline"></ion-icon>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="boxreight">
            <div class="mainscreen">
              <div class="card">
                <div class="rightside">
                  <form action="">
                    <h2>Contact Information</h2>
                    <p>Contact Name</p>
                    <input
                      type="text"
                      class="inputbox"
                      name="name"
                      placeholder={contact.name}
                      onChange={(e) => {
                        seteditcont({
                          ...editcontact,
                          name: e.target.value,
                        });
                      }}
                    />
                    <p>Phone Number</p>
                    <input
                      type="text"
                      class="inputbox"
                      name="card_number"
                      id="card_number"
                      placeholder={contact.phone}
                      onChange={(e) => {
                        seteditcont({
                          ...editcont,
                          phone: e.target.value,
                        });
                      }}
                    />

                    <p>Status</p>
                    <input
                      type="text"
                      class="inputbox"
                      name="card_number"
                      id="card_number"
                      placeholder={contact.status}
                      onChange={(e) => {
                        seteditcont({
                          ...editcont,
                          status: e.target.value,
                        });
                      }}
                    />
                    <p>Email</p>
                    <input
                      type="text"
                      class="inputbox"
                      name="card_number"
                      id="card_number"
                      placeholder={contact.email}
                      onChange={(e) => {
                        seteditcont({
                          ...editcont,
                          email: e.target.value,
                        });
                      }}
                    />
                    <p>Adress</p>
                    <input
                      type="text"
                      class="inputbox"
                      name="card_number"
                      id="card_number"
                      placeholder={contact.adress}
                      onChange={(e) => {
                        seteditcont({
                          ...editcont,
                          adress: e.target.value,
                        });
                      }}
                    />

                    <div class="expcvv"></div>

                    <button
                      type="submit"
                      class="button"
                      onClick={() => {
                        dispatch(
                          editcontact({ id: contact._id, contact: editcont })
                        );
                        navigate("/lists");
                      }}
                    >
                      Update
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
