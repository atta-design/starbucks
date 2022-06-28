import "./App.css";
import React, { useEffect } from "react";
import Contaner from "./components/contaner";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./components/redux/userInformation";

function App() {
  const data = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  let emails = data.map((a) => a.email);
  let isValid = emails.includes(localStorage.getItem("login"));

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  let id;
  React.useMemo(
    () =>
      (data.length !== 0 || data.length === null) &&
      !isValid &&
      (id = prompt("ایمیل خود را وارد کنید", "")) &&
      localStorage.setItem("login", id),[data.length]
  );

  return (
    <div className="App">
      {data.length !== 0 && isValid ? (
        <Contaner />
      ) : (
        <div>
          <div>NOT ACCESS</div>
        </div>
      )}
    </div>
  );
}

export default App;
