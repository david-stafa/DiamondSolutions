"use client";

import { Button } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Container from "./Container";

const ItemsGalleryMobile = ({
  data,
}: {
  data: {
    image: string;
  }[];
}) => {
    // to limit 
  const displayedItems = 2;
  // Gap between elements  - for calculatin width and movement
  const gap = 10;

  const [translateValue, setTranslateValue] = useState(0);
  // Used to limit unnecesarry translating
  const [count, setCount] = useState(2);

  // Get dimensions of a container
  const refContainer = useRef(null);
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    let elem = refContainer.current as unknown as HTMLDivElement;
    let { width, height } = elem.getBoundingClientRect();
    if (refContainer.current) {
      setDimensions({
        width,
        height,
      });
    }
  }, []);

//   let parentContainerWidth = ((dimensions.width + gap) * 3 * 100) / 85.75;

  const handleTranslateNext = () => {
    if (count <= data.length - 1) {
      setTranslateValue((prev) => prev - (dimensions.width + gap));
      setCount((prev) => prev + 1);
    } 
    // else if (count == data.length - 1) {
    //   setTranslateValue((prev) => prev - parentContainerWidth * 0.1425 + gap);
    //   setCount(data.length);
    // }
  };

  const handleTranslatePrev = () => {
    // if (count == data.length) {
    //   setTranslateValue(
    //     (prev) => prev + (dimensions.width - gap * (data.length - 2)),
    //   );
    //   setCount((prev) => prev - 1);
    // } 
    if (count > displayedItems) {
      setTranslateValue((prev) => prev + dimensions.width + gap);
      setCount((prev) => prev - 1);
    }
  };

  return (
    <div className="overflow-clip md:hidden">
      <Button onClick={handleTranslatePrev}>Prev</Button>
      <Button onClick={handleTranslateNext}>Next</Button>
        <div
          className="relative flex transition duration-200 ease-linear overflow-hidden"
          style={{
            transform: `translateX(${translateValue}px)`,
            width: `calc((45% * ${data?.length}) + (${data?.length - 1} * ${gap}px))`,
            gap: `${gap}px`,
          }}
        >
          {data?.map((v, i) => (
            <div
              key={i}
              className="relative aspect-square"
              style={{
                width: `calc(((100% - (${gap}px * ${data?.length - 1})) / ${data?.length}))`,
              }}
              ref={refContainer}
            >
              <Image
                className="pointer-events-none"
                alt={`carousel-image-${i}`}
                fill
                src={v.image || "https://random.imagecdn.app/500/500"}
              />
            </div>
          ))}
        </div>
    </div>
  );
};

export default ItemsGalleryMobile;
