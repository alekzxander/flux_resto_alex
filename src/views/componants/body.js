import React from "react";
import Index from "./index";
import SearchResto from "./searchBar";
import CreateEvent from "./createEvent";
import { BrowserRouter as Router, Route } from "react-router-dom";

function Main(props) {
  return (
    <div>
      <Router>
        <div className="container">
          <Route exact path="/" render={() => <Index {...props} />} />
          <Route
            exact
            path="/search-resto"
            render={() => <SearchResto {...props} />}
          />
          <Route
            exact
            path="/create-event"
            render={() => <CreateEvent {...props} />}
          />
        </div>
      </Router>
    </div>
  );
}
export default Main;
