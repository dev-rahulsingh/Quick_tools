import { useId } from "react";

function InputBox({
  label,
  amount,
  onchangeAmount,
  selectCurrency = "usd",
  currencyOptions = [],
  onchangeCurreny,
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountId = useId();
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label className="text-black/40 mb-2 inline-block" htmlFor={amountId}>
          {label}
        </label>
        <input
          id={amountId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          value={amount}
          disabled={amountDisable}
          onChange={(e) => onchangeAmount && onchangeAmount(e.target.value * 1)}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          disabled={currencyDisable}
          onChange={(e) => onchangeCurreny && onchangeCurreny(e.target.value)}
          value={selectCurrency}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
