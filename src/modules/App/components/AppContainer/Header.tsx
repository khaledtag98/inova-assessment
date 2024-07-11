import { useState } from "react";

import { useTranslation } from "react-i18next";

import {
  AppBar,
  Box,
  IconButton,
  Typography,
  Menu,
  Avatar,
  Button,
  MenuItem,
  Stack,
  Container,
  Paper,
  Divider,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { authSelector, setLanguage } from "../../../../redux/slices/auth";

const pages = ["Home", "News", "Courses", "E-books", "Contact Us"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Header() {
  const { t } = useTranslation();

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const dispatch = useDispatch();
  const { language } = useSelector(authSelector);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLangToggle = () => {
    dispatch(setLanguage({ language: language === "ar" ? "en" : "ar" }));
  };
  return (
    <AppBar elevation={0} position="static">
      <Container>
        <Button variant="text" onClick={handleLangToggle}>
          {t(language === "ar" ? "en" : "ar")}
        </Button>
      </Container>
      <Divider variant="fullWidth" sx={{ borderColor: "#3d3939" }} />

      <Container
        sx={{
          py: 2,
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box
            component="img"
            src="http://bigramyweb.inovaeg.com/static/media/main-logo.d37fd44b1dd3dfb263bfdd977c7cef90.svg"
            alt="logo"
          />

          <Box sx={{ flexGrow: 0 }}>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Stack>
      </Container>

      <Paper elevation={0}>
        <Container>
          <Stack direction="row" spacing={2}>
            {pages.map((page) => (
              <Button
                variant="text"
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Stack>
        </Container>
      </Paper>
    </AppBar>
  );
}
export default Header;
