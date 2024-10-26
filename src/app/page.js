"use client"
import Image from "next/image";

export default function Home() {
  const tg = window.Telegram?.WebApp
  console.log(tg)
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <p>{tg.initData?`${tg.initDataUnsafe}`:"not tg"}</p>
    </div>
  );
}
