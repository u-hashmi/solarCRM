import { Card } from "@mui/material";
import React from "react";
import "./componentStyles.css";
import { CorporateFareRounded } from "@mui/icons-material";
import ReportsGrid from "../dataGrids/ReportsGrid";

const reportAreas = [
  {
    title: "Sales",
    description: "Insights on all sales!",
    icon: <CorporateFareRounded  />
  },
  {
    title: "Ledger",
    description: "All you ledger need here!",
    icon: <CorporateFareRounded  />
  },
  {
    title: "Settings",
    description: "Modify your settings here!",
    icon: <CorporateFareRounded />
  },
];

const Reports = () => {
  return (
    <div>
      <h2 style={{ color: "white", lineHeight: "2px" }}>Reports</h2>
      <p style={{ color: "white" }}>Generate reports with ease!</p>
      <div className="cardsAreas">
        {reportAreas.map((item, index) => (
          <Card variant="outlined" className="revenueCard lg:hidden" key={index}>
            <div className="iconDiv cardTagIcon">
              {item.icon}
            </div>
            <div className="descriptionDiv">
              <text className="sectionHeading">{item.title}</text>
              <text className="sectionLabel">{item.description}</text>
            </div>
          </Card>
        ))}
      </div>
      <div className="dataGridHolder">
        <ReportsGrid />
      </div>
    </div>
  );
};

export default Reports;
