import React from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const Step = props => {
  let result = Math.ceil((props.step / 8) * 100);
  return (
    <div className="step">
      <Link to={props.previous}>
        <p className="previous">Précédent</p>
      </Link>
      <div className="greyBar">
        <div className="orangeBar" style={{ width: result + "%" }} />
        <div className="backRound" style={{ left: result + "%" }}>
          <div className="round">{result}%</div>
        </div>
      </div>
      {props.state !== undefined ? (
        <Link to={props.next}>
          <p
            className="next"
            onClick={() => {
              Cookies.set(props.nameCookie, props.valueCookie, { expires: 7 });
            }}
          >
            Suivant
          </p>
        </Link>
      ) : (
        <p
          className="next"
          onClick={() => {
            alert("Merci se séléctionner un choix");
          }}
        >
          Suivant
        </p>
      )}
    </div>
  );
};

export default Step;
