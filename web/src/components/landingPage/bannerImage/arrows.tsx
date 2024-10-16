"use client";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Dispatch, SetStateAction } from "react";

interface ArrowsProps {
  bannersLength: number;
  bannerPos: number;
  setBannerPos: Dispatch<SetStateAction<number>>;
}

const Arrows: React.FC<ArrowsProps> = ({
  bannersLength,
  bannerPos,
  setBannerPos,
}) => {
  const handleBannerNext = () => {
    bannerPos == bannersLength - 1
      ? setBannerPos(0)
      : setBannerPos(bannerPos + 1);
  };

  const handleBannerPrevious = () => {
    bannerPos == 0
      ? setBannerPos(bannersLength - 1)
      : setBannerPos(bannerPos - 1);
  };

  return (
    <>
      <span
        className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-4 items-center justify-center rounded-full bg-slate-400 opacity-80 hover:opacity-100 md:right-10"
        onClick={handleBannerNext}
      >
        <ArrowForwardIcon sx={{ color: "white" }} />
      </span>
      <span
        className="absolute left-3 top-1/2 flex h-8 w-8 -translate-y-4 items-center justify-center rounded-full bg-slate-400 opacity-80 hover:opacity-100 md:left-10"
        onClick={handleBannerPrevious}
      >
        <ArrowBackIcon sx={{ color: "white" }} />
      </span>
    </>
  );
};

export default Arrows;
