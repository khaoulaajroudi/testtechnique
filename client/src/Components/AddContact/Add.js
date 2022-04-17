import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addcontact } from "../../JS/Actions/Contact";
import "./Add.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Add() {
  
  const [add, setadd] = useState(0);
  const dispatch = useDispatch();
  const [NewContact, setNewContact] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    status: "",
    adress: "",
  });
  const handleaddcontact = () => {
    dispatch(addcontact(NewContact));
    toast("new course add");

    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };
  return (
    <div>
      <div class="principal">
        <div class="contcentre">
          <div class="conttop">
            <div class="conttitu">
              <h3>Add new Contact</h3>
            </div>
            <div class="conttituadd">
              <a href="#" onClick={() => setadd(1)}>
                +
              </a>
            </div>
          </div>
          {add == 1 ? (
            <>
              <div class="contcreatnew">
                <table class="table">
                  <tr>
                    <td>
                      <input
                        type="text"
                        class="input_title_desc"
                        placeholder="Name"
                        onChange={(e) =>
                          setNewContact({ ...NewContact, name: e.target.value })
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        class="input_title_desc"
                        placeholder="Last Name"
                        onChange={(e) =>
                          setNewContact({
                            ...NewContact,
                            lastname: e.target.value,
                          })
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <select
                      name=""
                      id="status"
                      className="selected"
                      onChange={(e) =>
                        setNewContact({ ...NewContact, status: e.target.value })
                      }
                    >
                      <option value="" disabled selected hidden>
                        status
                      </option>
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </tr>
                  <tr>
                    <td colspan="3">
                      <input
                        type="text"
                        class="input_description"
                        required
                        placeholder="Email"
                        onChange={(e) =>
                          setNewContact({
                            ...NewContact,
                            email: e.target.value,
                          })
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type="text"
                        class="input_title_desc"
                        placeholder="Phone Number"
                        onChange={(e) =>
                          setNewContact({
                            ...NewContact,
                            phone: e.target.value,
                          })
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <td colspan="3">
                      <input
                        type="text"
                        class="input_description"
                        required
                        placeholder="adresse"
                        onChange={(e) =>
                          setNewContact({
                            ...NewContact,
                            adress: e.target.value,
                          })
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <td colspan="3">
                      <button class="btn_add_fin" onClick={handleaddcontact}>
                        ADD
                      </button>
                    </td>
                  </tr>
                </table>
              </div>
            </>
          ) : null}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Add;
