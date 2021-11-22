import React from "react";
import "./NotFound.css";
// import { useHistory } from "react-router-dom";

const NotFound = () => {
  //   let history = useHistory();

  return (
    <div className="NotFound">
      <img
        src="https://www.klaviyo.com/wp-content/uploads/2017/06/image4-1.png "
        alt=""
        width="700"
      />
      {/* <button onClick={() => history.goBack()}>Back</button> */}
      {/* <button onClick={() => props.history.push("/men")}>Men</button>
      <button onClick={() => props.history.push("/women")}>Women</button>
      <button onClick={() => props.history.push("/kids")}>Kids</button> */}
    </div>
  );
};

export default NotFound;
