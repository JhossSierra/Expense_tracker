import React from 'react';
import { useGlobalState } from '../../context/globalState';
import TransactionItem from './TransactionItem';


function TransactionsList(props) {
    
    const {transactions} = useGlobalState()
    TransactionItem
    
    return (
    
        <>
        <h3 className='text-slate-300 text-xl font-bold block w-full'>History</h3>
        <ul>
        {transactions.map(transaction =>(
            <TransactionItem transaction={transaction} key={transaction.id}/>))}
        
        </ul>
        
        </>
    )
}

export default TransactionsList;