import {BrowserRouter, Route,Routes} from "react-router-dom"
import Layout from "./components/Layout";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {

  return (
    <>
     {/* Implement the routes : defines which page opens on what url*/}
     <BrowserRouter>
     <Routes>
      {/* define the page urls */}
      <Route path="/" element={<Layout/>}>
      <Route path="/" element={<Home/>}/>  
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
