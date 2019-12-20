import React from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

// ----- IMPORT DES CONTAINERS -----
import Bottom from "../container/Bottom";

// ----- IMPORT DES IMAGES -----
import Info from "../images/infos.png";

const AmountsScreen = props => {
  Cookies.set("CurrentPage", "/AmountsScreen", { expires: 7 });
  let notaryPrice = 0;

  if (props.etat === "Neuf") {
    notaryPrice = Math.round(props.amountProperty * (1.8 / 100));
  } else {
    notaryPrice = Math.round(props.amountProperty * (7.38 / 100));
  }

  let total = 0;

  if (props.amountWorks === undefined) {
    total = parseFloat(props.amountProperty) + parseFloat(notaryPrice);
  } else {
    total =
      parseFloat(props.amountProperty) +
      parseFloat(props.amountWorks) +
      parseFloat(notaryPrice);
  }

  console.log("total", total);

  let result = Math.ceil((6 / 8) * 100);
  return (
    <div className="body">
      <div className="wrapper">
        <h1>Définissons le montant de votre projet</h1>
        <div className="formAmountsScreen">
          <div className="boxGrey">
            <div className="inside">
              <div>
                <p>Montant éstimé de votre acquisition*</p>
              </div>
              <div className="select">
                <img src={Info} alt="logo Info" />
                <input
                  className="inputAmounts"
                  type="number"
                  placeholder="0"
                  value={props.amountProperty}
                  onChange={event => {
                    props.setAmountProperty(event.target.value);
                  }}
                />
                <p>€</p>
              </div>
            </div>
          </div>
          <div className="boxWhite">
            <div className="inside">
              <div>
                <p>Montant estimé des travaux</p>
              </div>
              <div className="select">
                <img src={Info} alt="logo info" />
                <input
                  className="inputAmounts"
                  type="number"
                  placeholder="0"
                  value={props.amountWorks}
                  onChange={event => {
                    props.setAmountWorks(event.target.value);
                  }}
                />
                <p>€</p>
              </div>
            </div>
          </div>
          <div className="boxGrey">
            <div className="inside">
              <div>
                <p>Frais de notaire*</p>
              </div>
              <div className="select">
                <img src={Info} alt="logo Info" />
                <input
                  className="inputAmounts"
                  type="number"
                  placeholder="0"
                  value={notaryPrice}
                  onChange={() => {
                    props.setNotary(notaryPrice);
                  }}
                />
                <p>€</p>
              </div>
            </div>
          </div>
          <div className="boxWhite">
            <div className="inside">
              <div>
                <p>Budget total estimé du projet*</p>
              </div>
              <div className="select">
                <img src={Info} alt="logo info" />
                <input
                  className="inputAmountsGrey"
                  type="number"
                  placeholder="0"
                  value={total}
                  onChange={() => {
                    props.setTotal(parseFloat(total));
                  }}
                />
                <p>€</p>
              </div>
            </div>
          </div>
        </div>
        <div className="step">
          <Link to="/LocationScreen">
            <p className="previous">Précédent</p>
          </Link>
          <div className="greyBar">
            <div className="orangeBar" style={{ width: result + "%" }} />
            <div className="backRound" style={{ left: result + "%" }}>
              <div className="round">{result}%</div>
            </div>
          </div>
          {props.amountProperty !== undefined ? (
            <Link to="/MailScreen">
              <button
                className="next"
                onClick={() => {
                  props.setAmountWorks(props.amountWorks);
                  props.setNotary(notaryPrice);
                  props.setTotal(total);
                  Cookies.set("AmountProperty", props.amountProperty);
                  Cookies.set("AmountWorks", props.amountWorks);
                  Cookies.set("Notary", notaryPrice);
                  Cookies.set("Total", total);
                }}
              >
                Suivant
              </button>
            </Link>
          ) : (
            <button
              className="next"
              onClick={() => {
                alert(
                  "Merci d'indiquer le Montant éstimé de votre acquisition"
                );
              }}
            >
              Suivant
            </button>
          )}
        </div>
        <Bottom />
      </div>
    </div>
  );
};

export default AmountsScreen;
