import {useGlobalState} from '../context/globalState'


function Balance() {
    
const {transactions} = useGlobalState()
const amount = transactions.map(transaction=>transaction.amount)
const total = amount.reduce((acc,item)=>(acc+=item),0)

    return (
        <div className='flex justify-between'>
            <h3>Balance</h3>
            <h1 className='text-2xl font-bold'>${JSON.stringify(total,null,2)}</h1>   
        </div>
    );
}

export default Balance;