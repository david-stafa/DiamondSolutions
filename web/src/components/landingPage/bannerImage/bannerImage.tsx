"use client";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import { useState } from "react";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../../sanity/client";

const builder = imageUrlBuilder(client);

const BannerImage = ({ banners }) => {
  const [bannerPos, setBannerPos] = useState(0);

  function urlFor(banners) {
    return builder.image(banners[bannerPos]?.imageUrl);
  }

  const handleBannerNext = () => {
    bannerPos == banners.length - 1
      ? setBannerPos(0)
      : setBannerPos(bannerPos + 1);
    console.log(bannerPos);
  };

  const handleBannerPrevious = () => {
    bannerPos == 0
      ? setBannerPos(banners.length - 1)
      : setBannerPos(bannerPos - 1);
    console.log(bannerPos);
  };

  console.log(banners);

  return (
    <div
      className="relative m-auto h-screen max-h-[70vh] w-screen bg-cover"
      // style={{ backgroundImage: `url(${banners[bannerPos]?.imageUrl})` }}
    >
      <Image
        src={urlFor(banners).url()}
        sizes="100vw"
        // style={{
        //   width: "100%",
        //   height: "100%",
        // }}
        fill={true}
        // width={500}
        // height={300}
        priority={true}
        alt="alt"
        quality={100}
      />
      <span
        className="absolute right-10 top-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-slate-400 opacity-80 hover:opacity-100"
        onClick={handleBannerNext}
      >
        <ArrowForwardIcon sx={{ color: "white" }} />
      </span>
      <span
        className="absolute left-10 top-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-slate-400 opacity-80 hover:opacity-100"
        onClick={handleBannerPrevious}
      >
        <ArrowBackIcon sx={{ color: "white" }} />
      </span>
    </div>
  );
};

export default BannerImage;
