const Total = (props) => {
  const exerciseNumArr = props.exerciseTotal.map((num) => num.exercises);
  const totalNumber = exerciseNumArr.reduce((numAdd, x) => x + numAdd);
  return (
    <>
      <p>
        <b>toal of {totalNumber} exercises</b>
      </p>
    </>
  );
};

export default Total;
