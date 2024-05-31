const Statistics = (props) => {
  return (
    <>
      <h1>statistics</h1>
      <div>good {props.feedback}</div>
      <div>neutral {props.neutral}</div>
      <div>bad {props.bad}</div>
      <div>all {props.good + props.neutral + props.bad}</div>
      <div>
        average
        {(props.good - props.bad) / (props.good + props.neutral + props.bad)}
      </div>
      <div>
        positive {(props.good / (props.good + props.neutral + props.bad)) * 100}
        %
      </div>
    </>
  );
};

export default Statistics;
