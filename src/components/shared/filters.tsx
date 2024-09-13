import { CheсkboxFiltersGroup } from "@/components/shared/chekbox-filters-group";
import { FilterCheckbox } from "@/components/shared/filter-checkbox";
import { Input, RangeSlider } from "@/components/ui";
import { Title } from "@/components/shared/title";
import React from "react";

type TFilters = {
  className?: string;
};

export const Filters = (props: TFilters) => {
  const { className } = props;

  return (
    <div className={className}>
      <Title text={"Фильтрация"} className={"mb-5 font-bold"} />

      <div className={"flex flex-col gap-4"}>
        <FilterCheckbox text={"Можно собрать"} value={"111"} />
        <FilterCheckbox text={"Новинки"} value={"222"} />
      </div>

      <div className={"mt-5 border-y border-y-neutral-100 py-6 pb-7"}>
        <p className={"font-bold mb-3"}>Цена от и до</p>
        <div className={"flex gap-5 mb-5"}>
          <Input
            type={"number"}
            placeholder={"0"}
            defaultValue={0}
            max={1500}
            min={0}
          />
          <Input type={"number"} placeholder={"1000"} min={0} max={1500} />
        </div>

        <RangeSlider step={10} min={0} max={4000} value={[0, 4000]} />
      </div>

      <CheсkboxFiltersGroup
        searchInputPlaceholder={"Поиск..."}
        title={"Ингредиенты"}
        defaultItems={[
          {
            text: "Красный лук",
            value: "1",
          },
          {
            text: "Томаты",
            value: "2",
          },
          {
            text: "Солёные огурчики",
            value: "3",
          },
          {
            text: "Сырный соус",
            value: "4",
          },
          {
            text: "Моцарелла",
            value: "5",
          },
          {
            text: "Лобстер",
            value: "6",
          },
          {
            text: "Салями",
            value: "7",
          },
          {
            text: "Красный перец",
            value: "8",
          },
        ]}
        className={"mt-5"}
        items={[
          {
            text: "Красный лук",
            value: "1",
          },
          {
            text: "Томаты",
            value: "2",
          },
          {
            text: "Солёные огурчики",
            value: "3",
          },
          {
            text: "Сырный соус",
            value: "4",
          },
          {
            text: "Моцарелла",
            value: "5",
          },
          {
            text: "Лобстер",
            value: "6",
          },
          {
            text: "Салями",
            value: "7",
          },
          {
            text: "Красный перец",
            value: "8",
          },
          {
            text: "Сырный соус",
            value: "99",
          },
          {
            text: "Моцарелла",
            value: "10",
          },
          {
            text: "Лобстер",
            value: "6",
          },
          {
            text: "Салями",
            value: "11",
          },
          {
            text: "Красный перец",
            value: "12",
          },
          {
            text: "Сырный соус",
            value: "13",
          },
          {
            text: "Моцарелла",
            value: "14",
          },
          {
            text: "Лобстер",
            value: "15",
          },
          {
            text: "Салями",
            value: "17",
          },
          {
            text: "Красный перец",
            value: "18",
          },
          {
            text: "Сырный соус",
            value: "16",
          },
          {
            text: "Моцарелла",
            value: "19",
          },
          {
            text: "Чеснок",
            value: "20",
          },
          {
            text: "Салями",
            value: "21",
          },
          {
            text: "Красный перец",
            value: "22",
          },
        ]}
        limit={6}
      />
    </div>
  );
};
