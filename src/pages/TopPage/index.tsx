import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Paper, Grid } from "@mui/material";
import AchievementRate from "./AchievementRate";
import PercentageGraph from "./PercentageGraph";
import MealComponent from "./MealComponent";

const Item = styled(Paper)(({ theme }) => ({
  height: "100%",
  borderRadius: 0,
  boxShadow: "none",
}));

const TopPage: React.FC<any> = (props: any) => {
  return (
    <>
      <Box sx={{ flexGrow: 0 }}>
        <Grid container spacing={0}>
          <Grid item xs={5}>
            <Item>
              <AchievementRate />
            </Item>
          </Grid>
          <Grid item xs={7}>
            <Item>
              <PercentageGraph />
            </Item>
          </Grid>
        </Grid>
      </Box>

      <MealComponent />
    </>
  );
};

export default TopPage;
