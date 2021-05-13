import React from "react";

//import ModalStructure from './components/widgets/modal';

import GetName from './components/UserInteraction/getName';
import ButtonModal from "./components/UserInteraction/buttonInsideModal";

function App() {
  return (
    <React.Fragment>
  <GetName />
  <ButtonModal/>
  </React.Fragment>

  );
}

export default App;
