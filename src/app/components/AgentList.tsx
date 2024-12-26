import Link from "next/link";
import { FaPhoneVolume, FaWhatsapp } from "react-icons/fa6";
export function AgentList() {
  return (
    <section className="w-full py-20 bg-slate-300">
      <h2 className="mt-5 text-slate-800 text-4xl text-center">
        Official Melbet Agent.
      </h2>
      <h3 className="text-2xl text-slate-700 text-center ">
        Open your melbet account with trusted agents now!
      </h3>
      <div className="px-40 mt-12 flex justify-between">
        <div className="flex flex-col text-center">
          <p className="text-4xl text-bold text-slate-800">Khan Bhai</p>
          <p className="mt-2 text-xl text-semibol text-slate-700">
            Melbet Official Agent
          </p>
          <div className="flex items-center gap-x-2 mt-2">
            <FaPhoneVolume size={24} className="text-slate-700" />
            <p className="text-xl text-slate-700">+917005083672</p>
          </div>
          <Link href="/">
            <div className="mt-2 flex items-center justify-center gap-x-1 text-white bg-green-800 h-10 p-4 rounded">
              <FaWhatsapp />
              <p className="text-xl text-bold">Message</p>
            </div>
          </Link>
        </div>

        <div className="flex flex-col text-center">
          <p className="text-4xl text-bold text-slate-800">Khan Bhai</p>
          <p className="mt-2 text-xl text-semibol text-slate-700">
            Melbet Official Agent
          </p>
          <div className="flex items-center gap-x-2 mt-2">
            <FaPhoneVolume size={24} className="text-slate-700" />
            <p className="text-xl text-slate-700">+917005083672</p>
          </div>
          <Link href="/">
            <div className="mt-2 flex items-center justify-center gap-x-1 text-white bg-green-800 h-10 p-4 rounded">
              <FaWhatsapp />
              <p className="text-xl text-bold">Message</p>
            </div>
          </Link>
        </div>

        <div className="flex flex-col text-center">
          <p className="text-4xl text-bold text-slate-800">Khan Bhai</p>
          <p className="mt-2 text-xl text-semibol text-slate-700">
            Melbet Official Agent
          </p>
          <div className="flex items-center gap-x-2 mt-2">
            <FaPhoneVolume size={24} className="text-slate-700" />
            <p className="text-xl text-slate-700">+917005083672</p>
          </div>
          <Link href="/">
            <div className="mt-2 flex items-center justify-center gap-x-1 text-white bg-green-800 h-10 p-4 rounded">
              <FaWhatsapp />
              <p className="text-xl text-bold">Message</p>
            </div>
          </Link>
        </div>
        <div className="flex flex-col text-center">
          <p className="text-4xl text-bold text-slate-800">Khan Bhai</p>
          <p className="mt-2 text-xl text-semibol text-slate-700">
            Melbet Official Agent
          </p>
          <div className="flex items-center gap-x-2 mt-2">
            <FaPhoneVolume size={24} className="text-slate-700" />
            <p className="text-xl text-slate-700">+917005083672</p>
          </div>
          <Link href="/">
            <div className="mt-2 flex items-center justify-center gap-x-1 text-white bg-green-800 h-10 p-4 rounded">
              <FaWhatsapp />
              <p className="text-xl text-bold">Message</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
