import * as React from "react";
import { Link } from "react-router-dom";
import { Container, List, ListItem, ListItemText } from "@mui/material";
import { styled } from "@mui/system";

const pages = [
  {
    name: "会員登録",
    name_en: "Member registration",
    link: "/",
  },
  {
    name: "運営会社",
    name_en: "Operating company",
    link: "/",
  },
  {
    name: "利用規約",
    name_en: "Terms of service",
    link: "/",
  },
  {
    name: "個人情報の取扱について",
    name_en: "Handling of personal information",
    link: "/",
  },
  {
    name: "特定商取引法に基づく表記",
    name_en: "Notation based on the Act on Specified Commercial Transactions",
    link: "/",
  },
  {
    name: "お問い合わせ",
    name_en: "inquiry",
    link: "/",
  },
];

const FooterComponent = styled("footer")({
  background: "#414141",
  padding: "40px 0",
});

export default function Footer() {
  return (
    <FooterComponent>
      <Container maxWidth="md">
        <List
          sx={{
            cursor: "pointer",
            padding: 0,
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {pages.map((page, index) => (
            <Link to={page.link} key={index}>
              <ListItem>
                <ListItemText
                  sx={{
                    fontSize: 16,
                  }}
                  primary={page.name}
                />
              </ListItem>
            </Link>
          ))}
        </List>
      </Container>
    </FooterComponent>
  );
}
