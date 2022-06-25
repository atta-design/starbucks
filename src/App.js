import './App.css';
import React,{useEffect} from 'react';
import Contaner from './components/contaner';
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from './components/redux/userInformation'
// import Basket from './components/basket';

function App() {
  const data = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  let emails= data.map((a)=>a.email)
  let isValid=emails.includes(localStorage.getItem("login"))
  
  useEffect(() => {
    dispatch(fetchUsers());
    
  }, [dispatch]);
  let id;
  React.useMemo(
    () =>
   
      data.length !== 0  &&
      // localStorage.getItem("login") !== data[data.length - 1].email &&
      !(isValid)&&
      (id = prompt("آیدی خود را وارد کنید", "")) &&
      localStorage.setItem("login", id),
    [id]
  );
  console.log(localStorage.getItem("login"))

  
  return (
    <div className="App">

     { (data.length !== 0 && isValid) ? 
       <Contaner/>
       : (
        <div>NOT ACCESS</div>
      )}

      {/* {localStorage.getItem("login") ===
      (data.length !== 0 && data[data.length - 1].email) */}


{/* <Basket/> */}
    </div>
  );
}

export default App;
