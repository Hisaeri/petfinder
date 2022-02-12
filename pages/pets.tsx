import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { InferGetServerSidePropsType } from "next";
import Head from "next/head";
import PetListComponent from "../components/petList";
import { PetfinderClientId, PetfinderClientSecret } from "../config";
import { PetsHTTPResponse } from "../types/pet";

export const getServerSideProps = async () => {
  // Get Petfinder token
  const resToken = await fetch("https://api.petfinder.com/v2/oauth2/token", {
    method: "POST",
    body: JSON.stringify({
      grant_type: "client_credentials",
      client_id: PetfinderClientId,
      client_secret: PetfinderClientSecret,
    }),
    headers: new Headers({
      "Content-Type": "application/json",
    }),
  });

  if (resToken.status !== 200) {
    return {
      props: {
        pets: null,
        error: "Can't get Petfinder token.",
      },
    };
  }

  const tokenResponse: {
    token_type: string;
    expired_in: number;
    access_token: string;
  } = await resToken.json();

  //   Get Petfinder pets data

  const resData = await fetch("https://api.petfinder.com/v2/animals", {
    headers: new Headers({
      Authorization: "Bearer " + tokenResponse.access_token,
    }),
  });

  if (resData.status !== 200) {
    return {
      props: {
        pets: null,
        error: "Can't get list of pets.",
      },
    };
  }

  const petsResponse: PetsHTTPResponse = await resData.json();
  return {
    props: {
      pets: petsResponse.animals,
    },
  };
};

const PetsPage = ({
  pets,
  error,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
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
