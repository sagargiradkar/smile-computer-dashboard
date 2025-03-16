import React, { useState } from "react";

const AddExpense = ({ onAddExpense }) => {
  const [expense, setExpense] = useState({
    description: "",
    amount: "",
    date: new Date().toISOString().split("T")[0], // Default to today's date
  });

  const handleChange = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!expense.description || !expense.amount) {
      alert("Please fill in all fields.");
      return;
    }
    onAddExpense({ ...expense, id: Date.now() });
    setExpense({ description: "", amount: "", date: new Date().toISOString().split("T")[0] });
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md border">
      <h2 className="text-xl font-bold mb-4">Add Expense</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="description"
          value={expense.description}
          onChange={handleChange}
          placeholder="Expense Description"
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="amount"
          value={expense.amount}
          onChange={handleChange}
          placeholder="Amount (₹)"
          className="w-full p-2 border rounded"
        />
        <input
          type="date"
          name="date"
          value={expense.date}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default AddExpense;
