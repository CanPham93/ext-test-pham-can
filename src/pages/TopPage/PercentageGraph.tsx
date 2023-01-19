import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  chart: {
    backgroundColor: "#2E2E2E",
    height: 320,
  },
  title: {
    text: '',
    enabled: false
  },
  credits: {
    enabled: false
  },
  xAxis: {
    gridLineWidth: 1,
    gridLineColor: "#777777",
    lineWidth: 0,
    categories: ['6月', '7月', '8月', '9月', '10月', '11月',
      '12月', '1月', '2月', '3月', '4月', '5月'],
  },
  yAxis: {
    title: {
      text: '',
      enabled: false
    },
    visible: false,
  },

  legend: {
    enabled: false
  },

  series: [{
    name: 'Kanw',
    color: '#FFCC21',
    data: [20, 18, 13, 15, 14, 12, 15, 12, 11, 10, 9, 10]

  }, {
    name: 'Kanw 2',
    color: '#8FE9D0',
    data: [20, 16, 15, 13, 12, 10, 9, 8, 7, 6, 5, 5]
  }]
};



const PercentageGraph: React.FC<any> = (props: any) => {
  return <>
    <div style={{ height: "100%" }}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  </>;
};

export default PercentageGraph;