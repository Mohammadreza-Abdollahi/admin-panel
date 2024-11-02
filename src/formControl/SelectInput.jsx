import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Zoom } from "@mui/material";
import { Tooltip } from "chart.js";
import { FastField } from "formik";
import { useState } from "react";

const SelectInput = ({
  formik,
  data,
  dataValue,
  dataTitle,
  name,
  label,
  secodeLabel = "",
  defaultValue = true,
  onChangeFunc,
}) => {
  const [focus, setFocus] = useState(false);
  const handleFocus = () => {
    setFocus(true);
  };
  const handleBlue = () => {
    setFocus(false);
  };
  return onChangeFunc ? (
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
      <FastField name={name} id={name} as={"select"}>
        {(param) => (
          <select
            {...param.field}
            name={name}
            id={name}
            onFocus={handleFocus}
            onBlur={handleBlue}
            onChange={(e) => onChangeFunc(e.target.value, param)}
            className="w-3/4 px-3 focus:outline-none"
          >
            {defaultValue ? <option value="">انتخاب نشده</option> : null}
            {data.map((d) => (
              <option key={`Select_${d[dataValue]}`} value={d[dataValue]}>
                {d[dataTitle]}
              </option>
            ))}
          </select>
        )}
      </FastField>
      {formik.errors[name] ? (
        <Tooltip
          className="text-lg"
          placement="left"
          arrow
          TransitionComponent={Zoom}
          title={
            <>
              <span className="text-base">{formik.errors[name]}</span>
            </>
          }
        >
          <div className="-translate-y-4 -translate-x-1/2 top-1/2 left-6 absolute w-7 h-7 text-center">
            <FontAwesomeIcon
              icon={faCircleExclamation}
              className="text-red-500 align-top text-3xl"
            />
          </div>
        </Tooltip>
      ) : null}
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
  ) : (
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
      <FastField name={name} id={name} as={"select"}>
        {(param) => (
          <select
            {...param.field}
            name={name}
            id={name}
            onFocus={handleFocus}
            onBlur={handleBlue}
            className="w-3/4 px-3 focus:outline-none"
          >
            {defaultValue ? <option value="">انتخاب نشده</option> : null}
            {data.map((d) => (
              <option key={`Select_${d[dataValue]}`} value={d[dataValue]}>
                {d[dataTitle]}
              </option>
            ))}
          </select>
        )}
      </FastField>
      {formik.errors[name] ? (
        <Tooltip
          className="text-lg"
          placement="left"
          arrow
          TransitionComponent={Zoom}
          title={
            <>
              <span className="text-base">{formik.errors[name]}</span>
            </>
          }
        >
          <div className="-translate-y-4 -translate-x-1/2 top-1/2 left-6 absolute w-7 h-7 text-center">
            <FontAwesomeIcon
              icon={faCircleExclamation}
              className="text-red-500 align-top text-3xl"
            />
          </div>
        </Tooltip>
      ) : null}
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
