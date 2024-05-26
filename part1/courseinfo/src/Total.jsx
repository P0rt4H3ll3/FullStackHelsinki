const Total = (props) => {
  const exerciseNumArr = props.parts.map((num) => num.exercise);
  const totalNumber = exerciseNumArr.reduce((numAdd, x) => {
    return x + numAdd;
  });
  return (
    <>
      <p>Number of exercises {totalNumber}</p>
    </>
  );
};

export default Total;
