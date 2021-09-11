import React from "react";
import AppSidebar from "./components/AppSidebar";

function App() {
  return (
    <React.Fragment>
      <AppSidebar className="d-flex flex-column p-3 bg-dark" />
      <div className="p-3">
        {/* Children are going to go here */}
      </div>
    </React.Fragment>
  );
}

export default App;
