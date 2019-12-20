import React from "react";

import Info from "../images/infos.png";

const Title = props => {
  return (
    <div className="title">
      <p>{props.title}</p>
      <img src={Info} alt="Logo Info" />
    </div>
  );
};

export default Title;
