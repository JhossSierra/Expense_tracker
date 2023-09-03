import React from 'react';
import { VictoryPie, VictoryLabel } from 'victory';
import { useGlobalState } from '../context/globalState';

const ExpenseChart = () => {
const {transactions} = useGlobalState()


const totalIncomes = transactions.filter((transaction)=>transaction.amount>0).reduce((acc,transaction)=>(acc=+transaction.amount),0);


const totalExpenses = transactions.filter((transaction)=>transaction.amount<0).reduce((acc,transaction)=>(acc=+transaction.amount),0)*-1;

 
    if (totalIncomes>0){
        return (<>
            <VictoryPie 
          colorScale={['#8b2000','#08bc2f']}
          data={[
              {x:'Expenses',y:totalExpenses,},
              {x:'Incomes',y:totalIncomes,}
          ]}
          animate={{duration:1000}}
          labelComponent={<VictoryLabel angle={45} style={{fill:'white'}}/>
          }/> 
      </>)
    }
};

export default ExpenseChart;