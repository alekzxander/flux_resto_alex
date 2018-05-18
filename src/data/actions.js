import actionTypes from "./actionTypes";
import dispatcher from "./dispatcher";
import axios from "axios";

const Actions = {
  async loadUsers() {
    const users = await axios.get("/json/users.json");
    console.log("ook action");
    dispatcher.dispatch({
      type: actionTypes.LOAD_USERS,
      users: users.data
    });
  },
  async loadRestos() {
    const restos = await axios.get("/json/restos.json");
    dispatcher.dispatch({
      type: actionTypes.LOAD_RESTOS,
      restos: restos.data
    });
  },
  addToFavorite(restoId) {
    dispatcher.dispatch({
      type: actionTypes.TOGGLE_FAVORITE,
      restoId
    });
  },
  addEvent(restoId, userID) {
    dispatcher.dispatch({
      type: actionTypes.ADD_EVENT,
      restoId,
      userArray: [userID]
    });
  },
  addResto(restoId) {
    dispatcher.dispatch({
      type: actionTypes.ADD_RESTO,
      restoId
    });
  }
};

export default Actions;
