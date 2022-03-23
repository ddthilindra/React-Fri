import React from "react";
import moment from "moment";
import "./NameList";

const Namelistitem = (props) => {
  return (
    <li className="list-group-item">
      <div className="row align-items-center">
        <div className="col-2">
          <p>
            <img src={props.avatar} alt={props.name} className="rounded-circle border border-dark"/>
          </p>
        </div>
        <div className="col-10">
          <h4>{props.name}</h4>
          <p>{props.city} |  {props.email}</p>
          <p>{moment(props.dob).format("DD-MM-YYYY")}</p>
        </div>
      </div>

      {/* <p>DOB: {new Intl.DateTimeFormat('en-GB').format(new Date(props.dob))}</p> */}
    </li>
  );
};

export default Namelistitem;
