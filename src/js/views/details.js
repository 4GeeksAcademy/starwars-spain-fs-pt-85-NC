import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Details = () => {
  const { store, actions } = useContext(Context);
  const { type, id } = useParams(); // Obtiene el tipo (character, planet, vehicle) y el ID.

  useEffect(() => {
    actions.loadDetails(type, id); // Cargar detalles específicos.
  }, [type, id]);

  const details = store.details;

  return details ? (
    <div className="container mt-5">
      <h1>{details.name}</h1>
      <p>{details.description}</p>
      {/* Añadir más información según el tipo */}
      <hr />
      <p>More details coming soon...</p>
    </div>
  ) : (
    <div className="text-center mt-5">Loading...</div>
  );
};