import React from "react";

import Logo from "../images/logo.jpg";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="wrapper">
          <img src={Logo} alt="Logo MeilleurTaux.com" className="Logo" />
          <p>Crédit immobilier : 5 mn pour obtenir le meilleur taux</p>
        </div>
      </div>
    </>
  );
};

export default Header;
