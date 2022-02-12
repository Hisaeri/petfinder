import { Box } from "@mui/material";
import Footer from "./footer";
import Header from "./header";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <Box sx={{ flexGrow: 1 }}>
        <main>{children}</main>
      </Box>
      <Footer></Footer>
    </>
  );
}
