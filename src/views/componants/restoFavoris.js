import React, { Component } from "react";

function RestoFavoris(props) {
  return props.restos.map(resto => {
    if (resto.favoris)
      return (
        <ul>
          <li key={resto.id} className="resto">
            <div className="row">
              <div className="col-md-4">
                <img src={resto.image} alt="" className="img-fluid" />
              </div>
              <div className="col-md-6">
                <h5>{resto.name}</h5>
                <p>{resto.type}</p>
                <p>
                  Fourchette de prix : {resto.minPrice}/{resto.maxPrice}€
                </p>
              </div>
              <div className="col-md-2">
                <input
                  className="toggle"
                  type="checkbox"
                  checked={resto.favoris}
                  onChange={() => props.onToggleFavorite(resto.id)}
                />
              </div>
            </div>
          </li>
        </ul>
      );
  });
}
export default RestoFavoris;
