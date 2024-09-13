"use client";

import { useCategoryStore } from "@/store/category";
import { cn } from "@/lib/utils";
import React from "react";

type TCategories = {
  className?: string;
};

export const Categories = (props: TCategories) => {
  const { className } = props;

  const cats = [
    { id: 1, name: "Пиццы" },
    { id: 2, name: "Комбо" },
    { id: 3, name: "Завтрак" },
    { id: 4, name: "Закуски" },
    { id: 5, name: "Коктейли" },
    { id: 6, name: "Кофе" },
    { id: 7, name: "Напитки" },
    { id: 8, name: "Десерты" },
    // { id: 9, name: "Любят дети" },
    // { id: 10, name: "Сосусы" },
  ];

  const categoryActiveId = useCategoryStore((state) => state.activeId);

  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}
    >
      {cats.map(({ name, id }, index) => (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a
          className={cn(
            "flex items-center font-bold h-11 rounded-2xl px-5",
            categoryActiveId === id &&
              "bg-white shadow-md shadow-gray-200 text-primary"
          )}
          href={`/#${name}`}
          key={index}
        >
          <button>{name}</button>
        </a>
      ))}
    </div>
  );
};
