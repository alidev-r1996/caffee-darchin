"use client";

import { FC, useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import type { Value } from "react-multi-date-picker";

type DateInputProps = {
  label: string;
  name: string;
};

const DateInput: FC<DateInputProps> = ({ label, name }) => {
  const [value, setValue] = useState<Value>(new Date());

  return (
    <label htmlFor="date" className="w-full md:w-max flex-1">
      <p className="p-1  capitalize text-sm text-zinc-600 dark:text-zinc-400">
        {label}
      </p>
      <DatePicker
        value={value}
        onChange={setValue}
        id="date"
        name={name}
        calendar={persian}
        locale={persian_fa}
        calendarPosition="bottom-right"
        containerClassName="w-full"
        inputClass="w-full placeholder:text-xs p-2 text-sm border border-slate-200 dark:border-slate-600 rounded peer focus:outline-none focus:border-slate-400 dark:focus:border-slate-400"
      />
    </label>
  );
};

export default DateInput;
