"use client";

import Image from "next/image";
import { WebImage } from "@starmedica/common";
import { CounterComponent } from "@starmedica/common";
import BussinesLogicProvider from "@starmedica/common/src/BusinessLogicProvider";
import { Test } from "./Test";

export default function Home() {

  return (
    <BussinesLogicProvider>
      <Test />
    </BussinesLogicProvider>
  );
}
