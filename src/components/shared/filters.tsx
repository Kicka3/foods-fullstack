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
        <FilterCheckbox text={"Можно собрать"} value={"1"} />
        <FilterCheckbox text={"Новинки"} value={"2"} />
      </div>

      <div className={"mt-5 border-y border-y-neutral-100 py-6 pb-7"}>
        <p className={"font-bold mb-3"}>Цена от и до</p>
        <div className={"flex gap-5 mb-5"}>
          <Input
            type={"number"}
            placeholder={"0"}
            min={0}
            max={1500}
            defaultValue={0}
          />
          <Input type={"number"} placeholder={"1000"} min={0} max={1500} />
        </div>

        <RangeSlider step={10} min={0} max={4000} value={[0, 4000]} />
      </div>
    </div>
  );
};
