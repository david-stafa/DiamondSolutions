"use client";

import Image from "next/image";
import Arrows from "./arrows";
import React, { useEffect, useState } from "react";
import { urlFor } from "@/sanity/imageUrl";

type Props = {
  banners: Banner[];
};

const BannerImage: React.FC<Props> = ({ banners }) => {
  const [bannerPos, setBannerPos] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBannerPos((prevPos) =>
        prevPos === banners.length - 1 ? 0 : prevPos + 1,
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, [banners.length]); // Dependency on banners.length

  return (
    <div className="relative m-auto h-screen max-h-[35vh] w-full bg-cover md:max-h-[550px]">
      <Image
        src={banners[bannerPos].imageUrl}
        sizes="100vw"
        fill={true}
        priority={true}
        alt="alt"
        quality={100}
      />
      <Arrows
        bannersLength={banners.length}
        bannerPos={bannerPos}
        setBannerPos={setBannerPos}
      />
    </div>
  );
};

export default BannerImage;
