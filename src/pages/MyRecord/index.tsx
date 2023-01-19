import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Grid, Container } from "@mui/material";
import BodyRecord from "./BodyRecord";
import MyExercise from "./MyExercise";
import MyDiary from "./MyDiary";

const TabRecord = styled(Box)(({ theme }) => ({
  marginTop: 56,
}));

const Item = styled("div")(() => ({
  background: "#2E2E2E",
  border: "24px solid #FFCC21",
  position: "relative",
  display: "flex",

  "& img": {
    objectFit: "cover",
    width: "100%",
    height: "100%",
  },

  "& .sub": {
    display: "flex",
    width: "100%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  "& .name": {
    fontFamily: "inter-regular",
    fontSize: 25,
    lineHeight: "30px",
    textAlign: "center",
    letterSpacing: "0.125px",
    color: "#FFCC21",
    marginBottom: 10,
  },

  "& .des": {
    background: "#FF963C",
    minWidth: 160,
    fontSize: 14,
    lineHeight: "20px",
    textAlign: "center",
    color: "#FFFFFF",
    padding: 2,
  },
}));

const MyRecord: React.FC<any> = (props: any) => {
  return (
    <>
      <Container maxWidth="md">
        <TabRecord sx={{ flexGrow: 0 }}>
          <Grid container spacing={"48px"}>
            <Grid item xs={12} sm={4}>
              <Item>
                <img src="/images/MyRecommend-1.png" alt="" />
                <div className="sub">
                  <div className="name">BODY RECORD</div>
                  <div className="des">自分のカラダの記録</div>
                </div>
              </Item>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Item>
                <img src="/images/MyRecommend-2.png" alt="" />
                <div className="sub">
                  <div className="name">MY EXERCISE</div>
                  <div className="des">自分の運動の記録</div>
                </div>
              </Item>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Item>
                <img src="/images/MyRecommend-3.png" alt="" />
                <div className="sub">
                  <div className="name">MY DIARY</div>
                  <div className="des">自分の日記</div>
                </div>
              </Item>
            </Grid>
          </Grid>
        </TabRecord>
        
        <BodyRecord />
        <MyExercise />
        <MyDiary />
      </Container>
    </>
  );
};

export default MyRecord;
