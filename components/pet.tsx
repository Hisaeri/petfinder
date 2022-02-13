import {
  Typography,
  Card,
  CardContent,
  CardHeader,
  Link as MUILink,
} from "@mui/material";
import { HideImage } from "@mui/icons-material";
import { Box } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import { Pet } from "../types/pet";
import { grey } from "@mui/material/colors";

type PetComponentProps = {
  pet: Pet;
};

const PetComponent = ({ pet }: PetComponentProps) => {
  let petImage: JSX.Element = <></>;
  if (pet.primary_photo_cropped && pet.primary_photo_cropped.small) {
    petImage = (
      <Image
        objectFit={"cover"}
        src={pet.primary_photo_cropped.small}
        layout="fill"
      />
    );
  } else {
    petImage = (
      <Box
        sx={{
          backgroundColor: grey[100],
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <HideImage sx={{ color: "text.secondary" }} />{" "}
        <Typography variant="body2" color="text.secondary">
          No image
        </Typography>
      </Box>
    );
  }

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
        <Box sx={{ position: "relative", height: 300 }}>{petImage}</Box>
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
