import Link from "next/link";
import { FaPhoneVolume, FaWhatsapp } from "react-icons/fa6";
export function AgentList() {
  return (
    <section
      className="w-full py-20 sm:py-5 bg-slate-300 text-center px-16 sm:px-5 xs:px-4"
      id="agents"
    >
      <h2 className="text-slate-800 text-4xl sm:text-2xl">
        Official Melbet Agent.
      </h2>
      <h3 className="text-2xl sm:text-xl text-slate-700 mt-1">
        Open your melbet account with trusted agents now!
      </h3>
      <div className="md:px-4 sm:px-0 mt-12 flex flex-wrap md:gap-y-5 sm:gap-x-4 justify-between max-w-[1300px] mx-auto">
        <div className="flex flex-col text-center md:w-2/5 sm:w-[48%]">
          <p className="text-2xl sm:text-xl font-bold text-slate-800">
            Ryan Chaudhary
          </p>
          <p className="mt-2 text-xl sm:text-base font-semibold text-slate-700">
            Melbet Official Agent
          </p>
          <div className="flex items-center gap-x-2 mt-2">
            <FaPhoneVolume size={16} className="text-slate-700" />
            <p className="text-xl sm:text-base text-slate-700">+917005083672</p>
          </div>
          <Link href="https://wa.me/+917005083672">
            <div className="mt-2 flex items-center justify-center gap-x-1 text-white bg-green-800 h-10 p-4 rounded">
              <FaWhatsapp />
              <p className="text-xl sm:text-base font-bold">Message</p>
            </div>
          </Link>
        </div>

        <div className="flex flex-col text-center md:w-2/5 sm:w-[47%]">
          <p className="text-2xl sm:text-xl font-bold text-slate-800">
            Salman Khan
          </p>
          <p className="mt-2 text-xl sm:text-base font-semibold text-slate-700">
            Melbet Official Agent
          </p>
          <div className="flex items-center gap-x-2 mt-2">
            <FaPhoneVolume size={16} className="text-slate-700" />
            <p className="text-xl sm:text-base text-slate-700">+919844063028</p>
          </div>
          <Link href="https://wa.me/+919844063028">
            <div className="mt-2 flex items-center justify-center gap-x-1 text-white bg-green-800 h-10 p-4 rounded">
              <FaWhatsapp />
              <p className="text-xl sm:text-base font-bold">Message</p>
            </div>
          </Link>
        </div>

        <div className="flex flex-col text-center md:w-2/5 sm:w-[47%]">
          <p className="text-2xl sm:text-xl font-bold text-slate-800">
            Kabir Khan
          </p>
          <p className="mt-2 text-xl sm:text-base font-semibold text-slate-700">
            Melbet Official Agent
          </p>
          <div className="flex items-center gap-x-2 mt-2">
            <FaPhoneVolume size={16} className="text-slate-700" />
            <p className="text-xl sm:text-base text-slate-700">+919507355486</p>
          </div>
          <Link href="https://wa.me/+919507355486">
            <div className="mt-2 flex items-center justify-center gap-x-1 text-white bg-green-800 h-10 p-4 rounded">
              <FaWhatsapp />
              <p className="text-xl sm:text-base font-bold">Message</p>
            </div>
          </Link>
        </div>
        <div className="flex flex-col text-center md:w-2/5 sm:w-[47%]">
          <p className="text-2xl sm:text-xl font-bold text-slate-800">
            Badsha Khan
          </p>
          <p className="mt-2 text-xl sm:text-base font-semibold text-slate-700">
            Melbet Official Agent
          </p>
          <div className="flex items-center gap-x-2 mt-2">
            <FaPhoneVolume size={16} className="text-slate-700" />
            <p className="text-xl sm:text-base text-slate-700">
              +8801616659680
            </p>
          </div>
          <Link href="https://wa.me/+8801616659680">
            <div className="mt-2 flex items-center justify-center gap-x-1 text-white bg-green-800 h-10 p-4 rounded">
              <FaWhatsapp />
              <p className="text-xl sm:text-base font-bold">Message</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
