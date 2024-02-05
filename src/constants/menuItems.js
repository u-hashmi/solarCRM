import {
    LoyaltyOutlined,
    LoyaltyRounded,
    DashboardOutlined,
    DashboardRounded,
    ReceiptOutlined,
    ReceiptRounded,
    BookOutlined,
    AssessmentOutlined,
    LogoutOutlined,
    SettingsOutlined,
    BookRounded,
    AssessmentRounded,
    SettingsRounded,
    LogoutRounded,
  } from "@mui/icons-material";

  import {
    Dashboard,
    Settings,
    Invoice,
    Ledger,
    Reports,
    Sales,
  } from "../components";

const menuLinks = [
    {
      icon: <DashboardOutlined />,
      altIcon: <DashboardRounded />,
      link: "/",
      title: "Dashboard",
      component: <Dashboard />,
    },
    {
      icon: <LoyaltyOutlined />,
      altIcon: <LoyaltyRounded />,
      link: "/sales",
      title: "Sales",
      component: <Sales />,
    },
    {
      icon: <ReceiptOutlined />,
      altIcon: <ReceiptRounded />,
      link: "/invoice",
      title: "Invoice",
      component: <Invoice />,
    },
    {
      icon: <BookOutlined />,
      altIcon: <BookRounded />,
      link: "/ledger",
      title: "Ledger",
      component: <Ledger />,
    },
    {
      icon: <AssessmentOutlined />,
      altIcon: <AssessmentRounded />,
      link: "/reports",
      title: "Reports",
      component: <Reports />,
    },
  ];
  
  const otherLinks = [
    {
      icon: <SettingsOutlined />,
      altIcon: <SettingsRounded />,
      link: "/settings",
      title: "Settings",
      component: <Settings />,
    },
    {
      icon: <LogoutOutlined />,
      altIcon: <LogoutRounded />,
      link: "/logout",
      title: "Logout",
      component: <Settings />,
    },
  ];

    export { menuLinks, otherLinks };