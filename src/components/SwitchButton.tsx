import React from "react";

interface SwitchBtnProps {
  rate: number | undefined;
  currencyFrom: string;
  currencyTo: string;
  switchCurrency: (currencyFrom: string, currencyTo: string) => void;
}

const SwitchButton: React.FC<SwitchBtnProps> = ({
  rate,
  currencyFrom,
  currencyTo,
  switchCurrency,
}) => {
  const switchHandler = () => {
    switchCurrency(currencyFrom, currencyTo);
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
