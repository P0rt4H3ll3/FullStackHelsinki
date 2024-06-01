const Total = ({ parts }) => {
  return (
    <p>
      <b>
        total of{" "}
        {parts.reduce((addNum, current) => addNum + current.exercises, 0)}{" "}
        exercises
      </b>
    </p>
  );
};

export default Total;
