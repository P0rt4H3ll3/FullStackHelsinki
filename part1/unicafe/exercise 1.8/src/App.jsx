import { useState } from "react";
import Button from "./Button.jsx";
import Statistics from "./Statistics.jsx";

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
    const neutralUpdated = neutral + 1;
    return setNeutral(neutralUpdated);
  };

  const updateBad = () => {
    const badUpdated = bad + 1;
    return setBad(badUpdated);
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
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    </>
  );
};

export default App;
