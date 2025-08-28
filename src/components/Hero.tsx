"use client";

import Link from "next/link";
import { Caveat, Patrick_Hand } from "next/font/google";
import { useEffect, useRef, useState } from "react";
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
	const circleRef = useRef<SVGEllipseElement>(null);
	const outerCircleRef = useRef<SVGEllipseElement>(null);
	const [currentTestimonial, setCurrentTestimonial] = useState(0);

	const testimonials = [
		{
			name: "Sarah Chen",
			role: "Senior Developer",
			company: "TechCorp",
			text: "Bosco consistently delivered exceptional results and showed remarkable leadership skills. His ability to bridge technical complexity with user needs made him invaluable to our team.",
			color: "from-yellow-200 to-yellow-100",
			borderColor: "border-yellow-300",
			rotation: "rotate-2",
			linkedin: "https://www.linkedin.com/in/sarah-chen-dev",
		},
		{
			name: "Marcus Rodriguez",
			role: "Product Manager",
			company: "InnovateLab",
			text: "Working with Bosco was a game-changer. His product-minded approach and technical expertise helped us ship features that users actually loved. A true impact driver.",
			color: "from-orange-200 to-orange-100",
			borderColor: "border-orange-300",
			rotation: "-rotate-1",
			linkedin: "https://www.linkedin.com/in/marcus-rodriguez-pm",
		},
		{
			name: "Alex Thompson",
			role: "Team Lead",
			company: "StartupXYZ",
			text: "Bosco's leadership during our project was outstanding. He not only wrote great code but also mentored junior developers and kept us focused on delivering value.",
			color: "from-pink-200 to-pink-100",
			borderColor: "border-pink-300",
			rotation: "rotate-1",
			linkedin: "https://www.linkedin.com/in/alex-thompson-lead",
		},
		{
			name: "Jordan Lee",
			role: "UX Designer",
			company: "DesignHub",
			text: "Bosco's attention to user experience and ability to translate design requirements into functional code made our collaboration seamless and effective.",
			color: "from-blue-200 to-blue-100",
			borderColor: "border-blue-300",
			rotation: "-rotate-2",
			linkedin: "https://www.linkedin.com/in/jordan-lee-ux",
		},
		{
			name: "Casey Kim",
			role: "Backend Engineer",
			company: "DataFlow",
			text: "Bosco's technical skills are matched only by his communication abilities. He made complex technical decisions accessible to the entire team.",
			color: "from-green-200 to-green-100",
			borderColor: "border-green-300",
			rotation: "rotate-3",
			linkedin: "https://www.linkedin.com/in/casey-kim-engineer",
		},
	];

	useEffect(() => {
		const timer = setTimeout(() => {
			if (circleRef.current) {
				circleRef.current.style.strokeDashoffset = "0";
			}
		}, 2500);

		return () => clearTimeout(timer);
	}, []);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
		}, 4000); // Change every 4 seconds

		return () => clearInterval(interval);
	}, [testimonials.length]);

	const current = testimonials[currentTestimonial];

	return (
		<section className="mx-auto max-w-5xl px-8 min-h-[78svh] flex items-center relative">
			<div className="w-full space-y-7">
				<h1 className={`${headline.className} text-5xl sm:text-7xl font-bold leading-tight text-gray-900 animate-fade-in-up`}>
					Hi, I'm <span className="font-bold">Bosco</span>
				</h1>
				<p className={`${bodyHand.className} text-xl sm:text-2xl leading-9 text-gray-700 max-w-4xl animate-fade-in-up animation-delay-100`}>
					I'm a <Highlight color="rgba(253, 230, 138, 0.45)" delay={200}>software engineer</Highlight> and <Highlight color="rgba(253, 230, 138, 0.45)" delay={400}>second‑year CS student</Highlight> at Queen's University. At my core, I'm a <Highlight color="rgba(251, 146, 60, 0.45)" delay={600}>leader</Highlight> who bridges programming, creativity, and technology to <Highlight color="rgba(248, 113, 113, 0.35)" delay={800}>drive impact</Highlight>.
				</p>

				<div className="flex items-start gap-8">
					<div className="flex-1 max-w-2xl space-y-4">
						<p className={`${bodyHand.className} text-xl sm:text-2xl leading-9 text-gray-700 animate-fade-in-up animation-delay-200`}>
							I've <Highlight color="rgba(253, 230, 138, 0.45)" delay={1000}>led teams</Highlight> across <Highlight color="rgba(251, 146, 60, 0.35)" delay={1200}>6+ projects</Highlight> to ship <Highlight color="rgba(253, 230, 138, 0.45)" delay={1400}>award‑winning</Highlight> web applications serving <Highlight color="rgba(248, 113, 113, 0.35)" delay={1600}>2,400+ active users</Highlight>. If you want a <Underline delay={1800}>product‑minded</Underline> and <Underline delay={2000}>impact‑driven</Underline> Summer 2026 Developer Intern, <span className="relative inline-block align-baseline px-1"><span className="relative z-10">hire me</span><span aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 hand-circle"><svg width="140" height="50" viewBox="0 0 140 50" fill="none"><ellipse ref={circleRef} className="draw-stroke" style={{ ['--len' as any]: 220, ['--dash' as any]: 0 }} cx="70" cy="25" rx="52" ry="14"/><ellipse className="draw-stroke-outer" style={{ ['--len' as any]: 280, ['--dash' as any]: 0 }} cx="70" cy="25" rx="58" ry="18"/></svg></span></span>.
						</p>

						{/* Call to action and social links - positioned directly below paragraph */}
						<div className="space-y-4 animate-fade-in-up animation-delay-300">
							<div className="relative inline-block group">
								<Link
									href="/experience"
									className="group inline-flex items-center gap-3 text-lg font-medium text-gray-900 hover:text-gray-700 transition-colors"
								>
									<span className={`${bodyHand.className} text-xl`}>See More About Me</span>
									<span aria-hidden className="inline-block text-gray-600 group-hover:text-gray-800 transition-all duration-300 group-hover:translate-x-1">→</span>
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
					
					{/* Sticky note positioned to the right of the second paragraph */}
					<div className="w-64 flex-shrink-0">
						<div className={`group relative bg-gradient-to-br ${current.color} ${current.borderColor} border-2 rounded-sm shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${current.rotation}`}>
							{/* Sticky note shadow effect */}
							<div className="absolute inset-0 bg-black/5 rounded-sm" />
							
							{/* Content */}
							<div className="relative p-4 space-y-3">
								{/* Quote mark */}
								<div className="text-2xl text-gray-400 font-serif leading-none">
									"
								</div>
								
								{/* Testimonial text */}
								<p className={`${bodyHand.className} text-sm text-gray-700 leading-relaxed`}>
									{current.text}
								</p>
								
								{/* Author info */}
								<div className="pt-2 border-t border-gray-300/30">
									<div className="font-semibold text-gray-800 text-sm">
										<a 
											href={current.linkedin || '#'} 
											target="_blank" 
											rel="noopener noreferrer" 
											className="hover:underline cursor-pointer"
											onClick={(e) => {
												console.log('Clicked on:', current.name, 'URL:', current.linkedin);
												if (!current.linkedin) {
													e.preventDefault();
													console.log('No LinkedIn URL for:', current.name);
												}
											}}
										>
											{current.name}
										</a>
									</div>
									<div className="text-xs text-gray-600">
										{current.role} at {current.company}
									</div>
								</div>
							</div>

							{/* Sticky note fold effect */}
							<div className="absolute top-0 right-0 w-0 h-0 border-l-[16px] border-l-transparent border-t-[16px] border-t-gray-400/30" />
							
							{/* Hover lift effect */}
							<div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm" />
						</div>

						{/* Indicator dots */}
						<div className="flex justify-center mt-4 space-x-2">
							{testimonials.map((_, index) => (
								<button
									key={index}
									onClick={() => setCurrentTestimonial(index)}
									className={`w-2 h-2 rounded-full transition-all duration-300 ${
										index === currentTestimonial 
											? 'bg-gray-400 scale-125' 
											: 'bg-gray-300 hover:bg-gray-400'
									}`}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}


