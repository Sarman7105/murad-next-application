// import { Hero } from "./components/Hero";

import { About } from "./components/About";
import { AgentList } from "./components/AgentList";
import { Banner } from "./components/Banner";
import { Payment } from "./components/Payment";
import { Service } from "./components/Service";

export default function Home() {
  return (
    <div className="bg-white">
      <Banner />
      {/* <Hero /> */}
      <About />
      <AgentList />
      <Service />
      <Payment />
    </div>
  );
}
