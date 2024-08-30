import { FilterCheckboxProps } from "@/components/shared/filter-checkbox";
import React from "react";

type Item = FilterCheckboxProps;

type TCheckboxFiltersGroup = {
  onChange: (values: string[]) => void;
  searchInputPlaceholder?: string;
  defaultValues?: string[];
  defaultItems: Item[];
  className?: string;
  limit?: number;
  title: string;
  items: Item[];
};

export const CheсkboxFiltersGroup = (props: TCheckboxFiltersGroup) => {
  const { className } = props;

  return <div className={"className"}></div>;
};
