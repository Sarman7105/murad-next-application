"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import banner1 from "@/assets/images/banner1.png";
import banner2 from "@/assets/images/banner2.png";
import banner3 from "@/assets/images/banner3.png";
import banner4 from "@/assets/images/banner4.png";
import { useRef } from "react";

export function Hero() {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

  return (
    <div className="mt-4 w-full flex justify-center">
      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-[1200px]" // Adjust max width for the carousel
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          <CarouselItem className="w-full">
            <Image
              src={banner1}
              alt="trusted melbet agent"
              width={900} // Matches the max-width of the carousel
              height={300}
              className="w-full h-auto object-cover rounded" // Ensure the image scales properly
            />
          </CarouselItem>
          <CarouselItem className="w-full">
            <Image
              src={banner2}
              alt="trusted melbet agent"
              width={900}
              height={300}
              className="w-full h-auto object-cover rounded"
            />
          </CarouselItem>
          <CarouselItem className="w-full">
            <Image
              src={banner3}
              alt="trusted melbet agent"
              width={900}
              height={300}
              className="w-full h-auto object-cover rounded"
            />
          </CarouselItem>
          <CarouselItem className="w-full">
            <Image
              src={banner4}
              alt="trusted melbet agent"
              width={900}
              height={300}
              className="w-full h-auto object-cover rounded"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
