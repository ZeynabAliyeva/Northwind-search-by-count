import './App.css';
import { useEffect, useState } from 'react';

function App() {

const [tables, settable] = useState([]);
const [number,setNumber] = useState({
numberValue: ""
})
const handleChange = (e) => {

  const name = e.target.name;
  const value = e.target.value;

  setNumber({
      ...tables,
      [name]:value
  })
}
   useEffect(()=>{
    fetch("https://northwind.vercel.app/api/orders")
    .then(res => res.json())
    .then(data =>{
      settable(data);
    })
   },[])

  //  useEffect(()=>{
  //   console.log(number)
  //  },[number])

// console.log(number.numberValue);
  return ( <>
    <input type="text" name='numberValue' value={number.numberValue} onChange={handleChange} placeholder="Write here"/>
    <table>
      <thead>
      <tr>
        <th>id</th>
        <th>customerId</th>
        <th>employedId</th>
      </tr>
      </thead>
      <tbody> {(!number.numberValue &&  tables.map((item) => {
          return (
          <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.customerId}</td>
              <td>{item.employeeId}</td>
          </tr>
      );
})) || tables.splice(0,number.numberValue).map((item)=>{
        return <tr>
        <td>{item.id}</td>
        <td>{item.customerId}</td>
        <td>{item.employeeId}</td>
    </tr> 
    })
        }        
      </tbody>
    </table>
 </>
  );
}

export default App;
