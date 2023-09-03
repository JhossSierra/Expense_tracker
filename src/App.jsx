import './App.css'
import Balance from './components/Balance'
import ExpenseChart from './components/ExpenseChart'
import Header from './components/Header'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionForm from './components/transactions/TransactionForm'
import TransactionsList from './components/transactions/TransactionsList'

import { GlovalProvider } from './context/globalState'


function App() {


  return (
    <GlovalProvider>
    <div className='bg-zinc-950 text-white h-screen flex justify-center sm: '>
      <div className='container mx-auto w-2/3'>
      <div className='bg-zinc-800 p-10 rounded-lg flex gap-x-2'>
          <div className='w-1/2'>
            <h1 className='text-xl font-bold'>Expense Traker</h1>
            <IncomeExpenses/>
            <Balance/>
            <TransactionForm />
          </div> 
          <div className='w-1/2'>
        <TransactionsList/>
          </div>
      </div>  
      </div>
    
    <div className='w-full'>
    <ExpenseChart/>
    </div>
  
    
    </div>
   </GlovalProvider>    
  )
}

export default App
