"use client";

import { FC, memo } from "react";
import DatePicker, { DateObject, Value } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

type DateInputProps = {
  label: string;
  value: Value;
  onChange: (date: Value) => void;
};

const DateInput: FC<DateInputProps> = ({ label, value, onChange }) => {
  const minDate = new Date().setDate(new Date().getDate() + 1);
  const maxDate = new Date().setDate(new Date().getDate() + 7);

  return (
    <label htmlFor="date" className="w-full flex-1">
      <p className="p-1 capitalize text-sm text-zinc-600 dark:text-zinc-400">
        {label}
      </p>
      <DatePicker
        id="date"
        value={value}
        onChange={onChange}
        minDate={minDate}
        maxDate={maxDate}
        calendar={persian}
        locale={persian_fa}
        calendarPosition="bottom-right"
        containerClassName="w-full"
        
        inputClass="w-full placeholder:text-xs p-2 text-sm border border-slate-200 dark:border-slate-600 rounded peer focus:outline-none focus:border-slate-400 dark:focus:border-slate-400"
      />
    </label>
  );
};

export default memo(DateInput);
