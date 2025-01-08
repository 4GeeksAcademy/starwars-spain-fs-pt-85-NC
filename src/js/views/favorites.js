import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/card"; // Asegúrate de importar Card
import "../../styles/favorites.css";  // Importación del archivo CSS

export const Favorites = () => {
  const { store } = useContext(Context);  // Obtener los favoritos desde el store

  return (
    <div className="container mt-4">
      <h1 className="text-center">Favorites</h1>
      <div className="row">
        {store.favorites.map((item, index) => (
          <div key={index} className="col-md-4">
            <Card 
              item={item}
              type={item.type}  // Asegúrate de pasar 'type' correctamente
            />
          </div>
        ))}
      </div>
    </div>
  );
};