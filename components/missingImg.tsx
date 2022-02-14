import { HideImage } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const MissingImgComponent = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: grey[100],
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <HideImage sx={{ color: "text.secondary" }} />{" "}
        <Typography variant="body2" color="text.secondary">
          No image
        </Typography>
      </Box>
    </>
  );
};

export default MissingImgComponent;
