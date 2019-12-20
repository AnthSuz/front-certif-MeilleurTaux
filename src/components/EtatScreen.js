import React from "react";
import Cookies from "js-cookie";

// ----- IMPORT DES CONTAINERS -----
import Title from "../container/Title";
import InputRadio from "../container/InputRadio";
import Step from "../container/Step";
import Bottom from "../container/Bottom";

const StateScreen = props => {
  Cookies.set("CurrentPage", "/EtatScreen", { expires: 7 });
  const onChangeAncien = () => {
    props.setEtat("Ancien");
  };

  const onChangeNeuf = () => {
    props.setEtat("Neuf");
  };
  return (
    <div className="body">
      <div className="wrapper">
        <Title title="Etat du bien" />
        <div className="radioInputScreen">
          <InputRadio
            name="Ancien"
            onChange={onChangeAncien}
            checked={props.etat === "Ancien" ? true : false}
            css={props.etat === "Ancien" ? "inputRadioSelect" : "inputRadio"}
          />
          <InputRadio
            name="Neuf"
            onChange={onChangeNeuf}
            checked={props.etat === "Neuf" ? true : false}
            css={props.etat === "Neuf" ? "inputRadioSelect" : "inputRadio"}
          />
        </div>
        <Step
          previous="/TypeScreen"
          next="/UseScreen"
          state={props.etat}
          nameCookie="Etat"
          valueCookie={props.etat}
          setPages={props.setPages}
          namePage="Etat"
          step={2}
        />
        <Bottom />
      </div>
    </div>
  );
};

export default StateScreen;
