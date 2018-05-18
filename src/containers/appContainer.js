import { Container } from "flux/utils";
import AppView from "../views/appView";
import restoStore from "../data/store/restoStore";
import userStore from "../data/store/userStore";
import eventStore from "../data/store/eventStore";
import Actions from "../data/actions";

function getStores() {
  return [restoStore, userStore, eventStore];
}

function getState() {
  return {
    event: eventStore.getState(),
    restos: restoStore.getState(),
    users: userStore.getState(),
    onLoadRestos: Actions.loadRestos,
    onToggleFavorite: Actions.addToFavorite,
    onLoadUsers: Actions.loadUsers,
    onAddEvent: Actions.addEvent
  };
}
export default Container.createFunctional(AppView, getStores, getState);
