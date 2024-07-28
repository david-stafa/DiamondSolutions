"use client";

import Image from "next/image";
import Arrows from "./arrows";
import React, { useState } from "react";
import { urlFor } from "@/sanity/imageUrl";

type Props = {
  banners: Banner[];
};

const BannerImage: React.FC<Props> = ({ banners }) => {
  const [bannerPos, setBannerPos] = useState(0);

  return (
    <div className="relative m-auto h-screen max-h-[70vh] w-screen bg-cover">
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
