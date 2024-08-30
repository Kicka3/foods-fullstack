import { Checkbox } from "../ui/checkbox";
import React from "react";

export interface FilterCheckboxProps {
  onCheckedChange?: (checked: boolean) => void;
  endAdornment?: React.ReactNode;
  checked?: boolean;
  value: string;
  name?: string;
  text: string;
}

export const FilterCheckbox: React.FC<FilterCheckboxProps> = ({
  onCheckedChange,
  endAdornment,
  checked,
  value,
  name,
  text,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id={`checkbox-${name}-${String(value)}`}
        className="rounded-[8px] w-6 h-6"
        onCheckedChange={onCheckedChange}
        checked={checked}
        value={value}
      />
      <label
        htmlFor={`checkbox-${name}-${String(value)}`}
        className="leading-none cursor-pointer flex-1"
      >
        {text}
      </label>
      {endAdornment}
    </div>
  );
};
