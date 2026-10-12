import React from "react";

export default function Logo({
  width = 211,
  height = 185,
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 2107 1851"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlSpace="preserve"
      className={className}
      {...props}
    >
      <path
        fill="currentColor"
        d="M1368.667,1379.208l-244.917,461.333c-2.708,5.292 -6.75,13.333 -13.5,7.542l-1110.25,-1848.083l616.792,133.208c214.208,324.75 425.083,651.833 641.5,975.125l547.875,-893.75c1.417,-9.833 -2.625,-5.583 -8.708,-4.583c-58.667,9.833 -122.333,30.5 -180.667,44.333l-379.292,620.625l-101.5,-144.458l-3.083,-13.875l348.083,-577.208l14.125,-6.708l611.125,-132.583l-690.292,1283.458l-255.542,-2.292l-654.125,-1020.875c-4.583,-7.375 -10.708,-8.542 -18.125,-11.042c-49.958,-17.083 -120.917,-20.542 -173.625,-32.583l747.917,1162.458l306.25,0l-0.042,-0.042Z"
      />
    </svg>
  );
}
