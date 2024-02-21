import React, { useState } from 'react';
import './App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


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
            <TableContainer Container center>
                <Table>
                    <TableHead>
                         <TableRow>
                            <TableCell>Description</TableCell>
                            <TableCell>Amount</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                        <TableBody>
                        { transactions.map((t)=> (
                                <TableRow key={t.id}>
                                    <TableCell>{t.description}</TableCell>
                                    <TableCell>{t.amount}</TableCell>
                                    <TableCell>
                                        <button className="dot" onClick={e => handleEdit(t)}>Edit</button>
                                        <button className="dot1" onClick={e =>handleDelete(t.id)}>Delete</button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                </Table>
            </TableContainer>
                    
                    <div className="tab">
                        <h1>Add your Details</h1>
                        <form onSubmit={addTransaction} className="new">
                            <TextField type ="text" className ="border" 
                                placeholder ="Description" onChange = {e => setDescription(e.target.value)} value={description} required/><br/><br/>
                            {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
                            <TextField type ="text" className ="border" 
                                placeholder ="Amount" onChange = {e => setAmount(e.target.value)} value={amount} required/><br/><br/>
                                {/* // <button className="new1" type="Submit">Add Details</button> */}
                                <Button className="new1" type="Submit" variant="contained">Add details</Button>
                        </form> 
                    </div>
                </div>
            </div>
        </div>
    )
    
}


export default App;