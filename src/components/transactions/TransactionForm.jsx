import React, { useState } from 'react';
import { useGlobalState } from '../../context/globalState';


function TransactionForm(props) {
const {addTransaction} = useGlobalState()

const [text,setText] = useState('')
const [amount,setAmount] = useState('')

const onSubmit= (e)=> {
    e.preventDefault();
    
    if (isNaN(text)&& text.length>0 && (isNaN(amount)==false) && amount.length>0 )
    
    {addTransaction({id: window.crypto.randomUUID(),
      text, 
      amount:+amount});
    //reset del espacio
      e.target.reset()};
    
};

    return (
        <div>
          <form onSubmit={onSubmit}>
            <input type="text" placeholder='Enter a description' onChange={(e)=>setText(e.target.value)} className='bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full'/>
            <input type="number" step={0.01} placeholder='Enter an amount' onChange={(e)=>setAmount(e.target.value)} className='bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full'/>
            
            <button className='bg-indigo-700 text-white px-3 py-2 rounded-lg block mb-2 w-full'>Add Transaction</button>
          
          </form>
        </div>
    );
}

export default TransactionForm;