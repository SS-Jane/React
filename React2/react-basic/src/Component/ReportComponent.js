import { useContext } from "react"
import DataContext from "../data/DataContext"


export default function ReportComponent() {
    const {income, expense, balance} = useContext(DataContext)
    return (
        <div>
            <p>Income : {income}</p>
            <p>Expense : {expense}</p>
            <p>Balance : {balance}</p>
        </div>
    )
}