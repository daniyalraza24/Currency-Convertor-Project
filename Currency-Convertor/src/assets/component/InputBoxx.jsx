import React from 'react'
import { useId } from 'react';
function InputBoxx({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
 
  const amountInputId = useId()
  return (
    <div className={`bg-white text-sm flex rounded p-3  ${className}`} >
     
      {/* <div className=""></div> */}
      <label htmlFor={amountInputId} className="text-black/40 mb-4 inline-block">
        {label}
      </label>
      <input id={amountInputId} 
        type="number"
        className='text-black/40 mb-2 inline-block'
        placeholder='Enter Amount'
        disabled={amountDisable}
        value={amount}
        onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} />

      <div className='w-1/2 flex flex-wrap justify-end text-right'>
        <p className="text-black/40 mb-2 w-full">Currency Type</p>

        <select
          className="rounded-lg px-1 py-1 bg-gray-100  cursor-pointer outline-none"
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          value={selectCurrency}
          disabled={currencyDisable}
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

export default InputBoxx
