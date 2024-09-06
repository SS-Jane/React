import Item from "./Item";
import { v4 as uuidv4 } from "uuid"; // auto generate ID
// import "./Transaction.css";
const data = [
  { title: "Car maintain", amount: 20000 },
  { title: "Salary", amount: 50000 },
  { title: "Food/Beverage", amount: 3000 },
  { title: "Rental", amount: 2500 },
  { title: "Credit/Loan", amount: 7500 },
];

export default function Transaction() {
  return (
    <div className="item-list list-none p-0 mb-40">
      {data.map((e) => {
        return <Item key={uuidv4()} {...e} />;
      })}
    </div>
  );
}

//list-none p-0 mb-40
