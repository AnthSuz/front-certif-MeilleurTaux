import React from "react";
import Cookies from "js-cookie";

// ----- IMPORT DES CONTAINERS -----
import Title from "../container/Title";
import InputRadio from "../container/InputRadio";
import Step from "../container/Step";
import Bottom from "../container/Bottom";

const SituationScreen = props => {
  Cookies.set("CurrentPage", "/SituationScreen", { expires: 7 });
  const onChangeLocataire = () => {
    props.setSituation("Locataire");
  };

  const onChangeProprietaire = () => {
    props.setSituation("Propriétaire");
  };

  const onChangeFonction = () => {
    props.setSituation("Bénéficiaire d'un logement de fonction");
  };

  const onChangeFree = () => {
    props.setSituation("Hébégé à titre gratuit");
  };
  return (
    <div className="body">
      <div className="wrapper">
        <Title title="Votre situation actuelle" />
        <div className="radioInputScreen">
          <InputRadio
            name="Locataire"
            onChange={onChangeLocataire}
            checked={props.situation === "Locataire" ? true : false}
            css={
              props.situation === "Locataire"
                ? "inputRadioSelect"
                : "inputRadio"
            }
          />
          <InputRadio
            name="Propriétaire"
            onChange={onChangeProprietaire}
            checked={props.situation === "Propriétaire" ? true : false}
            css={
              props.situation === "Propriétaire"
                ? "inputRadioSelect"
                : "inputRadio"
            }
          />
          <InputRadio
            name="Bénéficiaire d'un logement de fonction"
            onChange={onChangeFonction}
            checked={
              props.situation === "Bénéficiaire d'un logement de fonction"
                ? true
                : false
            }
            css={
              props.situation === "Bénéficiaire d'un logement de fonction"
                ? "inputRadioSelect"
                : "inputRadio"
            }
          />
          <InputRadio
            name="Hébégé à titre gratuit"
            onChange={onChangeFree}
            checked={
              props.situation === "Hébégé à titre gratuit" ? true : false
            }
            css={
              props.situation === "Hébégé à titre gratuit"
                ? "inputRadioSelect"
                : "inputRadio"
            }
          />
        </div>
        <Step
          previous="/UseScreen"
          next="/LocationScreen"
          state={props.situation}
          nameCookie="Situation"
          valueCookie={props.situation}
          step={3}
        />
        <Bottom />
      </div>
    </div>
  );
};

export default SituationScreen;
