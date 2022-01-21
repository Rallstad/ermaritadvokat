import React from "react";
import logo from "./lawyerhat.svg";
import "./App.css";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
        .then((res) => res.json())
        .then((data) => setData(data.message));
  }, []);

  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>{!data ? "Er Marit advokat?" : data}</h1>
          <h6>Niks</h6>


        </header>
        <body>
        <a href="url">https://github.com/Rallstad/ermaritadvokat</a>
        </body>
      </div>
  );
}

export default App;
