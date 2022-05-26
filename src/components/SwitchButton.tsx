import React from "react";

interface SwitchBtnProps {
  rate: number | undefined;
  currencyFrom: string;
  currencyTo: string;
}

const SwitchButton: React.FC<SwitchBtnProps> = ({
  rate,
  currencyFrom,
  currencyTo,
}) => {
  const switchHandler = () => {
    [currencyFrom, currencyTo] = [currencyTo, currencyFrom];
    console.log(currencyFrom);
    console.log(currencyTo);
  };

  return (
    <div className="swap-rate-container">
      <div className="rate">
        1 {currencyFrom} = {rate} {currencyTo}
      </div>
      <button className="btn" onClick={switchHandler}>
        Switch
      </button>
    </div>
  );
};

export default SwitchButton;
