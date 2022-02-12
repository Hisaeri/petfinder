import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { NextPage } from "next";
import Head from "next/head";

const PetsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pets</title>
      </Head>
      <Container maxWidth="md">
        <Typography variant="h2" component="h1">
          Pets
        </Typography>
      </Container>
    </>
  );
};

export default PetsPage;
