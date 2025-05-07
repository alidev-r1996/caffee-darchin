import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type SelectUiProps = {
  onChange: (value: string) => void;
  title: string;
  children: React.ReactNode;
};

export function SelectUi({ onChange, title, children }: SelectUiProps) {
  return (
    <Select onValueChange={onChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{title}</SelectLabel>
          {children}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
