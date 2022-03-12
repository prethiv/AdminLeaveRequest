import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';
function App() {
  
  const [leaveItems,setleaveItems] = useState([]);
  
  return (
    <div className="App">
      <p>Admin</p>
      
      <button
      onClick={()=>{
        axios.get("http://localhost:3000/allLeave")
        .then(data=>{
          console.log(data)
          setleaveItems(data.data)
        })
        // console.log(value.data)
      }}>Fetch Leave</button>

      {leaveItems.map(items=>(
        <li>{items.reason},{items.name},{items.date}</li>
      ))}

    </div>
  );
}

export default App;
