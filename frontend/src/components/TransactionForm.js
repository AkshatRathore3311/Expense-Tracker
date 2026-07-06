import { useState, useEffect } from "react";


function TransactionForm({ addTransaction, editingTransaction, }) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("expense");
  useEffect(() => {
  if (editingTransaction) {
    setText(editingTransaction.text);
    setAmount(editingTransaction.amount);
    setCategory(editingTransaction.category);
    setType(editingTransaction.type);
  }
}, [editingTransaction]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text || !amount || !category) {
      alert("Please fill all fields");
      return;
    }

    const newTransaction = {
      text,
      amount: Number(amount),
      category,
      type,
    };

    addTransaction(newTransaction);

    setText("");
    setAmount("");
    setCategory("");
    setType("expense");
  };

  return (
    <div className="bg-blue-700 p-5 rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-white">
        Add Transaction
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Transaction Name"value={text} onChange={(e) => setText(e.target.value)}
          className="border  bg-teal-300 w-full p-2 mb-3 rounded"
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border w-full p-2 mb-3 rounded"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border w-full p-2 mb-3 rounded"
        >
          <option value="">Select Category</option>
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Shopping">Shopping</option>
        </select>

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border w-full p-2 mb-3 rounded"
        >
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>

        <button
          type="submit"
          className="bg-black text-white w-full p-2 rounded hover:bg-gray-800"
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default TransactionForm;