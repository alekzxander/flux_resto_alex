import React from "react";
import { Link } from "react-router-dom";

class SearchResto extends React.Component {
  constructor(props) {
    super(props);
    this.state = { regex: "" };
  }
  componentDidMount() {
    this.props.onLoadRestos();
  }
  handleChange(e) {
    this.setState({
      regex: e.target.value
    });
  }
  render() {
    return (
      <div>
        <Link className="btn btn-primary btn-lg" to="/">
          Retour a l'acceuil
        </Link>
        <h3 className="text-center">Rechercher un restaurant</h3>
        <input
          type="text"
          className="form-control"
          onChange={this.handleChange.bind(this)}
          placeholder="Tapez votre rechercher..."
        />
        {this.props.restos.map(resto => {
          if (resto.name.match(new RegExp(this.state.regex, "gi")))
            return (
              <ul>
                <li key={resto.id} className="resto">
                  <div className="row">
                    <div className="col-md-4">
                      <img src={resto.image} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-8">
                      <h5>{resto.name}</h5>
                      <p>{resto.type}</p>
                      <p>
                        Fourchette de prix : {resto.minPrice}/{resto.maxPrice}€
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            );
        })}
      </div>
    );
  }
}

export default SearchResto;
