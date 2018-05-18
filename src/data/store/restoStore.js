import Immutable from "immutable";
import { ReduceStore } from "flux/utils";
import actionTypes from "./../actionTypes";
import dispatcher from "./../dispatcher";

class RestoStore extends ReduceStore {
  constructor() {
    super(dispatcher);
  }

  getInitialState() {
    return Immutable.OrderedMap();
  }
  reduce(state, action) {
    switch (action.type) {
      case actionTypes.LOAD_RESTOS:
        // AFFICHAGE DES RESTAURANTS
        return action.restos;

      case actionTypes.TOGGLE_FAVORITE:
        // AJOUTER/SUPPRIMER DES FAVORIS
        return state.map(resto => {
          if (action.restoId === resto.id) {
            !resto.favoris ? (resto.favoris = true) : (resto.favoris = false);
          }
          return resto;
        });

      default:
        return state;
    }
  }
}
export default new RestoStore();
