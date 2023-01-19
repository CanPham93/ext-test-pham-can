import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Button, styled } from "@mui/material";

const BoxChart = styled("div")(() => ({
  marginTop: 56,
  width: "100%",
  background: "#414141",
  padding: "16px 32px",
}));

const HeaderChart = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  flexwrap: "wrap",
  color: "#FFFFFF",
  fontFamily: "inter-regular",

  "& .name": {
    fontSize: 15,
    lineHeight: "18px",
    letterSpacing: "0.15px",
    textTransform: "uppercase",
    minWidth: 96,
  },
  "& .date": {
    fontSize: 22,
    lineHeight: "27px",
    letterSpacing: "0.11px",
  },
}));

const TabChart = styled("div")(() => ({}));

const BoxTab = styled(Button)(() => ({
  background: "#FFFFFF",
  borderRadius: 11,
  fontSize: 15,
  lineHeight: "18px",
  letterSpacing: "0.075px",
  color: "#FFCC21",
  padding: "0 15px",
  paddingTop: 4,
  minWidth: 56,
  marginRight: 16,

  ":hover, &.active": {
    background: "#FFCC21",
    color: "#FFFFFF",
  },
}));

const BodyRecord: React.FC<any> = (props: any) => {
  const options = {
    chart: {
      backgroundColor: "#414141",
      height: 200,
    },
    title: {
      text: "",
      enabled: false,
    },
    credits: {
      enabled: false,
    },
    xAxis: {
      gridLineWidth: 1,
      gridLineColor: "#777777",
      lineWidth: 0,
      categories: [
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月",
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
      ],
    },
    yAxis: {
      title: {
        text: "",
        enabled: false,
      },
      visible: false,
    },

    legend: {
      enabled: false,
    },

    series: [
      {
        name: "Kanw",
        color: "#FFCC21",
        data: [20, 18, 13, 15, 14, 12, 15, 12, 11, 10, 9, 10],
      },
      {
        name: "Kanw 2",
        color: "#8FE9D0",
        data: [20, 16, 15, 13, 12, 10, 9, 8, 7, 6, 5, 5],
      },
    ],
  };

  return (
    <>
      <BoxChart>
        <HeaderChart>
          <div className="name">
            BODY
            <br />
            RECORD
          </div>
          <div className="date">2021.05.21</div>
        </HeaderChart>
        <HighchartsReact highcharts={Highcharts} options={options} />
        <TabChart>
          <BoxTab>日</BoxTab>
          <BoxTab>週</BoxTab>
          <BoxTab>月</BoxTab>
          <BoxTab className="active">年</BoxTab>
        </TabChart>
      </BoxChart>
    </>
  );
};

export default BodyRecord;
