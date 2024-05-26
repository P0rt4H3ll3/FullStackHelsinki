const Total = (props) => {
  const exerciseNumArr = props.parts.map((num) => num.exercises);
  console.log(exerciseNumArr);
  const totalNumber = exerciseNumArr.reduce((numAdd, x) => {
    return x + numAdd;
  });
  console.log(totalNumber);
  return (
    <>
      <p>Number of exercises {totalNumber}</p>
    </>
  );
};

export default Total;
