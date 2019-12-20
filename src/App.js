import React, { useState } from "react";
import "./App.css";
import Cookies from "js-cookie";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

// --- IMPORT DES COMPONENTS ---

import Header from "./components/Header";
import TypeScreen from "./components/TypeScreen.js";
import EtatScreen from "./components/EtatScreen.js";
import UseScreen from "./components/UseScreen.js";
import SituationScreen from "./components/SituationScreen.js";
import LocationScreen from "./components/LocationScreen.js";
import AmountsScreen from "./components/AmountsScreen.js";
import MailScreen from "./components/MailScreen.js";
import FinishScreen from "./components/FinishScreen.js";
import AdminScreen from "./components/AdminScreen.js";
import AdminIdScreen from "./components/AdminIdScreen.js";

function App() {
  const [type, setType] = useState(Cookies.get("Type"));
  const [etat, setEtat] = useState(Cookies.get("Etat"));
  const [use, setUse] = useState(Cookies.get("Use"));
  const [situation, setSituation] = useState(Cookies.get("Situation"));
  // ---
  const [country, setCountry] = useState("France");
  const [city, setCity] = useState(Cookies.get("Location"));
  // ---
  const [amountProperty, setAmountProperty] = useState(
    Cookies.get("AmountProperty")
  );
  const [amountWorks, setAmountWorks] = useState(Cookies.get("AmountWorks"));
  const [notary, setNotary] = useState(Cookies.get("Notary"));
  const [total, setTotal] = useState(Cookies.get("Total"));
  // ---
  const [mail, setMail] = useState(Cookies.get("Mail"));
  // ---
  const [dossier, setDossier] = useState("");
  // ---
  const [pages, setPages] = useState(Cookies.get("CurrentPage"));

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact={true} path="/">
          <Redirect to={pages === undefined ? "/TypeScreen" : pages} />
        </Route>
        <Route path="/TypeScreen">
          <TypeScreen
            type={type}
            setType={setType}
            pages={pages}
            setPages={setPages}
          />
        </Route>
        <Route path="/EtatScreen">
          <EtatScreen etat={etat} setEtat={setEtat} setPages={setPages} />
        </Route>
        <Route path="/UseScreen">
          <UseScreen use={use} setUse={setUse} />
        </Route>
        <Route path="/SituationScreen">
          <SituationScreen situation={situation} setSituation={setSituation} />
        </Route>
        <Route path="/LocationScreen">
          <LocationScreen
            country={country}
            setCountry={setCountry}
            city={city}
            setCity={setCity}
          />
        </Route>
        <Route path="/AmountsScreen">
          <AmountsScreen
            etat={etat}
            amountProperty={amountProperty}
            setAmountProperty={setAmountProperty}
            amountWorks={amountWorks}
            setAmountWorks={setAmountWorks}
            notary={notary}
            setNotary={setNotary}
            total={total}
            setTotal={setTotal}
          />
        </Route>
        <Route path="/MailScreen">
          <MailScreen
            mail={mail}
            setMail={setMail}
            type={type}
            etat={etat}
            use={use}
            situation={situation}
            country={country}
            city={city}
            amountProperty={amountProperty}
            amountWorks={amountWorks}
            notary={notary}
            total={total}
            setDossier={setDossier}
          />
        </Route>
        <Route path="/FinishScreen">
          <FinishScreen dossier={dossier} />
        </Route>
        <Route path="/Admin">
          <AdminScreen />
        </Route>
        <Route path="/search/:id">
          <AdminIdScreen />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
