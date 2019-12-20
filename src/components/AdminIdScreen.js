import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

const AdminIdScreen = props => {
  let { id } = useParams();
  const [dossById, setDossById] = useState({});

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://backend-certif-meilleurtaux.herokuapp.com/search/" + id
      );
      setDossById(response.data);
      console.log("HERE", response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="body">
      <div className="wrapper">
        {/* <Link to="/Admin">
          <button>
            <p>Retour</p>
          </button>
        </Link> */}
        <p>Dossier numéro : {dossById.total}</p>
        <p>Type de bien : {dossById.type}</p>
        <p>Etat du bien : {dossById.state}</p>
        <p>Usage du bien : {dossById.use}</p>
        <p>Situation actuelle : {dossById.situation}</p>
        <p>Pays : {dossById.country}</p>
        <p>Ville/Code Postal: {dossById.city}</p>
        <p>Montant estimé de votre acquisition : {dossById.amountProperty}</p>
        <p>Montant estimé des travaux : {dossById.amountWorks}</p>
        <p>Frais de notaire : {dossById.notary}</p>
        <p>Total : {dossById.total}</p>
        <p>Adresse e-mail : {dossById.mail}</p>
      </div>
    </div>
  );
};

export default AdminIdScreen;
