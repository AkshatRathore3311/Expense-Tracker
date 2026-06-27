import { useState } from "react";

function TransactionForm({ addTransaction }) {

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("Expense");

  const handleSubmit = () => {

    const newTransaction = {
      title,
      amount,
      category,
      type
    };

    addTransaction(newTransaction);

    setTitle("");
    setAmount("");
    setCategory("");
    setType("Expense");
  };

  return (

    <div className="bg-white p-5 rounded shadow">

      <h2 className="text-2xl font-bold mb-4">
        Add Transaction
      </h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border w-full p-2 mb-3 rounded"
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

        <option value="">
          Select Category
        </option>

        <option>
          Food
        </option>

        <option>
          Travel
        </option>

        <option>
          Shopping
        </option>

      </select>

      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="border w-full p-2 mb-3 rounded"
      >

        <option>
          Expense
        </option>

        <option>
          Income
        </option>

      </select>

      <button
        onClick={handleSubmit}
        className="bg-black text-white w-full p-2 rounded"
      >
        Add Transaction
      </button>

    </div>
  );
}

export default TransactionForm;