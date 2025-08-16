import Link from "next/link";
import { Caveat, Patrick_Hand } from "next/font/google";
import Highlight from "@/components/Highlight";
import Underline from "@/components/Underline";

const headline = Caveat({
	weight: ["700"],
	subsets: ["latin"],
});

const bodyHand = Patrick_Hand({
	weight: ["400"],
	subsets: ["latin"],
});

export default function Hero() {
	return (
		<section className="mx-auto max-w-5xl px-8 min-h-[78svh] flex items-center">
			<div className="w-full space-y-7">
				<h1 className={`${headline.className} text-5xl sm:text-7xl font-bold leading-tight text-gray-900`}>
					Hi, I’m <span className="font-bold">Bosco</span>
				</h1>
				<p className={`${bodyHand.className} text-xl sm:text-2xl leading-9 text-gray-700 max-w-4xl`}>
					I’m a <Highlight color="rgba(253, 230, 138, 0.45)">software engineer</Highlight> and <Highlight color="rgba(253, 230, 138, 0.45)">second‑year CS student</Highlight> at Queen’s University. At my core, I’m a <Highlight color="rgba(251, 146, 60, 0.45)">leader</Highlight> who bridges programming, creativity, and technology to <Highlight color="rgba(248, 113, 113, 0.35)">drive impact</Highlight>.
				</p>

				<p className={`${bodyHand.className} text-xl sm:text-2xl leading-9 text-gray-700 max-w-4xl`}>
					I’ve <Highlight color="rgba(253, 230, 138, 0.45)">led teams</Highlight> across <Highlight color="rgba(251, 146, 60, 0.35)">6+ projects</Highlight> to ship <Highlight color="rgba(253, 230, 138, 0.45)">award‑winning</Highlight> web applications serving <Highlight color="rgba(248, 113, 113, 0.35)">2,400+ active users</Highlight>. If you want a <Underline>product‑minded</Underline> and <Underline>impact‑driven</Underline> Summer 2026 Developer Intern, <span className="relative inline-block align-baseline px-1"><span className="relative z-10">hire me</span><span aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 hand-circle"><svg width="140" height="50" viewBox="0 0 140 50" fill="none"><ellipse className="draw-stroke" style={{ ['--len' as any]: 220, ['--dash' as any]: 0 }} cx="70" cy="25" rx="52" ry="14"/></svg></span></span>.
				</p>

				<div className="space-y-8">
					<div className="relative inline-block group">
						<Link
							href="/experience"
							className="group inline-flex items-center gap-3 text-base sm:text-lg font-medium text-gray-900"
						>
							<span>See More About Me</span>
							<span aria-hidden className="inline-block translate-x-0 text-gray-900 animate-float-x">→</span>
						</Link>
						{/* Handwritten red pen circle on hover */}
						<span className="pointer-events-none absolute -inset-2 opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100 hand-circle">
							<svg width="180" height="52" viewBox="0 0 180 52" fill="none">
								<ellipse className="draw-stroke" style={{ ['--len' as any]: 520, ['--dash' as any]: 520 }} cx="90" cy="26" rx="82" ry="18"/>
								<path className="alt draw-stroke" style={{ ['--len' as any]: 540, ['--dash' as any]: 540 }} d="M10 26c25 18 135 18 160 0"/>
							</svg>
						</span>
					</div>

					<div className="flex items-center gap-6 text-gray-500">
						<Link aria-label="LinkedIn" href="https://www.linkedin.com/" target="_blank" className="relative inline-flex items-center justify-center transition-colors hover:text-gray-900 group">
							<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="relative">
								<rect x="2" y="9" width="4" height="12" rx="1"/>
								<circle cx="4" cy="4" r="2"/>
								<path d="M16 9a4 4 0 0 1 4 4v8h-4v-7.5a1.5 1.5 0 0 0-3 0V21h-4V9h4v2a4 4 0 0 1 3-2z"/>
							</svg>
							<span aria-hidden className="pointer-events-none absolute -inset-2 opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100 hand-circle">
								<svg width="44" height="44" viewBox="0 0 44 44" fill="none">
									<ellipse className="draw-stroke" style={{ ['--len' as any]: 140, ['--dash' as any]: 140 }} cx="22" cy="22" rx="18" ry="10"/>
									<path className="alt draw-stroke" style={{ ['--len' as any]: 150, ['--dash' as any]: 150 }} d="M4 22c6 7 30 7 36 0"/>
								</svg>
							</span>
						</Link>
						<Link aria-label="Email" href="mailto:your@email.com" className="relative inline-flex items-center justify-center transition-colors hover:text-gray-900 group">
							<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="relative">
								<rect x="3" y="5" width="18" height="14" rx="2"/>
								<path d="M3 7.5 12 13l9-5.5"/>
							</svg>
							<span aria-hidden className="pointer-events-none absolute -inset-2 opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100 hand-circle">
								<svg width="44" height="44" viewBox="0 0 44 44" fill="none">
									<ellipse className="draw-stroke" style={{ ['--len' as any]: 140, ['--dash' as any]: 140 }} cx="22" cy="22" rx="18" ry="10"/>
									<path className="alt draw-stroke" style={{ ['--len' as any]: 150, ['--dash' as any]: 150 }} d="M4 22c6 7 30 7 36 0"/>
								</svg>
							</span>
						</Link>
						<Link aria-label="GitHub" href="https://github.com/" target="_blank" className="relative inline-flex items-center justify-center transition-colors hover:text-gray-900 group">
							<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="relative">
								<path d="M9 19c-4 1.5-4-2.5-6-3"/>
								<path d="M15 22v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 0 0-1.5-3.77 5.07 5.07 0 0 0-.09-3.77s-1.18-.35-3.9 1.48a13.38 13.38 0 0 0-7 0c-2.72-1.83-3.9-1.48-3.9-1.48a5.07 5.07 0 0 0-.09 3.77 5.44 5.44 0 0 0-1.5 3.77c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.61V22"/>
							</svg>
							<span aria-hidden className="pointer-events-none absolute -inset-2 opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100 hand-circle">
								<svg width="44" height="44" viewBox="0 0 44 44" fill="none">
									<ellipse className="draw-stroke" style={{ ['--len' as any]: 140, ['--dash' as any]: 140 }} cx="22" cy="22" rx="18" ry="10"/>
									<path className="alt draw-stroke" style={{ ['--len' as any]: 150, ['--dash' as any]: 150 }} d="M4 22c6 7 30 7 36 0"/>
								</svg>
							</span>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}


