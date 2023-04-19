import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Typography } from "@mui/material";
import { Facebook } from "@mui/icons-material";
const Footer = () => {
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 1 }}
      >
        <Box
          sx={{
            my: 1,
            "& svg": {
              fontSize: "40px",
              cursor: "pointer",
              mr: 3,
            },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
        ><div className="App8">
          {/* icons */}
          <Facebook />
          <TwitterIcon />
          <InstagramIcon />
          <YouTubeIcon />
          </div>
        </Box>
        <Typography
          variant="h5"
          sx={{
            "@media (max-width:500px)": {
              fontSize: "0rem",
            },
          }}
        >
          <div className="App7">
          All Rights Reserved &copy; South Paradise
          </div>
        </Typography>
      </Box>
    </>
  );
};

export default Footer;