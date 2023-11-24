
'use client'

import {useState, useEffect, useCallback, useRef} from 'react'
import axios from 'axios'; 
import DropDown from './Components/Dropdown'; 



export default function Home() {

const [input, setInput] = useState(''); 
const [data, setData] = useState(); 
const [coindeskData, setCoindeskData] = useState(null);

var dataObj = {
  name: "Alice",
  age: 25
};

function handleInput(e){

  const value = e.target.value; 
  setInput(value);
  const userInput = input; 
  setData(input); 
  
  dataObj[userInput] = input; 
  console.log(dataObj); 
  
  
}

// Add in the post Request code here 
function sendData() {

  const textInput = 'input'; 
  dataObj[textInput] = input;

  
  const data = dataObj;
  console.log(data); 
  console.log('this is the data')

  console.log('trying to send data')
  axios
    .post("http://localhost:5000/server", dataObj)
    .then((response) => {
      alert(JSON.stringify(response.data));
      console.log('data sent'); 
      
      
    }).catch((error) => {
      alert(error.message);
      alert("this DID NOT WORK")
      console.error("this did not work")
    });
}



function getData() {
  // Define the URL to make the GET request
  const url = 'http://localhost:5000/server/coindesk';

  // Use axios to make a GET request to the server
  axios.get(url)
    .then((response) => {
      // Get the data from the response
      console.log('trying to get data');
      
      const data = response.data;

      // Set the coindesk data state variable to the data
      setCoindeskData(data);
    }).catch((error) => {
      // Handle the error
      // For example, alert the error message
      console.log('this did not work');
      console.error("this did not work")
      alert(error.message);
    });
}


function handleSelect(value) {
  // Update the input state variable with the selected value
  setInput(value);

  // Do anything else you want with the selected value
  // For example, send it to the server or display it on the web page
}





  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

     <input type="text" style={{color: 'black'}} value={input} onChange={handleInput}/> 
     
     <button onClick={sendData} >
     <h1>
      SEND INPUT 
      
      
     </h1>
     </button>
     
     <button onClick={getData} >
      <h1>GET DATA</h1>
     </button>
     <div 
     style={{color: 'black', background: 'white'}} 
     >
     <DropDown  
     onSelect={handleSelect}
     style={{color: 'black', background: 'white'}} 
     
     /> 
     </div>
     
     
    </main>
  )
}
