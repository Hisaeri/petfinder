import Container from "@mui/material/Container";
import Head from "next/head";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { NextPage } from "next";
import { Typography } from "@mui/material";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Container maxWidth="md">
        <Typography variant="h2" component="h1">
          Home
        </Typography>
      </Container>
    </>
  );
};

export default HomePage;
