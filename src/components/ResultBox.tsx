import React from "react";

const ResultBox: React.FC<{ result: number | undefined }> = ({ result }) => {
  return (
    <div className="result">
      <span className="result-text">Result: </span>
      <div className="result-box">{result}</div>
    </div>
  );
};

export default ResultBox;
