/*
const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  );
};
*/
const Part = ({ part, exercises }) => {
  return (
    <p>
      {part} {exercises}
    </p>
  );
};

export default Part;
