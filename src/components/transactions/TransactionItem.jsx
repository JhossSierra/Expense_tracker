import React from 'react';
import { useGlobalState } from '../../context/globalState';


export const TransactionItem=({transaction}) => {
    const {deleteTransaction} = useGlobalState()
    
    return (
        <li className='bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full '>
            <div key={transaction.id} className='flex justify-between items-center'>
                    <p className='text-sm'>{transaction.text}</p>
                    <div className='w-1/3 flex justify-between'>
                        <span>${transaction.amount}</span>
                        <div className='bg-red-900 text-center rounded-lg px-2 py-3 w-5 h-5 flex justify-center items-center'>

                        <button  onClick={(e)=>deleteTransaction(transaction.id)}>x</button>
                        </div>
                    
                    </div>
            </div>
        </li>
    );
};


export default TransactionItem;