import { useState } from "react";
import Inputx from "./components/input";
import usecurencyRates from "./components/data";

function App() {
  let [convertingAmount, setConvertingAmount] = useState(0);
  let [convertedAmount, setConvertedAmount] = useState(0);
  const [fromSelectedCurrency, setfromSelectedCurrency] = useState("USD");
  const [toSelectedCurrency, settoSelectedCurrency] = useState("USD");
  /***************************************************************** */
  const currencyRatesto = usecurencyRates(fromSelectedCurrency);
  const optionsto = Object.keys(currencyRatesto);
  /******************************************************************** */
  const currencyRatesfrom = usecurencyRates(toSelectedCurrency);
  const optionsfrom = Object.keys(currencyRatesfrom);
  /******************************************************************** */

  const convert = () => {
    setConvertedAmount(convertingAmount * currencyRatesto[toSelectedCurrency]);
  };

  return (
    <>
      <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4 py-10">
        <div className="backdrop-blur-md bg-white/10 border border-white/10 shadow-2xl rounded-3xl w-full max-w-xl p-6 sm:p-8 flex flex-col items-stretch gap-6">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">Currency Converter</h1>
            <p className="text-slate-300 text-sm sm:text-base mt-1">Convert between currencies with live rates</p>
          </div>
          
          <Inputx
            label="From"
            amount={convertingAmount}
            setAmount={setConvertingAmount}
            selectedcurrency={fromSelectedCurrency}
            setSelectedCurrency={setfromSelectedCurrency}
            disabled={false}
            currencyoptions={optionsfrom}
          />
          <div className="h-px w-full bg-white/10" />
          <Inputx
            label="To"
            amount={convertedAmount}
            setAmount={setConvertedAmount}
            selectedcurrency={toSelectedCurrency}
            setSelectedCurrency={settoSelectedCurrency}
            disabled={true}
            currencyoptions={optionsto}
          />
          <div className="flex flex-col items-center gap-2">
            {currencyRatesto[toSelectedCurrency] ? (
              <p className="text-slate-300 text-xs sm:text-sm">
                1 {fromSelectedCurrency} = {currencyRatesto[toSelectedCurrency].toFixed(4)} {toSelectedCurrency}
              </p>
            ) : (
              <p className="text-slate-400 text-xs sm:text-sm">Fetching latest rates…</p>
            )}
            <button
              className={`mt-1 inline-flex items-center justify-center rounded-2xl px-5 py-3 font-medium shadow-lg shadow-sky-900/40 transition-colors ${currencyRatesto[toSelectedCurrency] && convertingAmount > 0 ? 'bg-sky-600 hover:bg-sky-500 active:bg-sky-700 text-white' : 'bg-slate-600 text-slate-300 cursor-not-allowed'}`}
              type="button"
              onClick={convert}
              disabled={!currencyRatesto[toSelectedCurrency] || convertingAmount <= 0}
            >
              Convert {fromSelectedCurrency} to {toSelectedCurrency}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
