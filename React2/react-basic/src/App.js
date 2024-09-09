import { useState, useEffect } from "react";
import FormComponent from "./Component/FormConponent";
import Transaction from "./Component/Transaction";
import DataContext from "./data/DataContext";
import ReportComponent from "./Component/ReportComponent";
// import "./App.css";

function App() {
  const initState = [
    {id:1 ,title:'Salary', amount:100000},
    {id:2 ,title:'Gas', amount:-4000},
    {id:3 ,title:'Food/Baverage', amount:-3000},
    {id:4 ,title:'OT', amount:5000}
  ]
  const [items, setItems] = useState(initState);
  const [reportIncome, setReportIncome] = useState(0);
  const [reportExpense, setReportExpense] = useState(0);

  const onAddNewItem = (newitem) => {
    console.log("Send from FormComponent", newitem);
    setItems((prevItem) => {
      return [newitem, ...prevItem];
    });
  };

  useEffect(()=>{
    const amount = items.map(items=>items.amount)
    console.log('Obj Amount=',amount);
    
  },[items])

  return (
    <DataContext.Provider value={
      { income: 10000, 
      expense: -1000, 
      balance: 9000
      }
      }>
      <h1 className="m-5 p-5 text-center text-orange-600 text-5xl">
        Money Report
      </h1>
      <ReportComponent />
      <FormComponent onAddItem={onAddNewItem} />
      <Transaction items={items} />
    </DataContext.Provider>
  );
}

export default App;
