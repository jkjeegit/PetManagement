export function getOwnersByGender(petData, ownerGender) {
  if (!petData) return null;
  const owners = petData.filter(
    (owner) => owner.gender.toLowerCase() === ownerGender.toLowerCase()
  );
  return owners;
}

export function getPetsByType(petData, ownerGender, petType) {
  if (!petData) return null;
  const owners = getOwnersByGender(petData, ownerGender);
  let petsByType = [];
  owners.forEach((owner) => {
    if (owner.pets) {
      petsByType.push(
        owner.pets.filter(
          (pet) => pet.type.toLowerCase() === petType.toLowerCase()
        )
      );
    }
  });
  petsByType = petsByType.reduce((a, b) => a.concat(b), []);
  return petsByType;
}

export function getPets(petData, ownerGender, petType, petDisplayField) {
  if (!petData) return null;
  const petsByType = getPetsByType(petData, ownerGender, petType);
  return petsByType.map((pet) => pet[petDisplayField]).sort();
}
