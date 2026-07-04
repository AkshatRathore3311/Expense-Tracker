function TransactionList({ transactions, deleteTransaction }) {
  return (
    <div className="bg-white p-5 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">
        Recent Transactions
      </h2>

      {transactions.length === 0 ? (
        <p className="text-gray-500">
          No transactions found.
        </p>
      ) : (
        transactions.map((transaction) => (
          <div
            key={transaction._id}
            className="border p-3 rounded mb-3 flex justify-between items-center"
          >
            <div>
              <h3 className="font-bold">
                {transaction.text}
              </h3>

              <p className="text-gray-900">
                {transaction.category}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <p
                className={
                  transaction.type === "expense"
                    ? "text-red-500 font-bold"
                    : "text-green-500 font-bold"
                }
              >
                {transaction.type === "expense" ? "-" : "+"}
                ₹{transaction.amount}
              </p>

              <button
                onClick={() => deleteTransaction(transaction._id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default TransactionList;