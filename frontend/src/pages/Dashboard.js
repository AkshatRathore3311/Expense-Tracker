import PieChart from "../components/PieChart";
import { useState } from "react";


import Navbar from "../components/Navbar";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";

function Dashboard() {

  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {

    setTransactions([
      ...transactions,
      transaction
    ]);
  };

  const deleteTransaction = (index) => {

    const updated = transactions.filter(
      (_, i) => i !== index
    );

    setTransactions(updated);
  };

  const income = transactions
    .filter((t) => t.type === "Income")
    .reduce((acc, curr) => acc + Number(curr.amount), 0);

  const expense = transactions
    .filter((t) => t.type === "Expense")
    .reduce((acc, curr) => acc + Number(curr.amount), 0);

  const balance = income - expense;

  return (

    <div className="bg-gray-100 min-h-screen">

      <Navbar />

      <div className="p-10">

        <h1 className="text-4xl font-bold mb-6">
          Expense Dashboard
        </h1>

        <div className="grid grid-cols-3 gap-5 mb-10">

          <div className="bg-white p-5 rounded shadow">

            <h2 className="text-gray-500">
              Total Balance
            </h2>

            <p className="text-3xl font-bold mt-2">
              ₹{balance}
            </p>

          </div>

          <div className="bg-white p-5 rounded shadow">

            <h2 className="text-gray-500">
              Total Income
            </h2>

            <p className="text-3xl font-bold text-green-600 mt-2">
              ₹{income}
            </p>

          </div>

          <div className="bg-white p-5 rounded shadow">

            <h2 className="text-gray-500">
              Total Expense
            </h2>

            <p className="text-3xl font-bold text-red-600 mt-2">
              ₹{expense}
            </p>

          </div>

        </div>

        <div className="grid grid-cols-2 gap-5">

          <TransactionForm
            addTransaction={addTransaction}
          />

          <TransactionList
            transactions={transactions}
            deleteTransaction={deleteTransaction}
          />
         <PieChart transactions={transactions} 
         />
        </div>

      </div>

    </div>
  );
}

export default Dashboard;