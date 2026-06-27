import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

function PieChart({ transactions }) {

  const food = transactions
    .filter((t) => t.category === "Food")
    .reduce((acc, curr) => acc + Number(curr.amount), 0);

  const travel = transactions
    .filter((t) => t.category === "Travel")
    .reduce((acc, curr) => acc + Number(curr.amount), 0);

  const shopping = transactions
    .filter((t) => t.category === "Shopping")
    .reduce((acc, curr) => acc + Number(curr.amount), 0);

  const data = {

    labels: [
      "Food",
      "Travel",
      "Shopping"
    ],

    datasets: [
      {
        data: [
          food,
          travel,
          shopping
        ],

        backgroundColor: [
          "#ef4444",
          "#3b82f6",
          "#22c55e"
        ]
      }
    ]
  };

  return (

    <div className="bg-white p-5 rounded shadow mt-5">

      <h2 className="text-2xl font-bold mb-4">
        Spending Breakdown
      </h2>

      <Pie data={data} />

    </div>
  );
}

export default PieChart;