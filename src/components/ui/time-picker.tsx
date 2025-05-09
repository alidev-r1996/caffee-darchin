"use client";

import { FC, memo, useState } from "react";
import DatePicker, { DateObject, Value } from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

type TimeInputProps = {
  label: string;
  value: Value;
  onChange: (date: Value) => void;
};

const TimeInput: FC<TimeInputProps> = ({ label, value, onChange }) => {
  return (
    <label htmlFor="time" className="w-full flex-1">
      <p className="p-1 capitalize text-sm text-zinc-600 dark:text-zinc-400">
        {label}
      </p>
      <DatePicker
        id="time"
        value={value}
        onChange={onChange}
        format="HH:mm"
        disableDayPicker
        calendar={persian}
        locale={persian_fa}
        calendarPosition="bottom-right"
        containerClassName="w-full"
        inputClass="w-full placeholder:text-xs p-2 text-sm border border-slate-200 dark:border-slate-600 rounded peer focus:outline-none focus:border-slate-400 dark:focus:border-slate-400"
        plugins={[<TimePicker key="time" hideSeconds className="dark:bg-slate-900 rounded"/>]}
      />
    </label>
  );
};

export default memo(TimeInput);
