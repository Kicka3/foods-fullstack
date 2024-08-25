import { ArrowRight, ShoppingCart, User } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type THeader = {
  className?: string;
};

export const Header = ({ className }: THeader) => {
  return (
    <header className={cn("border border-b", className)}>
      <Container className={"flex items-center justify-between py-8"}>
        {/*Левая часть*/}
        <div className={"flex items-center gap-4"}>
          <Image src="/logo.png" alt="logo" width={35} height={35} />

          <div>
            <h1 className={"text-2xl uppercase font-black"}>Great-food</h1>

            <p className={"text-sm text-gray-400 leading-3"}>
              © вкуснее только у мамы
            </p>
          </div>
        </div>

        {/*Правая часть*/}
        <div className={"flex items-center gap-3"}>
          <Button className={"flex items-center gap-1"} variant={"outline"}>
            <User size={16} />
            Войти
          </Button>

          <div>
            <Button className={"group relative"}>
              <b>520 ₽</b>
              <span className={"h-full w-[1px] bg-white/30 mx-3"} />
              <div
                className={
                  "flex items-center gap-1 transition duration-300 group-hover:opacity-0"
                }
              >
                <ShoppingCart className={"h-4 w-4 relative"} strokeWidth={2} />
                <b>3</b>
              </div>
              <ArrowRight
                className={
                  "w-5 absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                }
              />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
