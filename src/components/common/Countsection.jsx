import React from "react";
import ReverseHourCounter from "./ReverseHourCounter";

const Countsection = ({ className }) => {
  return (
    <>
      <ReverseHourCounter startHours={10} className={className}>
        {" "}
      </ReverseHourCounter>
    </>
  );
};

export default Countsection;
