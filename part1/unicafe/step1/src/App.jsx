import { useState } from "react";
import Button from "./Button.jsx";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const updateGood = () => {
    const goodUpdated = good + 1;
    return setGood(goodUpdated);
  };
  const updateNeutral = () => {
    const neutralUpdate = neutral + 1;
    return setNeutral(neutralUpdate);
  };

  const updateBad = () => {
    const badUpdate = bad + 1;
    return setBad(badUpdate);
  };

  return (
    <>
      <div>
        <h1>give feedback</h1>
        <Button onClick={updateGood} text="good" />
        <Button onClick={updateNeutral} text="neutral" />
        <Button onClick={updateBad} text="bad" />
      </div>
      <div>
        <h1>statistics</h1>
        <div>good {good}</div>
        <div>neutral {neutral}</div>
        <div>bad {bad}</div>
      </div>
    </>
  );
};

export default App;
