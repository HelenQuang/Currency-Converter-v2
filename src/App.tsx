import React, { useEffect, useState } from "react";
import "./App.css";

import FromCurrency from "./components/FromCurrency";
import ToCurrency from "./components/ToCurrency";
import SwitchButton from "./components/SwitchButton";
import ResultBox from "./components/ResultBox";
import AmountBox from "./components/AmountBox";

const App: React.FC = () => {
  const [rate, setRate] = useState<number>();
  const [result, setResult] = useState<number>();
  const [error, setError] = useState<string | null>(null);
  const [amount, setAmount] = useState<string>("1");
  const [currencyFrom, setCurrencyFrom] = useState<string>("EUR");
  const [currencyTo, setCurrencyTo] = useState<string>("USD");

  const getAmountValue = (amount: string) => {
    setAmount(amount);
  };

  const setCurrencyFromFn = (currencyFrom: string) => {
    setCurrencyFrom(currencyFrom);
  };

  const setCurrencyToFn = (currencyTo: string) => {
    setCurrencyTo(currencyTo);
  };

  const switchCurrency = (currencyFrom: string, currencyTo: string) => {
    setCurrencyFrom(currencyTo);
    setCurrencyTo(currencyFrom);
  };

  useEffect(() => {
    const conversionFn = async () => {
      try {
        const res = await fetch(
          `https://v6.exchangerate-api.com/v6/a55d4f3fb2f9bcf3e82b4f8e/pair/${currencyFrom}/${currencyTo}/${amount}`
        );
        if (!res.ok) {
          throw new Error(`This is an HTTP error: The status is ${res.status}`);
        }

        const conversionData = await res.json();

        setRate(conversionData.conversion_rate);
        setResult(conversionData.conversion_result);

        setError(null);
      } catch (err: any) {
        setError(err.message);
      }
    };

    conversionFn();
  }, [amount, currencyFrom, currencyTo, rate, result]);

  return (
    <div className="box">
      <img
        src="https://img.icons8.com/office/360/000000/money--v2.gif"
        alt="money gif"
      />
      <h1>Currency Converter</h1>

      <p>Choose the currency and the amounts to get the exchange rate</p>
      <AmountBox getAmountValue={getAmountValue} amount={amount} />
      <FromCurrency
        setCurrencyFromFn={setCurrencyFromFn}
        currencyFrom={currencyFrom}
      />

      <SwitchButton
        rate={rate}
        currencyFrom={currencyFrom}
        currencyTo={currencyTo}
        switchCurrency={switchCurrency}
      />
      <ToCurrency setCurrencyToFn={setCurrencyToFn} currencyTo={currencyTo} />

      <ResultBox result={result} />
    </div>
  );
};

export default App;
