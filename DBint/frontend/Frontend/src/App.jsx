import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Items,setItems]=useState([])
  useEffect(()=>{
    const fetchData =async()=>
    {
    const res = await fetch("http://localhost:3000")
    const data= await res.json();
    console.log(data);
    setItems(data.items);
    }
    fetchData();
  },[])
  return(
    <>
    {Items.map(i=>(
      <p key={i._id}>
        {i.name},
        {i.description}
      </p>
    ))}
    </>
  )
}

export default App
