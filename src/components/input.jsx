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
    <div className="w-full">
      <div className="flex max-w-[600px] w-full gap-3 sm:gap-4">
        <div className="flex flex-col w-1/2">
          <label htmlFor="amount" className="text-slate-200 text-sm mb-1">
            {label}
          </label>
          <input
            type="number"
            disabled={disabled}
            id="amount"
            min={0}
            placeholder="0.00"
            className="w-full rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-slate-400 px-3 py-2 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-500/40 disabled:opacity-60 disabled:cursor-not-allowed"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </div>
        <div className="flex flex-col w-1/2">
          <label className="text-slate-200 text-sm mb-1" htmlFor="dropdown">
            Currency
          </label>
          <select
            id="dropdown"
            value={selectedcurrency}
            onChange={(e) => {
              setSelectedCurrency(e.target.value);
            }}
            className="w-full rounded-xl bg-white/10 border border-white/10 text-white px-3 py-2 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-500/40 appearance-none"
            name="options"
          >
            {currencyoptions.map((currency) => (
              <option className="text-black" key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
