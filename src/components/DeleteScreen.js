import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DeleteScreen = props => {
  let { id } = useParams();

  const fetchData = async () => {
    try {
      const response = await axios.post(
        "https://backend-certif-meilleurtaux.herokuapp.com/delete/" + id
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <p>Dossier Supprimé</p>
    </>
  );
};

export default DeleteScreen;
