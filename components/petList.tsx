import { Pet } from "../types/pet";
import PetComponent from "./pet";

type PetListComponentProps = {
  pets: Pet[];
};

const PetListComponent = ({ pets }: PetListComponentProps) => {
  const filteredPets = pets.filter((p) => p.status === "adoptable");
  return (
    <>
      {filteredPets.map((pet) => (
        <PetComponent key={pet.id} pet={pet}></PetComponent>
      ))}
    </>
  );
};

export default PetListComponent;
