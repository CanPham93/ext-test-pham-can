import * as React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";

type Anchor = "top" | "left" | "bottom" | "right";

const pages = [
  {
    icon: "icon_my_record.png",
    name: "自分の記録",
    name_en: "My record",
    link: "/my-record",
  },
  {
    icon: "icon_challenge.png",
    name: "チャレンジ",
    name_en: "challenge",
    link: "/column",
  },
  {
    icon: "icon_info.png",
    name: "お知らせ",
    name_en: "info",
    link: "/",
  },
];
const settings = [
  {
    icon: "icon",
    name: "Logout",
    link: "/",
  },
];

export default function SwipeableTemporaryDrawer(props: any) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [statusLogin, setStatusLogin] = React.useState<any>(false);

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const onLogoutSite = () => {
    localStorage.removeItem("token");
    window.location.reload();
  }

  React.useEffect(() => {
    let status = localStorage.getItem("token") ? true : false;
    setStatusLogin(status)
  }, [])

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event &&
          event.type === "keydown" &&
          ((event as React.KeyboardEvent).key === "Tab" ||
            (event as React.KeyboardEvent).key === "Shift")
        ) {
          return;
        }

        setState({ ...state, [anchor]: open });
      };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {pages.map((text, index) => (
          <Link to={text.link} key={index}>
            <ListItem disablePadding>
              <ListItemButton sx={{ color: "#414141" }}>
                <ListItemIcon>
                  <img src={`/icons/${text.icon}`} alt="" />
                </ListItemIcon>
                <ListItemText
                  sx={{ fontSize: 16, marginBottom: 0, marginTop: "5px" }} primary={text.name} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        {settings.map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText
                sx={{ fontSize: 16, marginBottom: 0, marginTop: "5px" }} primary={text.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="relative"
        sx={{
          background: "#414141",
          boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.160784)",
        }}
      >
        <Container maxWidth="md">
          <Toolbar disableGutters>
            <Typography
              component="div"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
              }}
            >
              <Link to="/" style={{ display: "flex" }}>
                <img src="/images/logo.png" height={64} alt="/images/logo.png" />
              </Link>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={toggleDrawer("left", true)}
                color="inherit"
              >
                <img alt="Remy Sharp" height={32} src="/icons/icon_menu.png" />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page, i) => (
                  <MenuItem key={i} onClick={handleCloseNavMenu}>
                    <Typography
                      textAlign="center"
                    >
                      {page.name}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Typography
              component="div"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
              }}
            >
              <Link to="/" style={{ display: "flex" }}>
                <img src="/images/logo.png" height={64} alt="/images/logo.png" />
              </Link>
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                justifyContent: "flex-end",
                display: { xs: "none", md: "flex" },
              }}
            >
              {pages.map((page, i) => (
                <Button
                  key={i}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: "8px",
                    color: "white",
                    display: "block",
                    padding: 0,
                  }}
                >
                  <Link to={page.link} key={i}>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon sx={{ minWidth: 40 }}>
                          <img src={`/icons/${page.icon}`} alt="" />
                        </ListItemIcon>
                        <ListItemText
                          sx={{ fontSize: 16, marginBottom: 0, marginTop: "5px" }}
                          primary={page.name}
                        />
                      </ListItemButton>
                    </ListItem>
                  </Link>
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{
                  p: 0,
                  display: { xs: "none", md: "flex" },
                  cursor: "pointer",
                }}
              >
                <img alt="Remy Sharp" height={32} src="/icons/icon_menu.png" />
              </IconButton>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {
                  statusLogin ?
                  <MenuItem onClick={onLogoutSite}>
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>
                  :
                  <Link to="/login">
                    <MenuItem onClick={onLogoutSite}>
                      <Typography textAlign="center" sx={{color: "#000"}}>Login</Typography>
                    </MenuItem>
                  </Link>
                }
                  
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <SwipeableDrawer
        anchor={"left"}
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
        onOpen={toggleDrawer("left", true)}
      >
        {list("left")}
      </SwipeableDrawer>
    </>
  );
}
