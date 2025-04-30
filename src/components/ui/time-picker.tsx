"use client";

import { FC, useState } from "react";
import DatePicker from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import type { Value } from "react-multi-date-picker";

type TimeInputProps = {
  label: string;
  name: string;
};

const TimeInput: FC<TimeInputProps> = ({ label, name }) => {
  const [time, setTime] = useState<Value>(new Date());

  return (
    <label htmlFor="time" className="w-full md:w-max flex-1">
      <p className="p-1  capitalize text-sm text-zinc-600 dark:text-zinc-400">
        {label}
      </p>
      <DatePicker
        value={time}
        onChange={setTime}
        id="time"
        name={name}
        calendar={persian}
        locale={persian_fa}
        calendarPosition="bottom-right"
        containerClassName="w-full"
        inputClass="w-full placeholder:text-xs p-2 text-sm border border-slate-200 dark:border-slate-600 rounded peer focus:outline-none focus:border-slate-400 dark:focus:border-slate-400"
        disableDayPicker
        format="HH:mm"
        plugins={[<TimePicker key="time-picker" hideSeconds />]}
      />
    </label>
  );
};

export default TimeInput;
