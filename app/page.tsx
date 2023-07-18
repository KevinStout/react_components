"use client";
import Image from "next/image";
import { Parent } from "./components/Parent";
import MyButton from "./components/MyButton";
import SharedCountGroup from "./components/SharedCountGroup";
import { useState } from "react";

export default function Home() {
  const [sharedCount, setSharedCount] = useState({ sharedCount: 0 });
  return (
    <div className="flex flex-col items-center p-11">
      <Parent />
      <MyButton />
      <MyButton />
      <SharedCountGroup />
    </div>
  );
}
