export default function FormComponent() {
    
    const inputTitle = (e) => {
        console.log(e.target.value);
    }

    const inputAmount = (e) => {
        console.log(e.target.value);
        
    }
    
    const saveItem = (e) => {
        e.preventDefault()
        console.log('Save');
    }

    const clearForm = (e) => {

    }


    return (<>
        <div>
            <form onSubmit={saveItem}>
                <div className="form-control block m-1">
                    <label className="block text-sm font-medium text-slate-700 ">List name</label>
                    <input className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
                     focus:invalid:border-pink-500 focus:invalid:ring-pink-50" type="text" placeholder="Enter list name" onChange={inputTitle}></input>
                </div>
                <div className="form-control block m-1">
                    <label className="block text-sm font-medium text-slate-700">Amount</label>
                    <input className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-50" type="number" placeholder="Enter amount(+ Income / - Expenses )" onChange={inputAmount}></input>
                </div>
                <div className="block m-1">
                    <button className="block btn-primary w-full my-2 px-2 py-2 text-white bg-sky-500 hover:bg-sky-600 rounded-md shadow-md  shadow-black/20" type="summit">Add list</button>
                </div>
            </form>
        </div>
    </>)
    
}