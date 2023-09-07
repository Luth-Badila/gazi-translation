"use client";
import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

function WaIcon() {
  return (
    <div className="fixed bottom-3 z-50 right-3 p-3 bg-green-500 rounded-lg">
      <Link href="" className="flex gap-3 items-center">
        <Icon icon="logos:whatsapp-icon" width={40} />
        <p>Hubung kami</p>
      </Link>
    </div>
  );
}

export default WaIcon;
