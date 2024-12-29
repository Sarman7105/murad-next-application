import Link from "next/link";
import { Button } from "./ui/button";

export function Banner() {
  return (
    <section
      id="home"
      className="bg-custom-banner sm:bg-center h-[500px] xs:h-[350px] flex justify-start items-center bg-cover bg-center px-16 md:px-5 sm:px-4"
    >
      <div className="flex flex-col">
        <h1 className="text-white text-5xl md:text-4xl xs:text-2xl">
          Melbet Trusted Agent
        </h1>
        <h2 className="text-white text-5xl md:text-4xl xs:text-2xl md:mt-3 xs:mt-1 mt-6">
          Start Playing!
        </h2>
        <p className="mt-2 text-white text-xl sm:text-base">
          Use promo code <span className="text-yellow-500">VIP203</span>
        </p>
        <p className=" text-white text-xl sm:text-base">
          Get $130 on first deposit.
        </p>
        <div className="mt-8 xs:mt-3 flex gap-6 xs:gap-3">
          <Link
            href="https://refpakrtsb.top/L?tag=d_3668271m_18645c_&site=3668271&ad=18645"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="text-xl font-semibold xs:w-[130px]" size="xl">
              App Link
            </Button>
          </Link>
          <Link href="https://wa.me/+917005083672">
            <Button
              className="text-xl font-semibold xs:w-[130px]"
              size="xl"
              variant="outline"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
