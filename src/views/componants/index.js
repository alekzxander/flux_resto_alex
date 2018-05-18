import React from "react";
import { Link } from "react-router-dom";
import RestoFavoris from "./restoFavoris";
class Index extends React.Component {
  componentDidMount() {
    this.props.onLoadRestos();
  }
  render() {
    return (
      <div className="index">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="event">
              <h3>Crée un evenement</h3>
              <p>
                <Link className="btn btn-primary btn-lg" to="/create-event">
                  Creer un evenement
                </Link>
              </p>
            </div>
            <div className="event">
              <h3>Consulter la liste des restaurants</h3>
              <p>
                <Link className="btn btn-primary btn-lg" to="/search-resto">
                  Rechercher un restaurant
                </Link>
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <h3>Mes restaurants favoris</h3>
            <div className="favorite-list">
              <RestoFavoris {...this.props} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
