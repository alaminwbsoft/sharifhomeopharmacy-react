import React, { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

const DropDown = ({ data, defaultText }) => {
  const [selectedOption, setSelectedOption] = useState(defaultText);

  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  return (
    <div
      className="p-2 z-50 w-full"
      style={{ position: "relative", display: "block" }}
    >
      <Select
        options={data} // Pass options array
        components={animatedComponents}
        onChange={handleSelectChange} // Handle selection
        placeholder={selectedOption}
      />
    </div>
  );
};

export default DropDown;
