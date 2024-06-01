import Part from "./Part";

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((item) => {
        return (
          <Part key={item.id} item={item} />
          //JSX elements directly inside a map() call always need keys!
        );
      })}
    </>
  );
};

export default Content;
