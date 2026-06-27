function TransactionList({
  transactions,
  deleteTransaction
}) {

  return (

    <div className="bg-white p-5 rounded shadow">

      <h2 className="text-2xl font-bold mb-4">
        Recent Transactions
      </h2>

      {transactions.map((transaction, index) => (

        <div
          key={index}
          className="border p-3 rounded mb-3 flex justify-between items-center"
        >

          <div>

            <h3 className="font-bold">
              {transaction.title}
            </h3>

            <p className="text-gray-500">
              {transaction.category}
            </p>

          </div>

          <div className="flex items-center gap-4">

            <p
              className={
                transaction.type === "Expense"
                ? "text-red-500 font-bold"
                : "text-green-500 font-bold"
              }
            >
              {transaction.type === "Expense" ? "-" : "+"}
              ₹{transaction.amount}
            </p>

            <button
              onClick={() => deleteTransaction(index)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Delete
            </button>

          </div>

        </div>

      ))}

    </div>
  );
}

export default TransactionList;