import { cn } from "@/lib/utils";
import React from "react";

type TCategories = {
  className?: string;
};

export const Categories = (props: TCategories) => {
  const { className } = props;

  const cats = [
    "Завтрак",
    "Пиццы",
    "Комбо",
    "Закуски",
    "Коктейли",
    "Кофе",
    "Напитки",
    "Десерты",
    // "Любят дети",
    // "Сосусы",
  ];
  const activeIndex = 0;

  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}
    >
      {cats.map((el, index) => (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a
          className={cn(
            "flex items-center font-bold h-11 rounded-2xl px-5",
            activeIndex === index &&
              "bg-white shadow-md shadow-gray-200 text-primary"
          )}
          key={index}
        >
          <button>{el}</button>
        </a>
      ))}
    </div>
  );
};
