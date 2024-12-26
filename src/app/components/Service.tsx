export function Service() {
  return (
    <section className="bg-slate-200 py-20">
      <h3 className="text-3xl text-slate-700 text-center font-semibold ">
        Our Services
      </h3>
      <h2 className="text-2xl text-slate-600 text-center ">
        Contact us and get our service.
      </h2>
      <div className="flex w-full mt-20 mb-10">
        <div className="relative h-80 flex flex-col justify-center items-center flex-1 bg-[url('/slot.jpg')] bg-center ps-4">
          <div className="absolute inset-0 bg-black opacity-50 "></div>
          <div className="relative z-10 text-white text-center">
            <p className="text-3xl text-bold">Open Account.</p>
            <p className="text-xl mt-2">
              We help our user to open new melbet account. By opening account
              with your promo code customer will get extra bonus.
            </p>
          </div>
        </div>
        <div className="relative h-80 flex flex-col justify-center items-center flex-1 bg-[url('/casino.jpg')] bg-center p-4">
          <div className="absolute inset-0 bg-yellow-900 opacity-50 "></div>
          <div className="relative z-10 text-white text-center">
            <p className="text-3xl text-bold ">Cash Withdraw.</p>
            <p className="mt-2 text-2xl">
              Customer can deposit and withdraw cash any time they want.
            </p>
          </div>
        </div>
        <div className="relative h-80 flex justify-center items-center flex-1 bg-[url('/football.jpg')] bg-center p-4">
          <div className="absolute inset-0 bg-black opacity-50 "></div>
          <div className="relative z-10 text-white text-center">
            <p className="text-3xl text-bold">Customer support.</p>
            <p className="mt-2 text-2xl">
              We provide 24/7 customer support. If user face any problem we
              solve instantly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
