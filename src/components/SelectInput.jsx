import { useState } from "react";

const SelectInput = ({
  data,
  dataValue,
  dataTitle,
  name,
  label,
  secodeLabel = "",
}) => {
  const [focus, setFocus] = useState(false);
  const handleFocus = () => {
    setFocus(!focus);
  };
  return (
    <div
      className={`flex ring-2 rounded-sm text-lg text-slate-800 overflow-hidden transition-all duration-150 ${
        focus ? "ring-palete-4-500-1" : "ring-palete-2-400-1"
      }`}
    >
      <label
        htmlFor={name}
        className={`appearance-none w-1/4 py-2 px-4 text-white transition-all duration-150 text-center ${
          focus ? "bg-palete-4-500-1" : "bg-palete-2-400-1"
        }`}
      >
        {label}
      </label>
      <select
        name={name}
        id={name}
        onFocus={handleFocus}
        onBlur={handleFocus}
        className="w-3/4 px-3 focus:outline-none"
      >
        <option selected={true} value="none">
          انتخاب نشده
        </option>
        {data.map((d) => (
          <option value={d[dataValue]}>{d[dataTitle]}</option>
        ))}
      </select>
      {secodeLabel !== "" ? (
        <label
          htmlFor={name}
          className={`appearance-none w-1/4 py-2 px-4 text-white transition-all duration-150 text-center ${
            focus ? "bg-palete-4-500-1" : "bg-palete-2-400-1"
          }`}
        >
          {secodeLabel}
        </label>
      ) : null}
    </div>
  );
};

export default SelectInput;
