import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  //    `https://excuser-three.vercel.app/v1/excuse/${category}`

  const [genExcuse, setGenExcuse] = useState(null);

  const fetchExcuse = (excuse) => {
    axios
      .get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`)
      .then((res) => {
        setGenExcuse(res.data[0].excuse);
      });
  };

  return (
    <div className="App">
      <h1>Generate An Excuse</h1>

      <button onClick={() => fetchExcuse("family")}>Family</button>
      <button onClick={() => fetchExcuse("office")}>Office</button>
      <button onClick={() => fetchExcuse("children")}>Children</button>
      <button onClick={() => fetchExcuse("college")}>College</button>
      <button onClick={() => fetchExcuse("party")}>Party</button>
      <button onClick={() => fetchExcuse("funny")}>Funny</button>
      <button onClick={() => fetchExcuse("unbelievable")}>Unbelievable</button>
      <button onClick={() => fetchExcuse("developers")}>Developers</button>
      <button onClick={() => fetchExcuse("gaming")}>Gaming</button>

      <p> {genExcuse}</p>
    </div>
  );
}
export default App;
