import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const AdminScreen = props => {
  const [doss, setDoss] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [nbDoss, setNbDoss] = useState(0);
  const [password, setPassword] = useState(Cookies.get("Password"));
  const [watchPassword, setWatchPassword] = useState(false);
  console.log("password", password);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/search");
      setDoss(response.data);
      setNbDoss(response.data.length);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {isLoading === false ? (
        <>
          <input
            className="inputAccesAdmin "
            type={watchPassword === false ? "password" : "text"}
            value={password}
            onChange={event => {
              setPassword(event.target.value);
            }}
          />

          <button
            onClick={() => {
              setIsLoading(password === "tothemoon" && true);
              Cookies.set("password", password, { expires: 7 });
            }}
          >
            GO !
          </button>
          <label>
            <input
              type="checkbox"
              value={watchPassword}
              onChange={event => {
                setWatchPassword(event.target.checked);
              }}
            />
            Afficher le mot de passe
          </label>
        </>
      ) : (
        <div className="body">
          <div className="wrapper">
            <p>Bonjour Admin Screen</p>
            <table>
              <tr className="topArray">
                <td>Code Postal/Ville</td>
                <td>Adresse e-mail</td>
                <td>Type de bien</td>
                <td>Montant total</td>
                <td>Test</td>
              </tr>
            </table>
            {doss.map((dossierImmo, index) => {
              return (
                <div className="array">
                  {/* //{" "}
                  <p>
                    // Bonjour {dossierImmo.city} - {dossierImmo.mail} - //{" "}
                    {dossierImmo.type} - {dossierImmo.total} € //{" "}
                  </p> */}
                  <Link to={"/search/" + dossierImmo._id}>
                    <table>
                      <tr>
                        <td>{dossierImmo.city}</td>
                        <td>{dossierImmo.mail}</td>
                        <td>{dossierImmo.type}</td>
                        <td>{dossierImmo.total} €</td>
                      </tr>
                    </table>
                  </Link>
                  <table className="deleteDoss">
                    <Link to={"/delete/" + dossierImmo._id}>
                      <tr>
                        <td>❌</td>
                      </tr>
                    </Link>
                  </table>
                </div>
              );
            })}
            <p>Nombre de dossier en cours : {nbDoss}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminScreen;
