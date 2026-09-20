import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Approach } from "@/components/sections/Approach";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { Stack } from "@/components/sections/Stack";
import { Outcomes } from "@/components/sections/Outcomes";
import { Engagement } from "@/components/sections/Engagement";
import { Clients } from "@/components/sections/Clients";
import { WhyUs } from "@/components/sections/WhyUs";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="frame">
        <Hero />
        <Problem />
        <Approach />
        <WhatWeDo />
        <HowWeWork />
        <Stack />
        <Outcomes />
        <Engagement />
        <Clients />
        <WhyUs />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  );
}
