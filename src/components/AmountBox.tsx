import React from "react";

interface AmountInterface {
  getAmountValue: (amount: string) => void;
  amount: string;
}

const AmountBox: React.FC<AmountInterface> = ({ getAmountValue, amount }) => {
  const changeAmountHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    getAmountValue(e.target.value);
  };

  return (
    <div className="amount">
      <span className="amount-text">Amount:</span>
      <input
        type="number"
        className="amount-box"
        placeholder="0"
        value={amount}
        onChange={changeAmountHandler}
      />
    </div>
  );
};

export default AmountBox;
