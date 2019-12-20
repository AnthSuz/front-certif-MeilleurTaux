import React from "react";

const FinishScreen = props => {
  return (
    <div className="body">
      <div className="wrapper">
        <h1>Et voilà, le formulaire est terminé !</h1>
        <div className="dossier">
          <p>Votre numéro de dossier est le :</p>
          <p className="numberDossier">{props.dossier}</p>
        </div>
        <p className="legalMentionFinish">Mentions Légales</p>
      </div>
    </div>
  );
};
export default FinishScreen;
