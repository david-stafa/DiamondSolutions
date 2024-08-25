"use client";

import * as React from "react";
import { type CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function CarouselProduct({ data }: { data: string[] }) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full sm:hidden"
      setApi={setApi}
    >
      <CarouselContent>
        {data.map((link, index) => (
          <CarouselItem
            key={index}
            className="w-full md:basis-1/2 lg:basis-1/4"
          >
            <div className="relative aspect-square w-full shrink-0 overflow-hidden rounded-2xl">
              <Image
                className="pointer-events-none"
                alt={`carousel-image-${index}`}
                fill
                src={link || "https://random.imagecdn.app/500/500"}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="mt-4 flex h-fit w-full items-center justify-center">
        <CarouselPrevious />
        <div className="text-muted-foreground mx-2 py-2 text-center text-sm">
          {current} / {count}
        </div>
        <CarouselNext />
      </div>
    </Carousel>
  );
}
