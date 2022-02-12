import Container from "@mui/material/Container";
import { NextPage } from "next";
import Head from "next/head";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const Homepage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Petfinder</title>
      </Head>
      <Container maxWidth="sm">
        <h1>Petfinder</h1>
      </Container>
    </>
  );
};

export default Homepage;
