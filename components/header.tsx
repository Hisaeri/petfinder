import { Box, Button } from "@mui/material";
import Link from "next/link";

type HeaderProps = {};

type HeaderPage = {
  title: string;
  link: string;
};

const Header = ({}: HeaderProps) => {
  const pages: Array<HeaderPage> = [
    {
      title: "home",
      link: "/",
    },
    {
      title: "pets",
      link: "/pets",
    },
    {
      title: "about",
      link: "/about",
    },
  ];

  return (
    <>
      <Box
        sx={{
          display: { xs: "flex" },
          alignContent: "center",
          justifyContent: "center",
          backgroundColor: "primary.main",
          boxShadow: 5,
        }}
      >
        {pages.map((page: HeaderPage) => (
          <Link key={page.link} href={page.link} passHref>
            <Button sx={{ px: 4, py: 2, color: "white" }}>{page.title}</Button>
          </Link>
        ))}
      </Box>
    </>
  );
};

export default Header;
