// import "./styles.css";
import { useEffect, useState } from "react";

export default function FunctionalS() {
  const [init, setInit] = useState({
    firstname: "kiran",
    lastName: ""
  });
  const setname = () => {
    setInit({ ...init, lastname: "gadgi" });
  };
  useEffect(() => {
    setname();
    console.log(init);
  });

  return (
  
    <div className="App">
      {JSON.stringify(init)}
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
