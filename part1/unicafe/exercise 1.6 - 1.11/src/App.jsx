import { useState } from "react";
import Button from "./Button.jsx";
import Statistics from "./Statistics.jsx";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const updateCount = (feedback, updateFunc) => {
    const feedbackUpdate = feedback + 1;
    return updateFunc(feedbackUpdate);
  };

  return (
    <>
      <div>
        <h1>give feedback</h1>
        <Button onClick={() => updateCount(good, setGood)} text="good" />
        <Button
          onClick={() => updateCount(neutral, setNeutral)}
          text="neutral"
        />
        <Button onClick={() => updateCount(bad, setBad)} text="bad" />
      </div>
      <div>
        <h1>statistics</h1>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    </>
  );
};

export default App;
