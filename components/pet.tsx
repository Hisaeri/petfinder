import {
  Typography,
  Card,
  CardContent,
  CardHeader,
  Link as MUILink,
} from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import { Pet } from "../types/pet";
import PetImgComponent from "./petImg";
import MissingImgComponent from "./missingImg";

type PetComponentProps = {
  pet: Pet;
};

const getPetPrimaryImage = (pet: Pet) => {
  return pet.primary_photo_cropped?.small;
};

const PetComponent = ({ pet }: PetComponentProps) => {
  const petImg = getPetPrimaryImage(pet);
  return (
    <>
      <Card sx={{ height: "100%" }}>
        <CardHeader
          title={
            <Link href={pet.url} passHref>
              <MUILink target="_blank" className="text-ellipsis">
                {pet.name}
              </MUILink>
            </Link>
          }
        />
        <Box sx={{ position: "relative", height: 300 }}>
          {petImg && <PetImgComponent petImg={petImg}></PetImgComponent>}
          {!petImg && <MissingImgComponent></MissingImgComponent>}
        </Box>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {pet.description}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default PetComponent;
