import Image from "next/image";
import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link href={"/"} className="font-bold text-3xl text-[#ff595a] hover:cursor-pointer">
      <Image alt="Logo" src="/Logo.jpg" width={60} height={60} />
    </Link>
  );
}

export default Logo;
