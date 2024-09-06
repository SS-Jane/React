import FormComponent from "./Component/FormConponent";
import Transaction from "./Component/Transaction";
// import "./App.css";



function App() {
  return (
    <div>
      <h1 className="m-5 p-5 text-center text-orange-600 text-5xl">Money Report</h1>
      <FormComponent />
      <Transaction />
    </div>
  );
}

export default App;
