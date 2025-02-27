import React from "react";

export default function Inputx({
  label,
  amount ,
  setAmount ,
  selectedcurrency ,
  setSelectedCurrency ,
  disabled,
  currencyoptions = [],
}) {
  return (
    <div className="rounded-2xl overflow-hidden">
      <div className="flex max-w-[600px] text-black  ">
        <div className="flex p-2 bg-sky-300 flex-col w-1/2">
          <label htmlFor="amount" className="  mb-0.5 w-full">
            {label}
          </label>
          <input
            type="number"
            disabled={disabled}
            id="amount"
            min={0}
            className="w-full text-black  "
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </div>
        <div className="flex p-2 bg-sky-300 justify-end items-end flex-col w-1/2">
          <label className="  mb-0.5 " htmlFor="dropdown">
            currencytype
          </label>
          <select
            id="dropdown"
            value={selectedcurrency}
            onChange={(e) => {
              setSelectedCurrency(e.target.value);
            }}
            className=" text-black  "
            name="options"
          >
            {currencyoptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
