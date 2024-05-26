import { useSyncExternalStore } from "react";
import { useState } from "react";
import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

//Unfortunately, the entire application is in the same component. Refactor the code so that it consists of three new components: Header, Content, and Total. All data still resides in the App component, which passes the necessary data to each component using props. Header takes care of rendering the name of the course, Content renders the parts and their number of exercises and Total renders the total number of exercises.

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    { partName: "Fundamentals of React", exercise: 10 },
    { partName: "Using props to pass data", exercise: 7 },
    { partName: "State of a component", exercise: 14 },
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;
