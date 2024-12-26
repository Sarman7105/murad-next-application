import { Button } from "./ui/button";

export function Banner() {
  return (
    <div className="bg-custom-banner h-[500px] flex justify-start items-center bg-cover bg-center px-8">
      <div className="flex flex-col ml-8">
        <h1 className="text-white text-5xl">Melbet Trusted Agent</h1>
        <h2 className="text-white text-5xl mt-6">Start Playing!</h2>
        <p className="mt-2 text-white text-xl">
          Use promo code <span className="text-yellow-500">VIP203</span>
        </p>
        <p className=" text-white text-xl">Get $130 on first deposit.</p>
        <div className="mt-8">
          <Button className="text-xl font-semibold" size="xl">
            Download App
          </Button>
          <Button
            className="text-xl font-semibold ml-6"
            size="xl"
            variant="outline"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
}
