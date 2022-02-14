import { Grid } from "@mui/material";
import { Pet } from "../types/pet";
import PetComponent from "./pet";

type PetListComponentProps = {
  pets: Pet[];
};

const PetListComponent = ({ pets }: PetListComponentProps) => {
  const filteredPets = pets.filter((p) => p.status === "adoptable");
  return (
    <>
      <Grid container spacing={2}>
        {filteredPets.map((pet) => (
          <Grid item sm={6} md={4}>
            <PetComponent key={pet.id} pet={pet}></PetComponent>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default PetListComponent;
