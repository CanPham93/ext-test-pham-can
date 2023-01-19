import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Button, Container, Grid } from "@mui/material";

const ListTabsMealComponent = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
  textAlign: "center",
  width: "100%",
  maxWidth: 800,
  margin: "auto",
  marginBottom: 25,
});

const TabMealComponent = styled("div")({
  width: 134,
  height: 134,
  background: "linear-gradient(155.89deg, #FFCC21 8.26%, #FF963C 91.18%)",
  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "inter-regular",
  fontSize: 20,
  lineHeight: "24px",
  textAlign: "center",
  color: "#FFFFFF",
  marginTop: 22,
  marginLeft: 10,
  marginRight: 10,

  "&:hover": {
    background: "linear-gradient(0deg, #FFCC21 8.26%, #FF963C 91.18%)",
    cursor: "pointer",
  },

  "& img": {
    width: 56,
    height: 56,
  },
});

const BoxMeal = styled("div")({
  position: "relative",
  display: "flex",
});

const ImgMeal = styled("img")({
  objectFit: "cover",
  width: "100%",
  height: "100%",
});

const NameMeal = styled("div")({
  position: "absolute",
  zIndex: 1,
  background: "#FFCC21",
  bottom: 0,
  left: 0,
  fontFamily: "inter-regular",
  fontSize: 15,
  lineHeight: "18px",
  letterSpacing: 0.15,
  color: "#FFFFFF",
  minWidth: 120,
  padding: "7px 8px",
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

const MealComponent: React.FC<any> = (props: any) => {
  const list_meal = [
    {
      id: 1,
      name: "05.21.Morning",
      img: "/images/meal1.png",
    },
    {
      id: 2,
      name: "05.21.Lunch",
      img: "/images/meal2.png",
    },
    {
      id: 3,
      name: "05.21.Dinner",
      img: "/images/meal3.png",
    },
    {
      id: 4,
      name: "05.21.Snack",
      img: "/images/meal4.png",
    },
    {
      id: 5,
      name: "05.21.Morning",
      img: "/images/meal5.png",
    },
    {
      id: 6,
      name: "05.20.Lunch",
      img: "/images/meal6.png",
    },
    {
      id: 7,
      name: "05.21.Dinner",
      img: "/images/meal7.png",
    },
    {
      id: 8,
      name: "05.21.Snack",
      img: "/images/meal8.png",
    },
  ];
  return (
    <>
      <Container maxWidth="md">
        <ListTabsMealComponent>
          <TabMealComponent>
            <img src="/icons/icon_knife.png" alt="" />
            <span>Morning</span>
          </TabMealComponent>
          <TabMealComponent>
            <img src="/icons/icon_knife.png" alt="" />
            <span>Lunch</span>
          </TabMealComponent>
          <TabMealComponent>
            <img src="/icons/icon_knife.png" alt="" />
            <span>Dinner</span>
          </TabMealComponent>
          <TabMealComponent>
            <img src="/icons/icon_cup.png" alt="" />
            <span>Snack</span>
          </TabMealComponent>
        </ListTabsMealComponent>

        <Box sx={{ flexGrow: 0 }}>
          <Grid container spacing={"8px"}>
            {list_meal.map((item) => (
              <Grid key={item.id} item xs={6} sm={4} md={3}>
                <BoxMeal>
                  <ImgMeal src={item.img} alt={item.img} />
                  <NameMeal>{item.name}</NameMeal>
                </BoxMeal>
              </Grid>
            ))}
          </Grid>
        </Box>

        <ButtonSeeMore>記録をもっと見る</ButtonSeeMore>
      </Container>
    </>
  );
};

export default MealComponent;
