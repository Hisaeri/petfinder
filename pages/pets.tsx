import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import PetListComponent from "../components/petList";
import api from "../lib/api/api";
import { PetfinderPets, PetfinderToken } from "../types/petfinder";

export const getStaticProps: GetStaticProps = async () => {
  let tokenResponse: PetfinderToken;
  // Get Petfinder token
  try {
    const resToken = await api.postPetfinderToken();
    tokenResponse = resToken.data;
  } catch (e) {
    return {
      props: {
        pets: null,
        error: "Can't get Petfinder token: " + e,
      },
    };
  }

  try {
    //   Get Petfinder pets data
    const resData = await api.getPetfinderAnimals(tokenResponse.access_token);
    const petsResponse: PetfinderPets = resData.data;
    return {
      props: {
        pets: petsResponse.animals,
      },
    };
  } catch (e) {
    return {
      props: {
        revalidate: 60,
        pets: null,
        error: "Can't get list of pets:" + e,
      },
    };
  }
};

const PetsPage: NextPage = ({
  pets,
  error,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  let petsComponent: JSX.Element;
  if (!pets) {
    petsComponent = <p>{error}</p>;
  } else {
    petsComponent = <PetListComponent pets={pets}></PetListComponent>;
  }

  return (
    <>
      <Head>
        <title>Pets</title>
      </Head>
      <Container maxWidth="md">
        <Typography variant="h2" component="h1">
          Pets who need a home
        </Typography>
        {petsComponent}
      </Container>
    </>
  );
};

export default PetsPage;
