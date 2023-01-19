import React from "react";
import { Box, Grid, styled } from "@mui/material";

const MyExerciseComponent = styled("div")(() => ({
  marginTop: 56,
  width: "100%",
  background: "#414141",
  padding: "16px 24px",
}));

const HeaderComponent = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  flexwrap: "wrap",
  color: "#FFFFFF",
  fontFamily: "inter-regular",
  marginBottom: 10,

  "& .name": {
    fontSize: 15,
    lineHeight: "18px",
    letterSpacing: "0.15px",
    textTransform: "uppercase",
    minWidth: 96,
  },
  "& .date": {
    fontSize: 22,
    lineHeight: "27px",
    letterSpacing: "0.11px",
  },
}));

const DataComponent = styled("div")(() => ({
  maxHeight: 192,
  overflowX: "auto",
  /* width */
  "&::-webkit-scrollbar": {
    width: 6,
  },

  /* Track */
  "&::-webkit-scrollbar-track": {
    background: "#777777",
    borderRadius: 3,
  },

  /* Handle */
  "&::-webkit-scrollbar-thumb": {
    background: "#FFCC21",
    borderRadius: 3,
  },

  /* Handle on hover */
  "&::-webkit-scrollbar-thumb:hover": {
    background: "#FFCC21",
  },
}));

const BoxData = styled("div")(() => ({
  borderBottom: "1px solid #777777",
  marginBottom: 8,
  paddingBottom: 2,
  paddingLeft: 16,
  paddingRight: 16,
  position: "relative",
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",

  "&::after": {
    content: "''",
    display: "block",
    width: 5,
    height: 5,
    background: "#FFFFFF",
    borderRadius: "50%",
    position: "absolute",
    top: 7,
    left: 0,
  },

  "& .title": {
    fontSize: 15,
    lineHeight: "22px",
    letterSpacing: "0.075px",
    color: "#FFFFFF",
    marginBottom: 0,
    marginTop: 0,
    width: "50%",
  },

  "& .time": {
    fontSize: 18,
    fontFamily: "inter-regular",
    textAlign: "right",
    lineHeight: "22px",
    letterSpacing: "0.09px",
    color: "#FFCC21",
    marginBottom: 0,
    width: "50%",
  },

  "& .des": {
    fontSize: 15,
    fontFamily: "inter-regular",
    lineHeight: "22px",
    letterSpacing: "0.75px",
    color: "#FFCC21",
    marginBottom: 0,
    width: "50%",
  },
}));

const MyExercise: React.FC<any> = (props: any) => {
  const data = [
    {
      title: "家事全般（立位・軽い）",
      des: "26kcal",
      time: "10 min",
    },
    {
      title: "家事全般（立位・軽い）",
      des: "26kcal",
      time: "10 min",
    },
    {
      title: "家事全般（立位・軽い）",
      des: "26kcal",
      time: "10 min",
    },
    {
      title: "家事全般（立位・軽い）",
      des: "26kcal",
      time: "10 min",
    },
    {
      title: "家事全般（立位・軽い）",
      des: "26kcal",
      time: "10 min",
    },
    {
      title: "家事全般（立位・軽い）",
      des: "26kcal",
      time: "10 min",
    },
    {
      title: "家事全般（立位・軽い）",
      des: "26kcal",
      time: "10 min",
    },
    {
      title: "家事全般（立位・軽い）",
      des: "26kcal",
      time: "10 min",
    },
    {
      title: "家事全般（立位・軽い）",
      des: "26kcal",
      time: "10 min",
    },
    {
      title: "家事全般（立位・軽い）",
      des: "26kcal",
      time: "10 min",
    },
    {
      title: "家事全般（立位・軽い）",
      des: "26kcal",
      time: "10 min",
    },
  ];
  return (
    <>
      <MyExerciseComponent>
        <HeaderComponent>
          <div className="name">
            MY
            <br />
            EXERCISE
          </div>
          <div className="date">2021.05.21</div>
        </HeaderComponent>
        <DataComponent>
          <Box sx={{ flexGrow: 0 }}>
            <Grid container spacing={"40px"}>
              {data.map((item, index) => (
                <Grid key={index} item xs={6}>
                  <BoxData key={index}>
                    <h3 className="title">{item.title}</h3>
                    <div className="time">{item.time}</div>
                    <div className="des">{item.des}</div>
                  </BoxData>
                </Grid>
              ))}
            </Grid>
          </Box>
        </DataComponent>
      </MyExerciseComponent>
    </>
  );
};

export default MyExercise;
