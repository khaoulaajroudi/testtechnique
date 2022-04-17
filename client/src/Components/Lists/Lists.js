import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deletecontact, getcontact } from "../../JS/Actions/Contact";
import "./Lists.css";
import Header from "../Header/Header";

function Lists() {
  const [search, setsearch] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getcontact());
  }, []);
  const contact = useSelector((state) => state.contactReducer.contactList);

  return (
    <div>
      <div className="boxlarge">
        <Header setsearch={setsearch} />
        <ul class="responsive-table">
          {contact
            ? contact
                .filter(
                  (cont) =>
                    cont?.name.toLowerCase().includes(search.toLowerCase())
                )
                .map((el) => (
                  <Link to="/details" state={{ contact: el }}>
                    {/* <Link to={`/test/${el._id}`}> */}
                    <li class="table-row">
                      <div class="col col-1" data-label="Job Id">
                        {el.status === "active" ? (
                          <img
                            src="cerclerouge.png"
                            alt="act"
                            className="imagecr"
                          />
                        ) : (
                          <img
                            src="cerclevert.png"
                            alt="act"
                            className="imagecr"
                          />
                        )}
                      </div>
                      <div class="col col-2" data-label="Customer Name">
                        {el.name} {el.lastname}
                      </div>
                      <div class="col col-3" data-label="Customer Name">
                        <div className="icont">
                          <ion-icon
                            name="trash-outline"
                            onClick={() =>
                              dispatch(deletecontact({ id: el._id }))
                            }
                          ></ion-icon>
                          <ion-icon name="create-outline"></ion-icon>
                        </div>
                      </div>
                    </li>{" "}
                  </Link>
                ))
            : null}
        </ul>
      </div>
    </div>
  );
}

export default Lists;
