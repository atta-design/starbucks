import "./App.css";
import React, { useEffect, useState } from "react";
import Contaner from "./components/container/contaner";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./redux/userInformation";
import Footer from "./components/footer/Footer";
import { BrowserRouter } from "react-router-dom"
function App() {
//   const [value, setValue] = useState();
//   const data = useSelector((state) => state.users.users);
//   const dispatch = useDispatch();
//   let emails = data.map((a) => a.email);
//   let isValid = emails.includes(value);

//   useEffect(() => {
//     dispatch(fetchUsers());
//   }, [dispatch]);
//   let id;
//  useEffect(() => {
//     (data.length !== 0 || data.length === null) &&
//       !isValid &&
//       (id = prompt("ایمیل خود را وارد کنید", "")) &&
//       localStorage.setItem("login", id);
//     setValue(localStorage.getItem("login"));
//   }, [emails]);
  return (
    <div className="App">
     <BrowserRouter>
        <Contaner />
        <Footer/>
</BrowserRouter>
     
    </div>
  );
}

export default App;
