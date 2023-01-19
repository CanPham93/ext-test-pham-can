import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Grid, Container, Button } from "@mui/material";

const BoxColumn = styled("div")(() => ({
  background: "#2E2E2E",
  padding: "8px 24px",
  minHeight: 144,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  textAlign: "center",
  marginTop: 56,

  "& .name": {
    fontFamily: "inter-regular",
    fontSize: 22,
    lineHeight: "37px",
    textAlign: "center",
    letterSpacing: "0.11px",
    color: "#FFCC21",
    paddingBottom: 10,
    marginBottom: 8,
    position: "relative",

    "&:after": {
      content: "''",
      display: "block",
      background: "#FFFFFF",
      position: "absolute",
      width: 56,
      height: 1,
      bottom: 0,
      left: "50%",
      transform: "translate(-50%, 0)",
    },
  },

  "& .des": {
    fontSize: 18,
    lineHeight: "26px",
    color: "#FFFFFF",
  },
}));

const BoxData = styled("div")(() => ({
  marginBottom: 18,

  "& .group_img": {
    position: "relative",
    display: "flex",
    "& img": {
      objectFit: "cover",
      width: "100%",
      height: "100%",
    },

    "& .date_time": {
      position: "absolute",
      minWidth: 144,
      left: 0,
      bottom: 0,
      background: "#FFCC21",
      padding: "2px 8px",
      display: "flex",
      justifyContent: "space-between",
      fontFamily: "inter-regular",
      fontSize: 15,
      lineHeight: "20px",
      color: "#FFFFFF",
    },
  },

  "& .des": {
    fontSize: 15,
    lineHeight: "22px",
    letterSpacing: "0.075px",
    marginTop: 5,
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    color: "#414141",
  },

  "& .tags": {
    fontSize: 12,
    lineHeight: "22px",
    letterSpacing: "0.075px",
    color: "#FF963C",
    display: "flex",
    flexWrap: "wrap",

    "& span": {
      marginRight: 7,
    },
  },
}));

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

const ColumnPage: React.FC<any> = (props: any) => {
  const columns = [
    {
      title: "RECOMMENDED COLUMN",
      des: "オススメ",
      link: "",
    },
    {
      title: "RECOMMENDED DIET",
      des: "ダイエット",
      link: "",
    },
    {
      title: "RECOMMENDED BEAUTY",
      des: "美容",
      link: "",
    },
    {
      title: "RECOMMENDED HEALTH",
      des: "健康",
      link: "",
    },
  ];

  const data = [
    {
      date: "2021.05.17",
      time: "23:25",
      des: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      img: "/images/pub1.png",
      link: "",
      tags: ["#魚料理", "#和食", "#DHA"],
    },
    {
      date: "2021.05.17",
      time: "23:25",
      des: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      img: "/images/pub1.png",
      link: "",
      tags: ["#魚料理", "#和食", "#DHA"],
    },
    {
      date: "2021.05.17",
      time: "23:25",
      des: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      img: "/images/pub1.png",
      link: "",
      tags: ["#魚料理", "#和食", "#DHA"],
    },
    {
      date: "2021.05.17",
      time: "23:25",
      des: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      img: "/images/pub1.png",
      link: "",
      tags: ["#魚料理", "#和食", "#DHA"],
    },
    {
      date: "2021.05.17",
      time: "23:25",
      des: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      img: "/images/pub1.png",
      link: "",
      tags: ["#魚料理", "#和食", "#DHA"],
    },
    {
      date: "2021.05.17",
      time: "23:25",
      des: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      img: "/images/pub1.png",
      link: "",
      tags: ["#魚料理", "#和食", "#DHA"],
    },
    {
      date: "2021.05.17",
      time: "23:25",
      des: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      img: "/images/pub1.png",
      link: "",
      tags: ["#魚料理", "#和食", "#DHA"],
    },
    {
      date: "2021.05.17",
      time: "23:25",
      des: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      img: "/images/pub1.png",
      link: "",
      tags: ["#魚料理", "#和食", "#DHA"],
    },
  ];

  return (
    <>
      <Container maxWidth="md">
        <Box sx={{ flexGrow: 0 }}>
          <Grid container spacing={"32px"}>
            {columns.map((item, i) => (
              <Grid key={i} item xs={6} sm={3}>
                <BoxColumn>
                  <div className="name">{item.title}</div>
                  <div className="des">{item.des}</div>
                </BoxColumn>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box sx={{ flexGrow: 0, marginTop: "65px" }}>
          <Grid container spacing={"8px"}>
            {data.map((item, i) => (
              <Grid key={i} item xs={6} sm={3}>
                <BoxData>
                  <div className="group_img">
                    <img src={item.img} alt={item.img} />
                    <div className="date_time">
                      <span>{item.date}</span>
                      <span>{item.time}</span>
                    </div>
                  </div>
                  <div className="des">{item.des}</div>
                  <div className="tags">
                    {item.tags.map((tag, index) => (
                      <span key={index}>{tag}</span>
                    ))}
                  </div>
                </BoxData>
              </Grid>
            ))}
          </Grid>
        </Box>

        <ButtonSeeMore>コラムをもっと見る</ButtonSeeMore>
      </Container>
    </>
  );
};

export default ColumnPage;
