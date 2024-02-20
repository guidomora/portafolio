import { Grid, Typography } from "@mui/material";
import { AiFillLinkedin } from "react-icons/ai";
import React from "react";
import { DiGithubBadge } from "react-icons/di";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";

const Body5 = () => {
  return (
    <Grid sx={{ display: "flex", justifyContent: "center" }}>
      <Grid
        marginTop={20}
        marginBottom={-5}
        sx={{
          width: { xs:150, sm:200, md: 200},
          backgroundColor: 'primary.main',
          height: { xs:75, sm:100, md: 100},
          border:"solid 1px rgba(137, 82, 253, 0.5)",
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0px 0px 20px 0px rgba(137, 82, 253, 0.75)"
        }}
      >
        <Grid margin={2}>
          <IconButton
            sx={{
              backgroundColor: "black",
              width: { xs:35, sm:45, md: 45},
              height: { xs:35, sm:45, md: 45},
            }}
          >
            <Link to="https://github.com/guidomora" target="_blank">
              <DiGithubBadge className="github" />
            </Link>
          </IconButton>
        </Grid>
        <Grid margin={2}>
          <IconButton
            sx={{
              backgroundColor: "#0431B4",
              width: { xs:35, sm:45, md: 45},
              height: { xs:35, sm:45, md: 45},
            }}
          >
            <Link
              to="https://www.linkedin.com/in/guido-morabito-7123b6240/"
              target="_blank"
            >
              <AiFillLinkedin className="linkedin" />
            </Link>
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Body5;
