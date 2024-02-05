import {
  Box,
  CssBaseline,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import { Route, Routes, useLocation } from "react-router";
import { Link } from "react-router-dom";
import { LightModeOutlined } from "@mui/icons-material";
import './index.css'

import {
  THEME_ICON_COLOR,
  THEME_SELECTED_ICON_COLOR,
  CustomDrawer,
  CustomDivider,
  DrawerHeader
} from "./constants/globalConstants";
import {menuLinks, otherLinks} from "./constants/menuItems";

const NavItem = ({ icon, altIcon, link, title }) => {
  const location = useLocation();
  return (
    <ListItem disablePadding sx={{ display: "block" }}>
      <ListItemButton
        sx={{
          minHeight: 64,
          justifyContent: "center",
          px: 2.5,
          backgroundColor:
            location.pathname === link
              ? THEME_SELECTED_ICON_COLOR
              : "transparent",
        }}
        component={Link}
        to={link}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: "auto",
            justifyContent: "center",
            color: THEME_ICON_COLOR,
          }}
        >
          {location.pathname !== link ? icon : altIcon}
        </ListItemIcon>
      </ListItemButton>
    </ListItem>
  );
};

const AppNavigator = () => {
  return (
    <Box className="appMainContainer" sx={{ display: "flex" }}>
      <CssBaseline />
      <CustomDrawer variant="permanent">
        <DrawerHeader>
          <LightModeOutlined sx={{ color: THEME_ICON_COLOR }} />
        </DrawerHeader>
        <CustomDivider />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <List sx={{ flex: 1, p: 0 }}>
            {menuLinks.map(({ icon, altIcon, link, title }, index) => (
              <NavItem
                icon={icon}
                altIcon={altIcon}
                link={link}
                title={title}
                key={index}
              />
            ))}
          </List>
          <CustomDivider />
          <List
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              p: 0,
            }}
          >
            {otherLinks.map(({ icon, altIcon, link, title }, index) => (
              <NavItem
                icon={icon}
                altIcon={altIcon}
                link={link}
                title={title}
                key={index}
              />
            ))}
          </List>
        </Box>
      </CustomDrawer>

      <Box component="main" sx={{ p: 3, paddingLeft: 12, paddingRight: 5, width: '100vw' }}>
          <Routes>
            {menuLinks.map(({ link, title, component }) => (
              <Route key={title} path={link} element={component} />
            ))}
          </Routes>
          <Routes>
            {otherLinks.map(({ link, title, component }) => (
              <Route key={title} path={link} element={component} />
            ))}
          </Routes>
        </Box>
    </Box>
  );
};

export default AppNavigator;
