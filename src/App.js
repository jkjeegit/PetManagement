import React from "react";
import PetManagement from "./components/PetManagement";

function App() {
  const ownerGenders = ["Male", "Female"];
  return (
    <div>
      <PetManagement
        ownerGenders={ownerGenders}
        petType="Cat"
        petDisplayField="name"
      />
    </div>
  );
}

export default App;
