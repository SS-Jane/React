import { useState } from "react";
import FormComponent from "./Component/FormConponent";
import Transaction from "./Component/Transaction";

// import "./App.css";

function App() {
  
  const [items, setItems] = useState([]);

  
  const onAddNewItem = (newitem) => {
    console.log("Send from FormComponent", newitem);
    setItems((prevItem) => {
      return [newitem, ...prevItem];
    });
  };
  return (
    <div>
      <h1 className="m-5 p-5 text-center text-orange-600 text-5xl">
        Money Report
      </h1>
      <FormComponent onAddItem={onAddNewItem} />
      <Transaction items={items} />
    </div>
  );
}

export default App;
