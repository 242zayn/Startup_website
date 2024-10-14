import Link from "next/link";
import React from "react";
import { TheemButton } from "@/types/types";

const ButtonTheem = ({
  content,
  bg_color,
  border_color,
  border,
}: TheemButton) => {
  return (
    <div>
      <Link
        className={` ${border} ${bg_color} ${border_color} text-white px-6 py-5 `}
        href="#"
      >
        {content}
      </Link>
    </div>
  );
};

export default ButtonTheem;
