import React, { ReactNode } from "react";
import CoverterContext from "./ConverterContext";

interface ConverterProviderProps {
  children: ReactNode;
}

const coversionFn = async () => {
  const res = await fetch(
    `https://v6.exchangerate-api.com/v6/{process.env.EXCHANGE_RATE_API_KEY}/pair/EUR/GBP/5`
  );

  const data = await res.json();
  const rate = data.conversion_rate;
  const result = data.conversion_result;
};

// const ConverterProvider<ConverterProviderProps> = ({ children }) => {

//   return <CoverterContext.Provider>{children}</CoverterContext.Provider>;
// };

// export default ConverterProvider;
