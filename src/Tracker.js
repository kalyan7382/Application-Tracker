import React, { useState } from 'react';
import './App.css';

function App() {
    const[description, setDescription]= useState('');
    const[amount,setAmount]= useState(null);
    const[transactions, setTransaction]= useState([]);
    const[editId, setEditId]= useState(null);

    const addTransaction=(e) =>{
        e.preventDefault();
        if(editId){
            const newTransaction = transactions.map((t)=>(
                t.id === editId ? {id: editId,description,amount} : t
            ))
            setTransaction(newTransaction);
            setEditId(null)
        }else{
            setTransaction([...transactions,{id: Date.now(),description,amount}])
        }
        setDescription('')
        setAmount(0)
    }
    const handleEdit = (t) => {
        setEditId(t.id);
        setDescription(t.description);
        setAmount(t.amount);
    }
    const handleDelete = (id) => {
        setTransaction(transactions.filter(t => t.id !== id))
    }
    return(
        <div>
            <h1>Personal Tracker</h1>
            <div>
                <div>
                    <h2>Transcation</h2>
                    <table>
                        <thead>
                            <tr>
                            <th>Description</th>
                            <th>Amount</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            { transactions.map((t)=> (
                                <tr key={t.id}>
                                    <td>{t.description}</td>
                                    <td>{t.amount}</td>
                                    <td>
                                        <button className="dot" onClick={e => handleEdit(t)}>Edit</button>
                                        <button className="dot1" onClick={e =>handleDelete(t.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="tab">
                        <h1>Add your Details</h1>
                        <form onSubmit={addTransaction} className="new">
                            <input type ="text" className ="border" 
                                placeholder ="Description" onChange = {e => setDescription(e.target.value)} value={description} /><br/><br/>
                            <input type ="number" className ="border" 
                                placeholder ="Amount" onChange = {e => setAmount(e.target.value)} value={amount} /><br/><br/>
                                <button className="new1" type="Submit">Add Details</button>
                        </form> 
                    </div>
                </div>
            </div>
        </div>
    )
    
}


export default App;