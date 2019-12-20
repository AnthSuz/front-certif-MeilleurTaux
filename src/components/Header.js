import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.jpg";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="wrapper">
          <a href="https://fake-meilleurtaux.netlify.com/">
            <img src={Logo} alt="Logo MeilleurTaux.com" className="Logo" />
          </a>
          <p>Crédit immobilier : 5 mn pour obtenir le meilleur taux</p>
        </div>
      </div>
    </>
  );
};

export default Header;
