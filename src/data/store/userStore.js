import Immutable from "immutable";
import { ReduceStore } from "flux/utils";
import actionTypes from "./../actionTypes";
import dispatcher from "./../dispatcher";

class UserStore extends ReduceStore {
  constructor() {
    super(dispatcher);
  }

  getInitialState() {
    return Immutable.OrderedMap();
  }
  reduce(state, action) {
    switch (action.type) {
      case actionTypes.LOAD_USERS:
        console.log(action.users);
        return action.users;

      default:
        return state;
    }
  }
}
export default new UserStore();
