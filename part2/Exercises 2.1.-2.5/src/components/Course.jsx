import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = ({ courses }) => {
  return (
    <>
      {courses.map((course) => {
        return (
          <div>
            <Header courseName={course.name} />
            <Content parts={course.parts} id={course.id} />
            <Total exerciseTotal={course.parts} />
          </div>
        );
      })}
    </>
  );
};

export default Course;
