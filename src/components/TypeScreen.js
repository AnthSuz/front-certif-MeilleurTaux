import React from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import Title from "../container/Title";
import InputRadio from "../container/InputRadio";
import Step from "../container/Step";
import Bottom from "../container/Bottom";

const TypeScreen = props => {
  Cookies.set("CurrentPage", "/TypeScreen", { expires: 7 });
  const onChangeMaison = event => {
    props.setType("Maison");
  };

  const onChangeAppartement = event => {
    props.setType("Appartement");
  };

  return (
    <>
      <div className="body">
        <div className="wrapper">
          <Title title="Type de bien" />
          <div className="radioInputScreen">
            <InputRadio
              name="Maison"
              onChange={onChangeMaison}
              checked={props.type === "Maison" ? true : false}
              css={props.type === "Maison" ? "inputRadioSelect" : "inputRadio"}
            />
            <InputRadio
              name="Appartement"
              onChange={onChangeAppartement}
              checked={props.type === "Appartement" ? true : false}
              css={
                props.type === "Appartement" ? "inputRadioSelect" : "inputRadio"
              }
            />
          </div>
          <Step
            next="/EtatScreen"
            state={props.type}
            nameCookie="Type"
            valueCookie={props.type}
            namePage="Type"
            setPages={props.setPages}
            pages={props.pages}
            step={1}
          />
          <Bottom />
        </div>
      </div>
      <Link to="/Admin">
        <p style={{ color: "#F5F5F5" }}>Admin Screen</p>
      </Link>
    </>
  );
};

export default TypeScreen;
