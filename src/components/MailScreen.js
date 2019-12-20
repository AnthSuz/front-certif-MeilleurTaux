import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

// ----- IMPORT DES CONTAINERS -----
import Bottom from "../container/Bottom";

// ----- IMPORT DES IMAGES -----
import Info from "../images/infos.png";
import Email from "../images/visuel-desktop-email.jpg";

const MailScreen = props => {
  Cookies.set("CurrentPage", "/MailScreen", { expires: 7 });
  const [verif, setVerif] = useState(false);
  const fetchData = async () => {
    try {
      const response = await axios.post(
        "https://backend-certif-meilleurtaux.herokuapp.com/createprojet",
        {
          type: props.type,
          state: props.etat,
          use: props.use,
          situation: props.situation,
          country: props.country,
          city: props.city,
          amountProperty: props.amountProperty,
          amountWorks: props.amountWorks,
          notary: props.notary,
          total: props.total,
          mail: props.mail
        }
      );
      props.setDossier(response.data);
    } catch (error) {}
  };

  let result = Math.ceil((6 / 8) * 100);
  return (
    <div className="body">
      <div className="wrapper">
        <h1>Vos Coordonnées</h1>
        <div className="desktopEmail">
          <p>
            Un Devis sera envoyé par mail avec un récapitulatif de votre
            demande.
          </p>
          <img src={Email} alt="visuel desktop email" />
        </div>
        <div className="boxGrey">
          <div className="inside">
            <div>
              <p>Adresse e-mail emprunteur *</p>
            </div>
            <div className="select">
              <img src={Info} alt="logo Info" />
              <input
                className="inputEmail"
                type="text"
                value={props.mail === undefined ? null : props.mail}
                onChange={event => {
                  props.setMail(event.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div className="pub">
          <label>
            <input
              type="checkbox"
              value={verif}
              onChange={event => {
                setVerif(event.target.checked);
              }}
            />
            J'accepte de recevoir par email des propositions de Meilleurtaux.
          </label>
        </div>
        <div className="step">
          <Link to="/AmountsScreen">
            <p
              className="previous"
              onClick={() => {
                Cookies.set("Mail", props.mail);
              }}
            >
              Précédent
            </p>
          </Link>
          <div className="greyBar">
            <div className="orangeBar" style={{ width: result + "%" }} />
            <div className="backRound" style={{ left: result + "%" }}>
              <div className="round">{result}%</div>
            </div>
          </div>
          {props.mail === "" ? (
            <p
              className="next"
              onClick={() => {
                alert("Merci de renseigner une adresse e-mail");
              }}
            >
              Valider
            </p>
          ) : verif === false ? (
            <button
              className="next"
              onClick={() => {
                alert(
                  "Merci d'accepter de recevoir les e-mails de Meilleurtaux"
                );
              }}
            >
              Valider
            </button>
          ) : (
            <Link to="FinishScreen">
              <button
                className="next"
                onClick={() => {
                  fetchData();
                  Cookies.remove("Use");
                  Cookies.remove("Type");
                  Cookies.remove("Situation");
                  Cookies.remove("Notary");
                  Cookies.remove("Location");
                  Cookies.remove("Etat");
                  Cookies.remove("AmountProperty");
                  Cookies.remove("AmountWorks");
                  Cookies.remove("Mail");
                  Cookies.remove("Total");
                  Cookies.remove("CurrentPage");
                }}
              >
                Valider
              </button>
            </Link>
          )}
        </div>
        <Bottom />
      </div>
    </div>
  );
};

export default MailScreen;
