"use client";

import { ProductCard } from "@/components/shared/product-card";
import { useCategoryStore } from "@/store/category";
import { Title } from "@/components/shared/title";
import { useIntersection } from "react-use";
import React, { useEffect } from "react";
import { cn } from "@/lib/utils";

type TProductsGroupList = {
  listClassName?: string;
  className?: string;
  categoryId: number;
  items: any[];
  title: string;
};

export const ProductsGroupList = (props: TProductsGroupList) => {
  const { className, items, title, listClassName, categoryId } = props;

  const setActiveCategoryIf = useCategoryStore((state) => state.setActiveId);

  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryIf(categoryId);
    }
  }, [intersection]);

  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size={"lg"} className={"mb-5 font-extrabold"} />

      <div className={cn("grid grid-cols-3 gap-[50px]", className)}>
        {items.map((product, i) => (
          <ProductCard
            price={product.items[0].price}
            imageUrl={product.imageUrl}
            name={product.name}
            id={product.id}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};
