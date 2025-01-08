import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/card.css";

export const Card = ({ item, type }) => {
  const getImageUrl = () => {
    // Usar una imagen de ejemplo por ahora. Puedes ajustar esto para usar URLs reales.
    return "https://via.placeholder.com/150";
  };

  return (
    <div className="card mx-2" style={{ minWidth: "18rem" }}>
      <img src={getImageUrl()} className="card-img-top" alt={item.name} />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">
          {type === "character" && (
            <>
              Gender: {item.gender || "Unknown"} <br />
              Hair Color: {item.hair_color || "Unknown"} <br />
              Eye Color: {item.eye_color || "Unknown"}
            </>
          )}
          {type === "planet" && (
            <>
              Population: {item.population || "Unknown"} <br />
              Terrain: {item.terrain || "Unknown"}
            </>
          )}
          {type === "vehicle" && (
            <>
              Model: {item.model || "Unknown"} <br />
              Manufacturer: {item.manufacturer || "Unknown"}
            </>
          )}
        </p>
        <Link to={`/details/${type}/${item.uid}`} className="btn btn-primary">
          Learn More
        </Link>
      </div>
    </div>
  );
};

Card.propTypes = {
  item: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
};