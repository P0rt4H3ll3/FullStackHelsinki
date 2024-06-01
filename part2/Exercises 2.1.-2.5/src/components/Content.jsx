const Content = ({ parts }) => {
  const contentList = parts.map((item) => {
    return (
      <li key={item.id}>
        {item.name} : {item.exercises}
      </li>
      //When creating a list in the UI from an array with JSX, you should add a key prop to each child and to any of its’ children. React uses the key prop create a relationship between the component and the DOM element. The library uses this relationship to determine whether or not the component should be re-rendered.
    );
  });
  return (
    <>
      <ul>{contentList}</ul>
    </>
  );
};

export default Content;
