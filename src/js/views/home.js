import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Card } from "../component/card"; // Lo crearemos más adelante.

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.loadStarWarsData(); // Llamar a la acción para cargar datos de la API.
  }, []);

  return (
    <div className="container mt-5">
      <h2>Characters</h2>
      <div className="d-flex overflow-auto">
        {store.characters.map((character, index) => (
          <Card key={index} item={character} type="character" />
        ))}
      </div>

      <h2>Planets</h2>
      <div className="d-flex overflow-auto">
        {store.planets.map((planet, index) => (
          <Card key={index} item={planet} type="planet" />
        ))}
      </div>

      <h2>Vehicles</h2>
      <div className="d-flex overflow-auto">
        {store.vehicles.map((vehicle, index) => (
          <Card key={index} item={vehicle} type="vehicle" />
        ))}
      </div>
    </div>
  );
};