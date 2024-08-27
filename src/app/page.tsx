import { Container, Title, TopBar } from "@/components/shared";
import React from "react";

export default function Home() {
  return (
    <>
      <Container className={"mt-10"}>
        <Title className={"font-extrabold"} text={"Все пиццы"} size={"lg"} />.
        <div>TESTIING</div>
      </Container>
      <TopBar />
    </>
  );
}
