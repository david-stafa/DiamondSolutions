// carousel.tsx
"use client";

import { ButtonBase, TabScrollButton } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Carousel = ({ data }: { data: string[] }) => {
  // State and Ref initialization
  const [currentImg, setCurrentImg] = useState(0);
  const [carouselSize, setCarouselSize] = useState({ width: 0, height: 0 });
  const carouselRef = useRef(null);

  // useEffect to get the initial carousel size
  useEffect(() => {
    let elem = carouselRef.current as unknown as HTMLDivElement;
    let { width, height } = elem.getBoundingClientRect();
    if (carouselRef.current) {
      setCarouselSize({
        width,
        height,
      });
    }
  }, []);

  return (
    <div className="sm:hidden">
      {/* Carousel container */}
      <div className="block aspect-square w-full overflow-hidden rounded-2xl">
        {/* Image container */}
        <div
          ref={carouselRef}
          style={{
            left: -currentImg * (carouselSize.width),
            transform: `translateX(${-currentImg * carouselSize.width}px)`,
          }}
          className="flex aspect-square w-full transition-all duration-300"
        >
          {/* Map through data to render images */}
          {data.map((image, i) => (
            <div key={i} className="relative aspect-square w-full shrink-0">
              <Image
                className="pointer-events-none"
                alt={`carousel-image-${i}`}
                fill
                src={image || "https://random.imagecdn.app/500/500"}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="mt-3 flex flex-col items-center justify-center">
        <div>
           {currentImg + 1} z {data.length}
        </div>
        <div>
          <button
            disabled={currentImg === 0}
            onClick={() => setCurrentImg((prev) => prev - 1)}
            className={`border px-4 py-2 font-bold ${currentImg === 0 && "opacity-50"} rounded-2xl mr-1`}
          >
            {"<"}
          </button>
          <button
            disabled={currentImg === data.length - 1}
            onClick={() => setCurrentImg((prev) => prev + 1)}
            className={`border px-4 py-2 font-bold ${currentImg === data.length - 1 && "opacity-50"} rounded-2xl ml-1`}
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
