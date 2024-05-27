const Total = (props) => {
  const exerciseNumArr = props.exerciseTotal.map((num) => num.exercises);
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
