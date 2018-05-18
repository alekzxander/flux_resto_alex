import React from "react";
import { Link } from "react-router-dom";
class CreateEvent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount = () => {
    this.props.onLoadRestos();
    this.props.onLoadUsers();
    this.props.onAddEvent();
  };

  render() {
    return (
      <div>
        <Link className="btn btn-primary btn-lg" to="/">
          Retour à l'acceuil
        </Link>
        <div className="form-group">
          <label htmlFor="resto">Choisissez un restaurant</label>
          <select name="restos" className="form-control" id="resto">
            {this.props.restos.map(resto => {
              return (
                <option key={resto.id} value="">
                  {resto.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          <fieldset>
            <legend>Veuillez sélectionner les participants :</legend>
            {this.props.users.map(user => {
              return (
                <div>
                  <form>
                    <label htmlFor={user.id}>{user.name}</label>;
                    <input
                      type="checkbox"
                      id={user.id}
                      name="interest"
                      value="coding"
                      className="form-control"
                    />
                  </form>
                </div>
              );
            })}
          </fieldset>
        </div>
      </div>
    );
  }
}

export default CreateEvent;
