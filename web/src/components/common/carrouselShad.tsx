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
import ProductCard from "./productCard";

export function CarouselSize({ data }: { data: products[] }) {
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
    <div className="mx-auto">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
        setApi={setApi}
      >
        <CarouselContent>
          {data.map((product, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
              <ProductCard product={product} key={index} />
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
    </div>
  );
}
