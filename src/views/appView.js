import React from "react";
import "../App.css";
import Header from "./componants/header";
import Main from "./componants/body";
function appView(props) {
  return (
    <div>
      <Header />
      <Main {...props} />
    </div>
  );
}
export default appView;
