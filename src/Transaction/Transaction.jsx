import React, { useState } from 'react';
import './Transaction.css';

const App = () => {
  const [transactions] = useState([
    { id: 'VTR00001', status: 'disapproved', establishment: 'Masasa Beach', quantity: 2, amount: 60.00, date: 'Jun. 24, 2024 12:49 AM' },
    { id: 'VTR00002', status: 'paid', establishment: 'Calatagan Batangas', quantity: 30, amount: 300.00, date: 'Jun. 23, 2024 7:30 PM' },
    { id: 'VTR00003', status: 'paid', establishment: 'San Juan Batangas', quantity: 100, amount: 2000.00, date: 'Jul. 23, 2024 7:48 PM' },
    { id: 'VTR00004', status: 'paid', establishment: 'Calatagan Batangas', quantity: 2, amount: 60.00, date: 'Jul. 23, 2024 11:51 PM' },
    { id: 'VTRA00005', status: 'paid', establishment: 'Masasa Beach', quantity: 60, amount: 3440.00, date: 'Aug. 26, 2024 7:02 PM' },
    { id: 'VTRA00006', status: 'walk-in', establishment: 'Masasa Beach', quantity: 5, amount: 100.00, date: 'Aug. 30, 2024 11:10 AM' },
    { id: 'VTRA00007', status: 'walk-in', establishment: 'San Juan Batangas', quantity: 1, amount: 30.00, date: 'Sep. 2, 2024 2:41 AM' },
    { id: 'VTRA00008', status: 'walk-in', establishment: 'San Juan Batangas', quantity: 5, amount: 100.00, date: 'Sep. 2, 2024 2:43 AM' },
    { id: 'VTRA00010', status: 'paid', establishment: 'Calatagan Batangas', quantity: 100, amount: 2000.00, date: 'Oct. 14, 2024 4:32 PM' },
    { id: 'VTR00011', status: 'paid', establishment: 'Calatagan Batangas', quantity: 50, amount: 4500.00, date: 'Dec. 14, 2024 4:34 PM' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredTransactions = transactions.filter(transaction =>
    transaction.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    transaction.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
    transaction.establishment.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Transaction History</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Transaction ID</th>
              <th>Status</th>
              <th>Establishment</th>
              <th>Quantity</th>
              <th>Total Amount</th>
              <th>Transaction Date and Time</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.map(transaction => (
              <tr key={transaction.id}>
                <td>{transaction.id}</td>
                <td>{transaction.status}</td>
                <td>{transaction.establishment}</td>
                <td>{transaction.quantity}</td>
                <td>₱ {transaction.amount.toFixed(2)}</td>
                <td>{transaction.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
