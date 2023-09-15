import "./App.css";
import Header from "./Header";
import CardBig from "./CardBig";
import { data } from "./data";
import { dataTwo } from "./data"
import CardLittle from "./cardLittle";
import { useState } from "react";

function App() {
  const [increment, setIncrement] = useState(0);
  const [value, setValue] = useState();
  function incrementer() {
    setIncrement(increment + value);
  }
  function dicrementer() {
    setIncrement(increment - value);
  }
  function handleChange(e) {
    setValue(Number(e.target.value));
  }
  return (
    <div className="App">
      <Header />
      <button onClick={incrementer} className="clicker_btn">Add</button>
      <input type="number" value={value} onChange={handleChange}/>
      <button onClick={dicrementer} className="clicker_btn">Minus</button>
      <h1>{increment}</h1>
      <h1>{value}</h1>
      <div className="cards-container">
        {data.map((card, index) => {
          return <CardBig increment={increment} key={index} card={card} />;
        })}
      </div>
      <p className="overview">Overview - Today</p>
      <div className="cards-container">
      {dataTwo.map((part) => {
          return <CardLittle part={part} />;
        })}
      </div>
    </div>
  );
}

export default App;
