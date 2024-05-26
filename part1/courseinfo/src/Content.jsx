const Content = (props) => {
  const contentList = props.parts.map((item) => {
    return (
      <li>
        {item.partName} : {item.exercise}
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
