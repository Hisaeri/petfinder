import { Box } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import { Pet } from "../types/pet";

type PetComponentProps = {
  pet: Pet;
};

const PetComponent = ({ pet }: PetComponentProps) => {
  let petImage: JSX.Element = <>No image :(</>;
  if (pet.primary_photo_cropped && pet.primary_photo_cropped.small) {
    petImage = (
      <Image
        objectFit={"cover"}
        width={300}
        height={300}
        src={pet.primary_photo_cropped.small}
      />
    );
  }

  return (
    <>
      <Box
        sx={{
          py: 8,
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          borderBottom: "1px solid",
          borderColor: "primary.main",
        }}
      >
        <Link href={pet.url} passHref>
          <a target="_blank">{pet.name}</a>
        </Link>
        <p>{pet.description}</p>
        <div> {petImage}</div>
      </Box>
    </>
  );
};

export default PetComponent;
