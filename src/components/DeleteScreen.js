import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DeleteScreen = props => {
  let { id } = useParams();

  const fetchData = async () => {
    try {
      const response = await axios.post("http://localhost:4000/delete/" + id);
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
