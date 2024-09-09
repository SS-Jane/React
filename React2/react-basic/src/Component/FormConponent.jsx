import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid"; // auto generate ID

export default function FormComponent(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [fromValid, setFormValid] = useState(false);

  const inputTitle = (e) => {
    setTitle(e.target.value);
  };

  const inputAmount = (e) => {
    setAmount(e.target.value);
  };

  const saveItem = (e) => {
    e.preventDefault();
    const itemData = {
      id: uuidv4(),
      title: title,
      amount: Number(amount),
    };
    props.onAddItem(itemData);
    setAmount(0);
    setTitle("");
  };

  useEffect(() => {
    const checkData = title.trim().length > 0 && Number(amount) !== 0;

    setFormValid(checkData);
  }, [amount, title]);

  return (
    <>
      <div className="w-1/4">
        <form onSubmit={saveItem}>
          <div className="form-control block w-full">
            <label className="block text-sm font-medium text-slate-700 ">
              List name
            </label>
            <input
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
                     focus:invalid:border-pink-500 focus:invalid:ring-pink-50"
              type="text"
              placeholder="Enter list name"
              onChange={inputTitle}
              value={title}
            ></input>
          </div>
          <div className="form-control block m-1">
            <label className="block text-sm font-medium text-slate-700">
              Amount
            </label>
            <input
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-50"
              type="number"
              placeholder="Enter amount(+ Income / - Expenses )"
              onChange={inputAmount}
              value={amount}
            ></input>
          </div>
          <div className="block m-1">
            <button
              className="block btn-primary w-full my-2 px-2 py-2 text-white bg-sky-500 hover:bg-sky-600 rounded-md shadow-md  shadow-black/20 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
              type="summit"
              disabled={!fromValid}
            >
              Add list
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
