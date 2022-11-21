/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";

export const FAQItem = ({
  title,
  SelectId,
  id,
  check,
  script,
}: {
  title: string;
  SelectId: Function;
  id: Number;
  check: boolean;
  script: string;
}) => {
  return (
    <div id="FAQ" className="cursor-pointer">
      <div
        id="subTitle"
        className="flex items-center justify-between"
        onClick={() => SelectId(id)}
      >
        {check ? (
          <>
            <h2 className="hover:text-soft-red text-black text-sm font-semibold">
              {title}
            </h2>
            <img
              src="/images/icon-arrow-down.svg"
              alt="donw"
              className="rotate-180"
            />
          </>
        ) : (
          <>
            <h2 className="hover:text-soft-red text-black text-sm font-extralight">
              {title}
            </h2>
            <img src="/images/icon-arrow-down.svg" alt="donw" />
          </>
        )}
      </div>
      {check && (
        <p className="a mt-3 font-extralight text-xs text-desaturated-blue w-80 leading-4">
          {script}
        </p>
      )}
      <div className="border-solid border-[0.5px] my-4"></div>
    </div>
  );
};
