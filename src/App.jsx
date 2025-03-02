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
      <div className="flex justify-center  items-center h-screen ">
        <div className="flex justify-center bg-[url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center  pt-14 pb-2 rounded-2xl bg-opacity-50  px-9 items-center gap-5 flex-col ">
          
          <Inputx
            label="From"
            amount={convertingAmount}
            setAmount={setConvertingAmount}
            selectedcurrency={fromSelectedCurrency}
            setSelectedCurrency={setfromSelectedCurrency}
            disabled={false}
            currencyoptions={optionsfrom}
          />
          <Inputx
            label="To"
            amount={convertedAmount}
            setAmount={setConvertedAmount}
            selectedcurrency={toSelectedCurrency}
            setSelectedCurrency={settoSelectedCurrency}
            disabled={true}
            currencyoptions={optionsto}
          />
          <button
            className="bg-sky-700 text-amber-50 p-2 rounded-2xl"
            type="button"
            onClick={convert}
          >
            Convert {fromSelectedCurrency}  to {toSelectedCurrency}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
