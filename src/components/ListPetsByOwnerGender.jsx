import React from "react";
import { getPets } from "../services/petManagement";

const ListPetsByOwnerGender = (props) => {
  const { petData, petType, ownerGender, petDisplayField } = props;
  const pets = getPets(petData, ownerGender, petType, petDisplayField);
  return (
    <div>
      <h2>{ownerGender}</h2>

      {pets && pets.length > 0 ? (
        <ul>
          {pets.map((pet, index) => (
            <li key={pet + index}>{pet}</li>
          ))}
        </ul>
      ) : (
        <span>
          There is no {petType} for {ownerGender} owners
        </span>
      )}
    </div>
  );
};

export default ListPetsByOwnerGender;
