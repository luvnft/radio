import ApplySection from "./components/apply";
import CommunitySection from "./components/community";
import HeroSection from "./components/hero";
import { metadata } from 'next-sanity/studio/metadata';
import PartnersSection from "./components/partners";

export default function Home() {
  return (
    <main>
      <HeroSection />

      <CommunitySection />

      <ApplySection />

      <PartnersSection />
    </main>
  );
}
