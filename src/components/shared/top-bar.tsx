import { Categories } from "@/components/shared/categories";
import { SortPopup } from "@/components/shared/sort-popup";
import { Container } from "@/components/shared/container";
import { cn } from "@/lib/utils";
import React from "react";

type TTopBar = {
  className?: string;
};

export const TopBar = ({ className }: TTopBar) => {
  return (
    <div
      className={cn(
        "sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10",
        className
      )}
    >
      <Container>
        <Categories />
        <SortPopup />
      </Container>
    </div>
  );
};
