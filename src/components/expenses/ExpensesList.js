import React from "react";

const ExpensesList = ({ expenses }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border">
      <h2 className="text-xl font-bold mb-4">Expense List</h2>
      {expenses.length === 0 ? (
        <p className="text-gray-500">No expenses recorded.</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Date</th>
              <th className="border p-2">Description</th>
              <th className="border p-2">Amount (₹)</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id} className="border">
                <td className="border p-2">{expense.date}</td>
                <td className="border p-2">{expense.description}</td>
                <td className="border p-2 text-right">{expense.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ExpensesList;
