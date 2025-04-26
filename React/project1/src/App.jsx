import Layout from "./components/Layout";
import FuncComp from "./concepts/FuncComp";
import FuncState from "./concepts/FuncState";
import ToggleState from "./concepts/ToggleState";

function App() {
  let obj= {
    name:"Aishu",
    age:21,
  };
  return  (
  <>
  {/* <h1>Hieee World!</h1> */}
  {/* <Layout/> */}
  {/* <FuncComp data={obj}/> */}
  {/* sending the obj as a prop */}
  {/* <FuncState/> */}
  <ToggleState/>
  </>
  );
}

export default App;
//the component which calls another function is called as parent component.
//the function/component which is being called is the child component.
//when data is passed from parent component to the child component it is called as props(properties)
//props is an object of data passed from parent to child
//props originates in the parent component but accessed in the child component