import React from "react";

const Content = (props) => {
  const contentList = props.parts.map((item) => {
    return (
      <li>
        {item.name} : {item.exercises}
      </li>
    );
  });
  return (
    <>
      <ul>{contentList}</ul>
    </>
  );
};
const Header = (props) => <h1>{props.course}</h1>;
const Total = (props) => {
  const exerciseNumArr = props.parts.map((num) => num.exercises);
  const totalNumber = exerciseNumArr.reduce((numAdd, x) => x + numAdd);
  return (
    <>
      <p>Number of exercises {totalNumber}</p>
    </>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
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
