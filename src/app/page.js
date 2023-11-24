'use client'

import {useState} from 'react'; 
import axios from 'axios'; 

export default function Home() {

const [input, setInput] = useState(''); 
const [data, setData] = useState(); 

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
      
    })
    .catch((error) => {
      alert(error.message);
      alert("this DID NOT WORK")
      console.error("this did not work")
    });
}



  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

     <input type="text" style={{color: 'black'}} value={input} onChange={handleInput}/> 
     
     <button onClick={sendData} >
     <h1>
      SEND INPUT 
      
     </h1>
     </button>
     
    </main>
  )
}
