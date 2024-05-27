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

export default Content;
