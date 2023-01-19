import React from "react";
import styled from "@emotion/styled";


const AchievementRateComponent = styled("div")({
  position: "relative",
  height: "100%",
  display: "flex"
});

const PieChartComponent = styled("div")({
  position: "absolute",
  transform: "translate(-50%, -50%)",
  top: "50%",
  left: "50%",
  width: 180,
  height: 180,
});


const SvgPieChart = styled("svg")({
  display: "block",
  margin: "0px auto",
  width: "100%",
  height: "100%",
  filter: "drop-shadow(0 0 6px #FC7400)",
});

const TextPieChart = styled("div")({
  position: "absolute",
  transform: "translate(-50%, -50%)",
  top: "50%",
  left: "50%",
  fontSize: 18,
  lineHeight: "22px",
  textAlign: "center",
  color: "#FFFFFF",
  textShadow: "0px 0px 6px #FC7400",
  display: "flex",
  alignItems: "center",
});

const PercentPieChart = styled("span")({
  fontSize: 26,
  lineHeight: "30px",
  marginLeft: 4,
});


const AchievementRate: React.FC<any> = (props: any) => {
  const dataPieChart = { percent: 75, date: "05/21" }
  return <AchievementRateComponent>
    <img width="100%" style={{ objectFit: "cover", maxHeight: 320 }} height="100%" src="/images/main_photo.png" alt="/images/main_photo.png" />
    <PieChartComponent>
      <SvgPieChart viewBox="0 0 36 36" className="circular-chart">
        <path className="circle"
          strokeDasharray={`${dataPieChart.percent}, 100`}
          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
          stroke="#FFFFFF"
        />
      </SvgPieChart>
      <TextPieChart>{dataPieChart.date} <PercentPieChart>{dataPieChart.percent}%</PercentPieChart></TextPieChart>
    </PieChartComponent>
  </AchievementRateComponent>;
};

export default AchievementRate;