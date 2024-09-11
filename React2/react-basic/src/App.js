import { useState, useEffect } from "react";
import FormComponent from "./Component/FormConponent";
import Transaction from "./Component/Transaction";
import DataContext from "./data/DataContext";
import ReportComponent from "./Component/ReportComponent";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [reportIncome, setReportIncome] = useState(0);
  const [reportExpense, setReportExpense] = useState(0);

  const onAddNewItem = (newitem) => {
    setItems((prevItem) => {
      return [newitem, ...prevItem];
    });
  };

  useEffect(() => {
    const amount = items.map((items) => items.amount);
    const totalIncome = amount
      .filter((e) => e > 0)
      .reduce((totalIncome, e) => (totalIncome += e), 0);
    const totalExpense = amount
      .filter((e) => e < 0)
      .reduce((totalExpense, e) => (totalExpense += e), 0);

    setReportIncome(totalIncome);
    setReportExpense(totalExpense);
  }, [items, reportIncome, reportExpense]);

  // REDUCE STATE
  // const [showReport, setShowReport] = useState(false);
  // const reducer = (state, action) => {
  //   switch (action.type) {
  //     case "SHOW":
  //       return setShowReport(true);
  //     case "HIDE":
  //       return setShowReport(false);
  //   }
  // };
  // const [result, dispatchEvent] = useReducer(reducer, showReport);

  return (
    <DataContext.Provider
      value={{ income: reportIncome, expense: reportExpense }}
    >
      <h1 className="m-5 p-5 text-center text-orange-600 text-5xl">
        Money Report
      </h1>
      <Router>
        
          <ui className="horizontal-menu">
            <li>
              <Link to="/">Account data</Link>
            </li>
            <li>
              <Link to="/insert">Add list</Link>
            </li>
          </ui>
          <Routes>
            <Route path="/" exact element={<ReportComponent />} />
            <Route
              path="/insert"
              element={
                <>
                  <FormComponent onAddItem={onAddNewItem} />
                  <Transaction items={items} />
                </>
              }
            />
          </Routes>
        
      </Router>
    </DataContext.Provider>
  );
}

export default App;
