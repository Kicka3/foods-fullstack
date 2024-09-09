import { ProductCard } from "@/components/shared/product-card";
import { Container, Title, TopBar } from "@/components/shared";
import { Filters } from "@/components/shared/filters";
import React from "react";

export default function Home() {
  return (
    <>
      <Container className={"mt-10"}>
        <Title className={"font-extrabold"} text={"Все пиццы"} size={"lg"} />.
      </Container>
      <TopBar />

      <Container className={"mt-10 pb-14"}>
        <div className={"flex gap-[60px]"}>
          {/*// Фильтрация*/}
          <div className={"w-[250px]"}>
            <Filters />
          </div>

          {/*// Список товаров*/}
          <div className={"flex-1"}>
            <div className={"flex flex-cool gap-16"}>{/*Список товаров*/}</div>
          </div>
        </div>
      </Container>
    </>
  );
}
