import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const[name , setName] = useState('');
  const[datetime , setDatetime] = useState('');
  const[description,setDescription] = useState('');
  const [transactions,setTransactions] = useState([]);

    useEffect(()=>{
        getTransactions().then(transactions => setTransactions(transactions))
    },[transactions])


    async function getTransactions(){
      const url = import.meta.env.VITE_API_URL+'/transactions';
      const response = await fetch(url);
      return await response.json();
    }

    const price = name.split(' ')[0];
  function addNewTransaction(e){
      e.preventDefault();
      const url = import.meta.env.VITE_API_URL+'/transaction';
      fetch(url,{
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
          price : price,
          name : name.substring(price.length+1),
          datetime : datetime,
          description : description
        })
      }).then(res =>{res.json()
        .then(json=>
          {
            setName('');
            setDatetime('');
            setDescription('');
            console.log('result',json)
          }
        )})
  }
    let balance =0;
    for (const transaction of transactions){
      balance += transaction.price;
    }

    balance = balance.toFixed(2);
  return (
    <>
      <main>
        <h1>{balance} Rs</h1>
        <form onSubmit={addNewTransaction}>
          <div className="basic">
                <input type='text'value={name}
                 onChange={(e) => setName(e.target.value)} 
                placeholder={'+/- Income or Expense'}/>

                <input type='datetime-local' 
                value={datetime}
                 onChange={(e) => setDatetime(e.target.value)} />
          </div>
          <div className="description">
                 <input type='text'
                 value={description}
                 onChange={(e) => setDescription(e.target.value)}
                 placeholder={'Description'}/>
          </div>

          <button>Add new transaction</button>
        </form>

        <div className="transactions">
          {transactions.length >0 && transactions.map(transaction => (
            <div>
               <div className="transaction">
                <div className="left">

                  <div className="name">{transaction.name}</div>
                  <div className="description">{transaction.description}</div>

                </div>

                <div className="right">
                  <div className={"price" + (transaction.price > 0 ? " green" : " red")}>{transaction.price}</div>
                  <div className="datetime">{transaction.datetime}</div>
                </div>
            </div>
            </div>
          ))}
           
        </div>
      </main>
    </>
  )
}

export default App
