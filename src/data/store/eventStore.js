import Immutable from "immutable";
import { ReduceStore } from "flux/utils";
import actionTypes from "./../actionTypes";
import dispatcher from "./../dispatcher";

class EventStore extends ReduceStore {
  constructor() {
    super(dispatcher);
  }

  getInitialState() {
    return Immutable.OrderedMap();
  }
  reduce(state, action) {
    switch (action.type) {
      case actionTypes.ADD_EVENT:
        const u = {};
      // const addEvent = action.map(event => u[(event.userId, event.restoId)]);
      default:
        return state;
    }
  }
}
export default new EventStore();
