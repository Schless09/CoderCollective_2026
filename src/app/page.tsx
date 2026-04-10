import DualPathCTA from "@/components/landing-page/DualPathCTA";
import Hero from "@/components/landing-page/Hero";
import ResumeImprovementTeaser from "@/components/landing-page/ResumeImprovementTeaser";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <DualPathCTA />
      <ResumeImprovementTeaser />
    </div>
  );
}
