import { useState, useEffect } from "react";
import API from "../services/api";

import Navbar from "../components/Navbar";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
import PieChart from "../components/PieChart";

function Dashboard() {
  const [transactions, setTransactions] = useState([]);
  const [editingTransaction, setEditingTransaction] = useState(null);
  // Fetch all transactions
  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const res = await API.get("/transactions");
      setTransactions(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Add transaction
  const addTransaction = async (transaction) => {
    try {
      const res = await API.post("/transactions", transaction);

      setTransactions((prev) => [...prev, res.data]);
    } catch (error) {
      console.log(error);
    }
  };

  // Delete transaction
  const deleteTransaction = async (id) => {
    try {
      await API.delete(`/transactions/${id}`);

      setTransactions((prev) =>
        prev.filter((transaction) => transaction._id !== id)
      );
    } catch (error) {
      console.log(error);
    }
  };
  const editTransaction = (transaction) => {
  setEditingTransaction(transaction);
};
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, curr) => acc + Number(curr.amount), 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, curr) => acc + Number(curr.amount), 0);

  const balance = income - expense;

  return (
    <div className="bg-blue-900 min-h-screen">
      <Navbar />

      <div className="p-10">
        <h1 className="text-4xl font-bold mb-6 text-white">
          Expense Dashboard
        </h1>

        <div className="grid grid-cols-3 gap-5 mb-10">
          <div className="bg-yellow-400 p-5 rounded shadow">
            <h2 className="text-gray-800">Total Balance</h2>
            <p className="text-4xl font-bold mt-2">₹{balance}</p>
          </div>

          <div className="bg-green-400 p-5 rounded shadow">
            <h2 className="text-gray-800">Total Income</h2>
            <p className="text-3xl font-bold mt-2">₹{income}</p>
          </div>

          <div className="bg-red-400 p-5 rounded shadow">
            <h2 className="text-gray-800">Total Expense</h2>
            <p className="text-3xl font-bold mt-2">₹{expense}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
         <TransactionForm
  addTransaction={addTransaction}
  editingTransaction={editingTransaction}
/>

          <TransactionList
  transactions={transactions}
  deleteTransaction={deleteTransaction}
  editTransaction={editTransaction}
/>
        </div>

        <div className="mt-8">
          <PieChart transactions={transactions} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;