"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import Image from "next/image";
import image1 from "@/assets/images/casino1.jpeg";
import image3 from "@/assets/images/casino3.jpeg";
import image4 from "@/assets/images/casino4.jpeg";
import image5 from "@/assets/images/casino5.jpeg";
import { FaFacebook, FaTelegram } from "react-icons/fa";
import Link from "next/link";

export function About() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <section className="flex justify-between items-center py-12 px-16 bg-slate-400 text-zinc-700">
      <div className="w-[520px]">
        <h2 className="text-3xl font-bold">Welcome to trusted melbet agent.</h2>
        <p className="mt-6 ">
          Experience fast, secure account setup and enjoy seamless access to the
          world of betting. We&apos;re here to assist you every step of the
          way—let&apos;s get started!
        </p>
        <p className="mt-3">
          Melbet is a globally recognized online betting platform that offers a
          seamless and dynamic experience for sports enthusiasts and gaming fans
          alike. Known for its extensive range of sports markets, casino games,
          and live betting options, Melbet has become a preferred destination
          for users seeking entertainment combined with the excitement of
          wagering. The platform prides itself on its user-friendly interface,
          competitive odds, and a wide array of payment methods, ensuring
          convenience and accessibility for players around the world.
        </p>
        <h3 className="mt-4 text-xl font-semibold">Follow us on</h3>
        <div className="flex mt-2 gap-x-3">
          <Link href="/" className="text-blue-700 hover:text-blue-700/90">
            <FaFacebook size={30} />
          </Link>
          <Link href="/" className="text-yellow-700 hover:text-yellow-700/90">
            <FaTelegram size={30} />
          </Link>
        </div>
      </div>
      <div className="w-[500px] h-[300px]">
        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-[1200px]" // Adjust max width for the carousel
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            <CarouselItem className="w-full">
              <Image
                src={image1}
                alt="trusted melbet agent"
                width={500} // Matches the max-width of the carousel
                height={300}
                className="w-full h-full object-cover rounded" // Ensure the image scales properly
              />
            </CarouselItem>

            <CarouselItem className="w-full">
              <Image
                src={image3}
                alt="trusted melbet agent"
                width={500} // Matches the max-width of the carousel
                height={300}
                className="w-full h-full object-cover rounded" // Ensure the image scales properly
              />
            </CarouselItem>
            <CarouselItem className="w-full">
              <Image
                src={image4}
                alt="trusted melbet agent"
                width={500} // Matches the max-width of the carousel
                height={300}
                className="w-full h-full object-cover rounded" // Ensure the image scales properly
              />
            </CarouselItem>
            <CarouselItem className="w-full">
              <Image
                src={image5}
                alt="trusted melbet agent"
                width={500} // Matches the max-width of the carousel
                height={300}
                className="w-full h-full object-cover rounded" // Ensure the image scales properly
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
