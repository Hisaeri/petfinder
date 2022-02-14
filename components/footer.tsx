import { Link as MUILink } from "@mui/material";
import { Box, Container } from "@mui/material";
import Link from "next/link";

type FooterProps = {};

const Footer = ({}: FooterProps) => {
  return (
    <footer
      color="primary"
      style={{
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          borderTop: 1,
          borderColor: "divider",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              py: 2,
            }}
          >
            {"Made with ❤️ by "}
            <Link passHref href="https://www.github.com/Hisaeri">
              <MUILink target="_blank">Hisaeri</MUILink>
            </Link>
          </Box>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
