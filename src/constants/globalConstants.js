import { Divider, styled } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import { Box } from "@mui/system";

const APP_SIDEBAR_COLOR = "linear-gradient(180deg, #000000 0%, #18172B 100%)";
const APP_MAIN_AREA_COLOR = "linear-gradient(180deg, #000000 0%, #221D40 100%)";
const THEME_ICON_COLOR = "rgba(255, 255, 255, 0.50)";
const THEME_APP_CARD = "rgba(255, 255, 255, 0.04)";
const THEME_SELECTED_ICON_COLOR = "rgba(255, 255, 255, 0.04)";
const APP_LINE_BORDER = "1px solid #221D4055";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const CustomDrawer = styled(MuiDrawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    background: APP_SIDEBAR_COLOR,
    borderRight: APP_LINE_BORDER,
  },
}));

const CustomDivider = styled(Divider)(({ theme }) => ({
  borderBottom: APP_LINE_BORDER,
}));

const Item = styled(Box)(({ theme }) => ({
  justifyContent: "space-between",
  display: "flex",
  flexDirection: "row",
  gap: "10px",
  ...theme.typography.body2,
  margin: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  flexGrow: 1,
}));


export {
  APP_LINE_BORDER,
  APP_MAIN_AREA_COLOR,
  APP_SIDEBAR_COLOR,
  THEME_ICON_COLOR,
  THEME_APP_CARD,
  THEME_SELECTED_ICON_COLOR,
  CustomDrawer,
  CustomDivider,
  DrawerHeader,
  Item,
};
