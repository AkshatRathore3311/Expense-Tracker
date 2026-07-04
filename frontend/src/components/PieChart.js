import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
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
    labels: ["Food", "Travel", "Shopping"],

    datasets: [
      {
        label: "Expenses",
        data: [food, travel, shopping],
        backgroundColor: [
          "#ef4444",
          "#3b82f6",
          "#22c55e",
        ],
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="bg-white p-5 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">
        Spending Breakdown
      </h2>

      {food + travel + shopping === 0 ? (
        <p className="text-gray-500">
          No expense data available.
        </p>
      ) : (
        <div className="flex justify-start">
        <div className="w-64 h-64 ">
  <Pie
    data={data}
    options={{
      responsive: true,
      maintainAspectRatio: false,
    }}
  />
  </div>
</div>
      )}
    </div>
  );
}

export default PieChart;