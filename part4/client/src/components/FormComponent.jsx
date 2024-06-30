import React from "react";

const FormComponent = ({
  onSubmit,
  input1Value,
  input1OnChange,
  input1Label,
  input2Value,
  input2OnChange,
  input2Label,
  buttonLabel,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        {input1Label}: <input value={input1Value} onChange={input1OnChange} />
      </div>
      <div>
        {input2Label}: <input value={input2Value} onChange={input2OnChange} />
      </div>
      <div>
        <button type="submit">{buttonLabel}</button>
      </div>
    </form>
  );
};

export default FormComponent;
