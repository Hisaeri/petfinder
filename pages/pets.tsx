import {
  Typography,
  Box,
  Checkbox,
  FormControlLabel,
  Pagination,
} from "@mui/material";
import Container from "@mui/material/Container";
import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import PetListComponent from "../components/petList";
import api from "../lib/api/api";
import { PetfinderPets, PetfinderToken } from "../types/petfinder";

const PetsPage: NextPage = () => {
  let petsComponent: JSX.Element;

  const [page, setPage] = useState<number>(1);
  const [onlyDogs, setOnlyDogs] = useState<boolean>(false);
  const [pets, setPets] = useState<PetfinderPets | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setLoading] = useState(true);

  const onlyDogsChanged = (value: boolean) => {
    setOnlyDogs(value);
  };

  const onPageChanged = (page: number) => {
    setPage(page);
  };

  useEffect(() => {
    const getPetFinderData = async () => {
      setLoading(true);
      setPets(null);
      let tokenResponse: PetfinderToken;
      // Get Petfinder token
      try {
        const resToken = await api.postPetfinderToken();
        tokenResponse = resToken.data;
      } catch (e) {
        setError("Can't get Petfinder token: " + e);
        setLoading(false);
        return;
      }

      try {
        // Get Petfinder pets data
        const resData = await api.getPetfinderAnimals(
          tokenResponse.access_token,
          onlyDogs,
          page
        );
        const petsResponse: PetfinderPets = resData.data;
        setPets(petsResponse);
        setLoading(false);
      } catch (e) {
        setError("Can't get list of pets:" + e);
        setLoading(false);
      }
    };
    getPetFinderData();
  }, [onlyDogs, page]);

  if (!pets) {
    petsComponent = <p>{error}</p>;
  } else {
    petsComponent = <PetListComponent pets={pets.animals}></PetListComponent>;
  }

  return (
    <>
      <Head>
        <title>Pets</title>
      </Head>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h1">
          Pets who need a home
        </Typography>
        <FormControlLabel
          control={
            <Checkbox
              onChange={(event) => {
                onlyDogsChanged(event.target.checked);
              }}
            />
          }
          label="Only dogs"
        />
        {isLoading && <Typography variant="body1">Loading...</Typography>}
        <Box sx={{ my: 4 }}>{petsComponent}</Box>
        {pets && (
          <Pagination
            defaultPage={page}
            count={pets.pagination.total_pages}
            onChange={(event, page) => {
              onPageChanged(page);
            }}
          />
        )}
      </Container>
    </>
  );
};

export default PetsPage;
