import { useEffect, useState } from "react";
import { UserData } from "../data.js";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export default function PiePage() {
  const [data, setData] = useState({
    labels: UserData.map(item => item.year),
    datasets: [{
      label: "User Gained",
      data: UserData.map(item => item.usergain),
      backgroundColor: ['red', 'blue', 'yellow','green','brown'],
    }]
  });

  return (
    <>
      <h1>Pie</h1>
      <div style={{width: 700}}>
        <Pie data={data} />
      </div>
    </>
  );
}