import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";

// ----- IMPORT DES CONTAINER -----
import Step from "../container/Step";
import Bottom from "../container/Bottom";

// ---- IMPORT DES IMAGES -----
import Info from "../images/infos.png";

const LocationScreen = props => {
  Cookies.set("CurrentPage", "/LocationScreen", { expires: 7 });
  const [zip, setZip] = useState(Cookies.get("Location"));
  const [zipList, setZipList] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://vicopo.selfbuild.fr/cherche/" + zip
      );
      setZipList(response.data);
    } catch (error) {
      console.log("error message", error.message);
    }
  };

  useEffect(() => {
    if (zip !== "") {
      fetchData();
    }
  }, [zip]);

  const arrayCity = [];
  if (zipList.cities !== undefined) {
    for (let i = 0; i < zipList.cities.length; i++) {
      const id = zipList.cities[i];
      let city = id.city;
      let code = id.code;
      arrayCity.push(city + " (" + code + ")");
    }
  }

  const result = [];
  for (let j = 0; j < arrayCity.length; j++) {
    result.push(
      <li
        key={j}
        onClick={() => {
          setZip(arrayCity[j]);
          props.setCity(arrayCity[j]);
        }}
      >
        {arrayCity[j]}
      </li>
    );
  }

  return (
    <div className="body">
      <div className="wrapper">
        <h1>Où se situe le bien à financer ?</h1>
        <div className="boxGrey">
          <div className="inside">
            <div>
              <p>Dans quel pays se situe votre projet ?*</p>
            </div>
            <div className="select">
              <img src={Info} alt="logo Info" />
              <select className="boxSelect">
                <option value="France">France</option>
              </select>
            </div>
          </div>
        </div>
        <div className="boxWhite">
          <div className="inside">
            <div>
              <p>Ville ou code postal *</p>
            </div>
            <div className="select">
              <img src={Info} alt="logo info" />
              <div>
                <input
                  className="inputSelect"
                  value={zip}
                  onChange={event => {
                    setZip(event.target.value);
                    props.setCity(event.target.value);
                  }}
                />
                <ul>{result}</ul>
              </div>
            </div>
          </div>
        </div>
        <div className="infoZip">
          <p>
            La connaissance du code postal du bien permettra de calculer les
            frais de notaire selon les conditions en vigueur dans le département
            concerné.
          </p>
          <p>
            Si vous êtes en recherche de bien sur plusieurs communes, indiquez
            une commune ciblée.
          </p>
        </div>
        <Step
          previous="/SituationScreen"
          next="/AmountsScreen"
          state={props.city}
          nameCookie="Location"
          valueCookie={zip}
          step={5}
        />
        <Bottom />
      </div>
    </div>
  );
};

export default LocationScreen;
