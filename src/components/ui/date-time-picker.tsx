"use client";

import { FC, memo, useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import type { Value } from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";

type DateTimeInputProps = {
  label: string;
  name: string;
};

const DateTimeInput: FC<DateTimeInputProps> = ({ label, name }) => {
  const [value, setValue] = useState<Value>(new Date());
  const minDate = new Date().setDate(new Date().getDate() + 1);
  const maxDate = new Date().setDate(new Date().getDate() + 7);

  return (
    <label htmlFor="time" className="w-full md:w-max flex-1">
      <p className="p-1  capitalize text-sm text-zinc-600 dark:text-zinc-400">
        {label}
      </p>
      <DatePicker
        minDate={minDate}
        maxDate={maxDate}
        value={value}
        onChange={(dateObj) => {
          setValue(dateObj);
        }}
        id="time"
        name={name}
        calendar={persian}
        locale={persian_fa}
        calendarPosition="bottom-right"
        containerClassName="w-full"
        inputClass="w-full placeholder:text-xs p-2 text-sm border border-slate-200 dark:border-slate-600 rounded peer focus:outline-none focus:border-slate-400 dark:focus:border-slate-400"
        plugins={[
            <TimePicker hideSeconds key="time-picker"/>
          ]} 
      />
    </label>
  );
};

export default memo(DateTimeInput);
