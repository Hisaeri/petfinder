import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { NextPage } from "next";
import Head from "next/head";

const AboutPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h1">
          About
        </Typography>
      </Container>
    </>
  );
};

export default AboutPage;
