import { useContext } from "react";
import DataContext from "../data/DataContext";

export default function ReportComponent() {
  const { income, expense } = useContext(DataContext);

  const balance = income - Math.abs(expense);
  const total = income + Math.abs(expense);
  const colorBalane = balance < 0 ? "bg-red-500 text-white py-2 rounded-md" : "bg-green-500 text-white py-2 rounded-md";

  const incomeWidth = `${(income / total) * 100}%`;
  const expenseWidth = `${(expense / total) * 100}%`;
  return (
    <div className="w-1/4">
      <div className="flex flex-row mb-4 h-12 items-center justify-center">
        <div
          className="bg-green-400 text-white px-2 py-2 rounded-md flex items-center justify-between"
          style={{ width: incomeWidth }}
        >
          <span>{income}</span>
        </div>
        <div
          className="bg-red-400 text-white px-2 py-2 rounded-md flex items-center justify-between"
          style={{ width: expenseWidth }}
        >
          <span>{expense}</span>
        </div>
      </div>
      <div className="items-center my-1 justify-center text-center">
        <p className={colorBalane}>Balane : {balance}</p>
      </div>
    </div>
  );
}
