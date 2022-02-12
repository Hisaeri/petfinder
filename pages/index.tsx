import Container from "@mui/material/Container";
import { NextPage } from "next";
import Head from "next/head";

const Homepage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Petfinder</title>
      </Head>
      <Container maxWidth="sm">
        <h1>Perfinder</h1>
      </Container>
    </>
  );
};

export default Homepage;
