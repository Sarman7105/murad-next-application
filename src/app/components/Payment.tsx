"use client";
import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import bakash from "@/assets/images/bkash.png";
import rocket from "@/assets/images/roket.png";
import taka from "@/assets/images/taka.png";
import ductchBangla from "@/assets/images/dutchbangla.png";
import nogod from "@/assets/images/nogod.png";
import brac from "@/assets/images/brac.png";

export function Payment() {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

  return (
    <section className="py-10 sm:py-5 sm:px-4 bg-slate-100">
      <h3 className="pt-4 text-slate-700 text-3xl sm:text-xl text-center">
        Experience seamless and secure transactions with us.
      </h3>
      <h4 className="mt-4 sm:mt-2 text-slate-500 text-2xl sm:text-base font-bold text-center">
        We Accept
      </h4>
      <div className="mt-10 sm:mt-6 flex justify-center">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-2/4"
          plugins={[plugin.current]}
        >
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 basis-1/4">
              <Image
                src={bakash}
                alt="trusted melbet agent"
                width={300} // Matches the max-width of the carousel
                height={300}
                className="object-cover rounded-2xl" // Ensure the image scales properly
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 basis-1/4 ">
              <Image
                src={nogod}
                alt="trusted melbet agent"
                width={300} // Matches the max-width of the carousel
                height={300}
                className="object-cover rounded-2xl" // Ensure the image scales properly
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 basis-1/4 ">
              <Image
                src={taka}
                alt="trusted melbet agent"
                width={300} // Matches the max-width of the carousel
                height={300}
                className=" object-cover rounded-2xl" // Ensure the image scales properly
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 basis-1/4 ">
              <Image
                src={rocket}
                alt="trusted melbet agent"
                width={300} // Matches the max-width of the carousel
                height={300}
                className="object-cover rounded-2xl" // Ensure the image scales properly
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 basis-1/4 ">
              <Image
                src={ductchBangla}
                alt="trusted melbet agent"
                width={300} // Matches the max-width of the carousel
                height={300}
                className="object-cover rounded-2xl" // Ensure the image scales properly
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 basis-1/4 ">
              <Image
                src={brac}
                alt="trusted melbet agent"
                width={300} // Matches the max-width of the carousel
                height={300}
                className="object-cover rounded-2xl" // Ensure the image scales properly
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
