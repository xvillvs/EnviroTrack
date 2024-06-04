import React from 'react';
import './Touristpass.css';

function App() {
  const touristPass = {
    qrCode: 'qr.png', 
    name: 'Geomar Abarintos',
    address: 'Alangilan Batangas ',
    dateOfVisit: 'June 5, 2024 - June 8, 2024',
    visitors: [
      { id: 'VTR0001', name: 'Elaine', age: 20, nationality: 'FIL', address: 'Batangas City', contactNumber: '09550261028' },
      { id: 'VTR0002', name: 'Rafael', age: 20, nationality: 'FIL', address: 'Batangas City', contactNumber: '09098264012' },
    ],
    ecoStubFee: 30,
    numberOfVisitors: 2,
    downPayment: 100,
  };

  const totalEcoStubFee = touristPass.ecoStubFee * touristPass.numberOfVisitors;
  const totalAmount =  totalEcoStubFee - touristPass.downPayment;

  return (
    <div className="App">
      <h1>Tourist Pass</h1>
      <div className="tourist-pass">
        <div className="pass-details">
          <img src={touristPass.qrCode} alt="QR Code" className="qr-code" />
          <p className="pass-id">QTP</p>
          <p>QR Coded Tourist Pass</p>
          <p><b>ID:</b> VIS00010</p>
          <h2>{touristPass.name}</h2>
          <p>{touristPass.address}</p>
          <p><b>Date of Visit:</b> {touristPass.dateOfVisit}</p>
        </div>
        <div className="visitors-details">
          <h2>Visitors</h2>
          <table>
            <thead>
              <tr>
                <th>Visitor ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Nationality</th>
                <th>Address</th>
                <th>Contact Number</th>
              </tr>
            </thead>
            <tbody>
              {touristPass.visitors.map(visitor => (
                <tr key={visitor.id}>
                  <td>{visitor.id}</td>
                  <td>{visitor.name}</td>
                  <td>{visitor.age}</td>
                  <td>{visitor.nationality}</td>
                  <td>{visitor.address}</td>
                  <td>{visitor.contactNumber}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="cost-details">
            <p><b>Visit Duration:</b> 3 days</p>
            <p><b>Eco Stub Fee:</b> ₱{touristPass.ecoStubFee.toLocaleString()}</p>
            <p><b>Number of Visitors:</b> {touristPass.numberOfVisitors}</p>
            <p><b>TOTAL:</b> ₱{totalEcoStubFee.toLocaleString()}</p>
            <p><b>Down payment:</b> ₱{touristPass.downPayment.toLocaleString()}</p>
            <p><b>Total Amount:</b> ₱{totalAmount.toLocaleString()}</p>
          </div>
          <button>View Down payment Receipt</button>
        </div>
      </div>
    </div>
  );
}

export default App;
