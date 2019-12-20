import React from "react";
import Cookies from "js-cookie";
import Title from "../container/Title";
import InputRadio from "../container/InputRadio";
import Step from "../container/Step";
import Bottom from "../container/Bottom";

const UseScreen = props => {
  Cookies.set("CurrentPage", "/UseScreen", { expires: 7 });
  const onChangePrincipal = event => {
    props.setUse("Résidence Principale");
  };

  const onChangeSecond = event => {
    props.setUse("Résidence Secondaire");
  };
  const onChangeLoc = event => {
    props.setUse("Investissement Locatif");
  };
  return (
    <>
      <div className="body">
        <div className="wrapper">
          <Title title="Usage du bien" />
          <div className="radioInputScreen">
            <InputRadio
              name="Résidence principale"
              onChange={onChangePrincipal}
              checked={props.use === "Résidence Principale" ? true : false}
              css={
                props.use === "Résidence Principale"
                  ? "inputRadioSelect"
                  : "inputRadio"
              }
            />
            <InputRadio
              name="Résidence secondaire"
              onChange={onChangeSecond}
              checked={props.use === "Résidence Secondaire" ? true : false}
              css={
                props.use === "Résidence Secondaire"
                  ? "inputRadioSelect"
                  : "inputRadio"
              }
            />
            <InputRadio
              name="Investissement Locatif"
              onChange={onChangeLoc}
              checked={props.use === "Investissement Locatif" ? true : false}
              css={
                props.use === "Investissement Locatif"
                  ? "inputRadioSelect"
                  : "inputRadio"
              }
            />
          </div>
          <Step
            previous="/EtatScreen"
            next="/SituationScreen"
            state={props.use}
            nameCookie="Use"
            valueCookie={props.use}
            step={3}
          />
          <Bottom />
        </div>
      </div>
    </>
  );
};

export default UseScreen;
