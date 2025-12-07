import Hero from "@/components/Hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bosco Ng - Software Engineer & CS Student",
  description: "Hi, I'm Bosco! A software engineer and second-year CS student at Queen's University. I've led teams across 8+ projects to ship award-winning web applications serving 8,400+ active users.",
  openGraph: {
    title: "Hi, I'm Bosco",
    description: "Hi, I'm Bosco! A software engineer and second-year CS student at Queen's University. I've led teams across 8+ projects to ship award-winning web applications serving 8,400+ active users.",
    images: ["/images/portfolio.png"],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen homepage-gradient">
      <div className="h-2" />
      <Hero />
    </div>
  );
}
