import { Box } from "@mui/system";
import { Pet } from "../types/pet";
import PetComponent from "./pet";

type PetListComponentProps = {
  pets: Pet[];
};

const PetListComponent = ({ pets }: PetListComponentProps) => {
  const filteredPets = pets.filter((p) => p.status === "adoptable");
  return (
    <>
      <Box
        sx={{
          my: 4,
          display: "grid",
          gap: 2,
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
        }}
      >
        {filteredPets.map((pet) => (
          <Box sx={{}}>
            <PetComponent key={pet.id} pet={pet}></PetComponent>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default PetListComponent;
