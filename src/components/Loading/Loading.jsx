import { Spinner } from "@heroui/react";
import React from "react";

export default function Loading() {
  return (
    <div className="fixed flex justify-center items-center  z-50 top-0 left-0 right-0 bottom-0  bg-gray-400/30 ">
     <Spinner size="xl" />

    </div>
  );
}
