import { Title } from "@/components/shared/title";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

export type TProductCard = {
  className?: string;
  imageUrl: string;
  price: number;
  name: string;
  id: number;
};

export const ProductCard = ({
  className,
  imageUrl,
  price,
  name,
  id,
}: TProductCard) => {
  return (
    <div className={className}>
      <Link href={`/product/${id}`}>
        <div
          className={
            "flex justify-center p-6 bg-secondary rounded-lg h-[260px]"
          }
        >
          <img className={"h-[215px] w-[215px]"} src={imageUrl} alt={name} />
        </div>

        <Title className={"mb-1 my-3 font-bold"} text={name} size={"sm"} />

        <p className={"text-sm text-gray-400"}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>

        <div className={"flex justify-between items-center mt-4"}>
          <span className={"text-[20px]"}>
            от <b>{price} ₽</b>
          </span>

          <Button variant={"secondary"}>
            <Plus size={20} className={"mr-1"} />
            Добавить
          </Button>
        </div>
      </Link>
    </div>
  );
};
