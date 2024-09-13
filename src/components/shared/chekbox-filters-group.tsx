"use client";

import {
  FilterCheckbox,
  FilterCheckboxProps,
} from "@/components/shared/filter-checkbox";
import { Input } from "@/components/ui";
import React from "react";

type Item = FilterCheckboxProps;

type TCheckboxFiltersGroup = {
  onChange?: (values: string[]) => void;
  searchInputPlaceholder?: string;
  defaultValues?: string[];
  defaultItems?: Item[];
  className?: string;
  limit?: number;
  title: string;
  items: Item[];
};

export const CheсkboxFiltersGroup = (props: TCheckboxFiltersGroup) => {
  const {
    className,
    searchInputPlaceholder,
    defaultValues,
    defaultItems,
    limit = 5,
    title,
    items,
  } = props;

  const [showAll, setShowAll] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");

  const list = showAll
    ? items.filter((item) =>
        item.text.toLowerCase().includes(searchValue.toLowerCase())
      )
    : defaultItems?.slice(0, limit);

  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className={className}>
      <p className={"font-bold mb-3"}>{title}</p>

      {showAll && (
        <div className={"mb-5"}>
          <Input
            className={"bg-gray-50, border-none"}
            placeholder={searchInputPlaceholder}
            onChange={onChangeSearchInput}
          />
        </div>
      )}

      <div
        className={"flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar"}
      >
        {list?.map((el, index) => (
          <FilterCheckbox
            onCheckedChange={(ids) => console.log(ids)}
            endAdornment={el.endAdornment}
            key={`${el.value}-${index}`}
            value={el.value}
            checked={false}
            text={el.text}
          />
        ))}

        {items.length > limit && (
          <div className={showAll ? "border-t border-t-neutral-100 mt-4" : ""}>
            <button
              className={"text-primary mt-3"}
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Скрыть" : "+ Показать все"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
