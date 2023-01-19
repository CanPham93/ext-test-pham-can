import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Button, Grid } from "@mui/material";

const TitleComponent = styled("h2")({
  color: "#414141",
  fontFamily: "inter-regular",
  fontSize: 22,
  lineHeight: "27px",
  letterSpacing: "0.11px",
  marginTop: 56,
  marginBottom: 0,
});

const BoxData = styled("div")({
  color: "#414141",
  background: "#FFFFFF",
  border: "2px solid #707070",
  padding: 16,

  "& .date": {
    fontFamily: "inter-regular",
    fontSize: 18,
    lineHeight: "22px",
    letterSpacing: "0.09px",
  },

  "& .time": {
    fontFamily: "inter-regular",
    fontSize: 18,
    lineHeight: "22px",
    letterSpacing: "0.09px",
  },

  "& .des": {
    fontSize: 12,
    lineHeight: "17px",
    letterSpacing: "0.09px",
    marginTop: 8,
    display: "-webkit-box",
    WebkitLineClamp: 7,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  },
});

const ButtonSeeMore = styled(Button)({
  background: "linear-gradient(32.95deg, #FFCC21 8.75%, #FF963C 86.64%)",
  margin: "auto",
  marginTop: 28,
  minWidth: 296,
  maxWidth: "100%",
  minHeight: 56,
  fontSize: 18,
  lineHeight: "26px",
  textAlign: "center",
  color: "#FFFFFF",
  display: "flex",
});

const MyDiary: React.FC<any> = (props: any) => {
  const data = [
    {
      id: 1,
      date: "2021.05.21",
      time: "23:25",
      des: "私の日記の記録が一部表示されます。<br/> テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
    },
    {
      id: 2,
      date: "2021.05.21",
      time: "23:25",
      des: "私の日記の記録が一部表示されます。<br/>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
    },
    {
      id: 3,
      date: "2021.05.21",
      time: "23:25",
      des: "私の日記の記録が一部表示されます。<br/> テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
    },
    {
      id: 4,
      date: "2021.05.21",
      time: "23:25",
      des: "私の日記の記録が一部表示されます。<br/> テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
    },
    {
      id: 5,
      date: "2021.05.21",
      time: "23:25",
      des: "私の日記の記録が一部表示されます。<br/> テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
    },
    {
      id: 6,
      date: "2021.05.21",
      time: "23:25",
      des: "私の日記の記録が一部表示されます。<br/> テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
    },
    {
      id: 7,
      date: "2021.05.21",
      time: "23:25",
      des: "私の日記の記録が一部表示されます。 <br/>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
    },
    {
      id: 8,
      date: "2021.05.21",
      time: "23:25",
      des: "私の日記の記録が一部表示されます。 <br/>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
    },
  ];
  return (
    <>
      <TitleComponent>MY DIARY</TitleComponent>
      <Box sx={{ flexGrow: 0 }}>
        <Grid container spacing={"12px"}>
          {data.map((item) => (
            <Grid key={item.id} item xs={6} sm={4} md={3}>
              <BoxData>
                <div className="date">{item.date}</div>
                <div className="time">{item.time}</div>
                <div className="des">{item.des}</div>
              </BoxData>
            </Grid>
          ))}
        </Grid>
      </Box>

      <ButtonSeeMore>自分の日記をもっと見る</ButtonSeeMore>
    </>
  );
};

export default MyDiary;
