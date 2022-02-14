import Container from "@mui/material/Container";
import Head from "next/head";
import { NextPage } from "next";
import { Typography } from "@mui/material";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h1">
          Home
        </Typography>
      </Container>
    </>
  );
};

export default HomePage;
