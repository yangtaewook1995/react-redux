import React, { useContext } from "react";
import Header from "./Header";
import { UserContext } from "./context";

const Screen = () => {
  const { logUserIn } = useContext(UserContext);
  return (
    <div>
      <Header></Header>
      <h1>First screen</h1>
      <button onClick={logUserIn}>Log user in</button>
    </div>
  );
};
export default Screen;