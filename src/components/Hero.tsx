"use client";

import Link from "next/link";
import { Caveat, Patrick_Hand } from "next/font/google";
import { useEffect, useRef } from "react";
import Highlight from "@/components/Highlight";
import Underline from "@/components/Underline";
import Testimonials from "@/components/Testimonials";

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
	const animationsPlayedRef = useRef(false);
	const cursorRef = useRef<HTMLDivElement>(null);

	// Check if this is a fresh visit or navigation to homepage
	useEffect(() => {
		const hasVisited = localStorage.getItem('homepage-visited');
		const currentPath = window.location.pathname;
		
		// Reset animations if:
		// 1. First time visiting the site, OR
		// 2. Navigating to homepage from another page
		if (!hasVisited || (hasVisited && currentPath === '/')) {
			animationsPlayedRef.current = false;
			localStorage.setItem('homepage-visited', 'true');
		} else {
			animationsPlayedRef.current = true;
		}

		// Listen for navigation changes (when someone clicks "Bosco Ng" in header)
		const handleNavigation = () => {
			if (window.location.pathname === '/') {
				animationsPlayedRef.current = false;
				localStorage.setItem('homepage-visited', 'true');
			}
		};

		// Listen for popstate (back/forward navigation)
		window.addEventListener('popstate', handleNavigation);
		
		// Listen for pushstate/replacestate (programmatic navigation)
		const originalPushState = history.pushState;
		const originalReplaceState = history.replaceState;
		
		history.pushState = function(...args) {
			originalPushState.apply(history, args);
			handleNavigation();
		};
		
		history.replaceState = function(...args) {
			originalReplaceState.apply(history, args);
			handleNavigation();
		};

		return () => {
			window.removeEventListener('popstate', handleNavigation);
			history.pushState = originalPushState;
			history.replaceState = originalReplaceState;
		};
	}, []);

	// Only run circle animation once per session
	useEffect(() => {
		if (animationsPlayedRef.current) return;
		
		const timer = setTimeout(() => {
			if (circleRef.current) {
				circleRef.current.classList.add('animate');
			}
			if (outerCircleRef.current) {
				outerCircleRef.current.classList.add('animate');
			}
			animationsPlayedRef.current = true;
		}, 2500);

		return () => clearTimeout(timer);
	}, []);

	// Interactive cursor effect
	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			if (cursorRef.current) {
				cursorRef.current.style.left = e.clientX + 'px';
				cursorRef.current.style.top = e.clientY + 'px';
			}
		};

		window.addEventListener('mousemove', handleMouseMove);
		return () => window.removeEventListener('mousemove', handleMouseMove);
	}, []);

	return (
		<section className="mx-auto max-w-5xl px-8 min-h-[78svh] flex items-center relative overflow-hidden">
			{/* Interactive cursor effect */}
			<div 
				ref={cursorRef}
				className="fixed w-6 h-6 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full opacity-20 pointer-events-none z-50 mix-blend-multiply blur-sm transition-transform duration-100 ease-out"
				style={{ transform: 'translate(-50%, -50%)' }}
			/>
			
			{/* Enhanced background with subtle floating elements */}
			<div className="absolute inset-0 pointer-events-none">
				{/* Floating paper scraps */}
				<div className="absolute top-20 right-20 w-16 h-16 opacity-5 animate-float-x">
					<svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
						<path d="M8 8 L56 8 L56 56 L8 56 Z" stroke="currentColor" strokeWidth="1" fill="none" className="text-gray-400"/>
						<path d="M8 8 L56 56" stroke="currentColor" strokeWidth="1" className="text-gray-400"/>
					</svg>
				</div>
				<div className="absolute bottom-32 left-16 w-12 h-12 opacity-5 animate-float-x" style={{animationDelay: '2s'}}>
					<svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
						<circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1" fill="none" className="text-gray-400"/>
						<path d="M24 4 L24 44" stroke="currentColor" strokeWidth="1" className="text-gray-400"/>
					</svg>
				</div>
				<div className="absolute top-1/2 left-8 w-8 h-8 opacity-5 animate-float-x" style={{animationDelay: '4s'}}>
					<svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
						<path d="M4 16 L28 16" stroke="currentColor" strokeWidth="1" className="text-gray-400"/>
						<path d="M16 4 L16 28" stroke="currentColor" strokeWidth="1" className="text-gray-400"/>
					</svg>
				</div>
				
				{/* Additional creative floating elements */}
				<div className="absolute top-1/4 right-1/4 w-6 h-6 opacity-3 animate-float-y">
					<svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
						<path d="M12 2 L2 7 L12 12 L22 7 Z" stroke="currentColor" strokeWidth="1" fill="none" className="text-gray-400"/>
					</svg>
				</div>
				<div className="absolute bottom-1/4 right-1/3 w-10 h-10 opacity-4 animate-float-rotate">
					<svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
						<path d="M20 5 L35 20 L20 35 L5 20 Z" stroke="currentColor" strokeWidth="1" fill="none" className="text-gray-400"/>
					</svg>
				</div>
				<div className="absolute top-3/4 left-1/3 w-7 h-7 opacity-3 animate-float-y" style={{animationDelay: '1s'}}>
					<svg viewBox="0 0 28 28" fill="none" className="w-full h-full">
						<path d="M14 2 L26 14 L14 26 L2 14 Z" stroke="currentColor" strokeWidth="1" fill="none" className="text-gray-400"/>
					</svg>
				</div>
				
				{/* Subtle gradient overlays for depth */}
				<div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-50/5 to-purple-50/5 pointer-events-none"></div>
				<div className="absolute inset-0 bg-gradient-to-tl from-transparent via-yellow-50/3 to-pink-50/3 pointer-events-none"></div>
			</div>

			<div className="w-full space-y-8 relative z-10">
				{/* Enhanced header with better typography and spacing */}
				<div className="space-y-6">
					<h1 className={`${headline.className} text-6xl sm:text-8xl font-bold leading-tight text-gray-900 animate-fade-in-up relative`}>
						Hi, I&apos;m <span className="font-bold relative inline-block">
							<span className="relative z-10">Bosco</span>
							{/* Subtle underline effect */}
							<span className="absolute bottom-2 left-0 w-full h-2 bg-gradient-to-r from-transparent via-pink-200 to-transparent opacity-60 transform -skew-x-12"></span>
						</span>
					</h1>
					
					<p className={`${bodyHand.className} text-xl sm:text-2xl leading-9 text-gray-700 max-w-4xl animate-fade-in-up animation-delay-100 relative`}>
						I&apos;m a <Highlight color="rgba(253, 230, 138, 0.45)" delay={200}>software engineer</Highlight> and <Highlight color="rgba(253, 230, 138, 0.45)" delay={400}>second‑year CS student</Highlight> at Queen&apos;s University. At my core, I&apos;m a <Highlight color="rgba(251, 146, 60, 0.45)" delay={600}>leader</Highlight> who bridges programming, creativity, and technology to <Highlight color="rgba(248, 113, 113, 0.35)" delay={800}>drive impact</Highlight>.
					</p>
				</div>

				<div className="flex items-start gap-10">
					<div className="flex-1 max-w-2xl space-y-6">
						{/* Enhanced paragraph with better visual hierarchy */}
						<div className="relative">
							<p className={`${bodyHand.className} text-xl sm:text-2xl leading-9 text-gray-700 animate-fade-in-up animation-delay-200 relative z-10`}>
								I&apos;ve <Highlight color="rgba(253, 230, 138, 0.45)" delay={1000}>led teams</Highlight> across <Highlight color="rgba(251, 146, 60, 0.35)" delay={1200}>6+ projects</Highlight> to ship <Highlight color="rgba(253, 230, 138, 0.45)" delay={1400}>award‑winning</Highlight> web applications serving <Highlight color="rgba(248, 113, 113, 0.35)" delay={1600}>2,400+ active users</Highlight>. If you want a <Underline delay={1800}>product‑minded</Underline> and <Underline delay={2000}>impact‑driven</Underline> Summer 2026 Developer Intern, <span className="relative inline-block align-baseline px-1"><span className="relative z-10">hire me</span><span aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 hand-circle"><svg width="140" height="50" viewBox="0 0 140 50" fill="none"><ellipse ref={circleRef} className="draw-stroke" style={{ ['--len' as string]: 220, ['--dash' as string]: 220 }} cx="70" cy="25" rx="52" ry="14"/><ellipse ref={outerCircleRef} className="draw-stroke-outer" style={{ ['--len' as string]: 280, ['--dash' as string]: 280 }} cx="70" cy="25" rx="58" ry="18"/></svg></span></span>.
							</p>
							{/* Subtle background highlight for the paragraph */}
							<div className="absolute inset-0 bg-gradient-to-r from-yellow-50/30 via-transparent to-pink-50/30 rounded-lg -z-10 transform -skew-y-1"></div>
						</div>

						{/* Enhanced call to action and social links */}
						<div className="space-y-6 animate-fade-in-up animation-delay-300">
							{/* Enhanced CTA button */}
							<div className="relative inline-block group">
								<Link
									href="/experience"
									className="group inline-flex items-center gap-3 text-lg font-medium text-gray-900 hover:text-gray-700 transition-all duration-300 hover:scale-105 bg-white/50 backdrop-blur-sm px-6 py-3 rounded-lg border border-gray-200/50 shadow-sm hover:shadow-md"
								>
									<span className={`${bodyHand.className} text-xl`}>See More About Me</span>
									<span aria-hidden className="inline-block text-gray-600 group-hover:text-gray-800 transition-all duration-300 group-hover:translate-x-2">→</span>
								</Link>
								{/* Single centered circle on hover - positioned to match button content */}
								<span className="pointer-events-none absolute inset-0 opacity-0 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:scale-110 hand-circle flex items-center justify-center">
									<svg width="160" height="48" viewBox="0 0 160 48" fill="none">
										<ellipse className="draw-stroke" style={{ ['--len' as string]: 480, ['--dash' as string]: 480 }} cx="80" cy="24" rx="72" ry="16"/>
									</svg>
								</span>
							</div>

							{/* Enhanced social links with better spacing and effects */}
							<div className="flex items-center gap-8 text-gray-500">
								<Link aria-label="LinkedIn" href="https://www.linkedin.com/in/bosco-c-ng/" target="_blank" className="relative inline-flex items-center justify-center transition-all duration-300 hover:text-gray-900 hover:scale-110 group">
									<div className="relative p-3 rounded-full bg-white/30 backdrop-blur-sm border border-gray-200/50 shadow-sm hover:shadow-md transition-all duration-300">
										<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="relative">
											<rect x="2" y="9" width="4" height="12" rx="1"/>
											<circle cx="4" cy="4" r="2"/>
											<path d="M16 9a4 4 0 0 1 4 4v8h-4v-7.5a1.5 1.5 0 0 0-3 0V21h-4V9h4v2a4 4 0 0 1 3-2z"/>
										</svg>
									</div>
									<span aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100 hand-circle">
										<svg width="44" height="44" viewBox="0 0 44 44" fill="none">
											<ellipse className="draw-stroke" style={{ ['--len' as string]: 140, ['--dash' as string]: 140 }} cx="22" cy="22" rx="18" ry="10"/>
										</svg>
									</span>
								</Link>
								
								<button 
									aria-label="Email" 
									onClick={async () => {
										try {
											await navigator.clipboard.writeText('bosco.c.ng@gmail.com');
											
											// Create and show verification message
											const message = document.createElement('div');
											message.className = 'fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-md shadow-lg z-50 text-sm animate-fade-in-up';
											message.textContent = 'Email copied to clipboard!';
											
											document.body.appendChild(message);
											
											// Remove message after 3 seconds
											setTimeout(() => {
												if (message.parentNode) {
													message.parentNode.removeChild(message);
												}
											}, 3000);
										} catch {
											// Fallback: show email in alert
											alert('Email: bosco.c.ng@gmail.com');
										}
									}}
									className="relative inline-flex items-center justify-center transition-all duration-300 hover:text-gray-900 hover:scale-110 group cursor-pointer"
									title="Click to copy email address"
								>
									<div className="relative p-3 rounded-full bg-white/30 backdrop-blur-sm border border-gray-200/50 shadow-sm hover:shadow-md transition-all duration-300">
										<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="relative">
											<rect x="3" y="5" width="18" height="14" rx="2"/>
											<path d="M3 7.5 12 13l9-5.5"/>
										</svg>
									</div>
									<span aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100 hand-circle">
										<svg width="44" height="44" viewBox="0 0 44 44" fill="none">
											<ellipse className="draw-stroke" style={{ ['--len' as string]: 140, ['--dash' as string]: 140 }} cx="22" cy="22" rx="18" ry="10"/>
										</svg>
									</span>
								</button>
								
								<Link aria-label="GitHub" href="https://github.com/boscocng" target="_blank" className="relative inline-flex items-center justify-center transition-all duration-300 hover:text-gray-900 hover:scale-110 group">
									<div className="relative p-3 rounded-full bg-white/30 backdrop-blur-sm border border-gray-200/50 shadow-sm hover:shadow-md transition-all duration-300">
										<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="relative">
											<path d="M9 19c-4 1.5-4-2.5-6-3"/>
											<path d="M15 22v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 0 0-1.5-3.77 5.07 5.07 0 0 0-.09-3.77s-1.18-.35-3.9 1.48a13.38 13.38 0 0 0-7 0c-2.72-1.83-3.9-1.48-3.9-1.48a5.07 5.07 0 0 0-.09 3.77 5.44 5.44 0 0 0-1.5 3.77c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.61V22"/>
										</svg>
									</div>
									<span aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100 hand-circle">
										<svg width="44" height="44" viewBox="0 0 44 44" fill="none">
											<ellipse className="draw-stroke" style={{ ['--len' as string]: 140, ['--dash' as string]: 140 }} cx="22" cy="22" rx="18" ry="10"/>
										</svg>
									</span>
								</Link>
							</div>
						</div>
					</div>
					
					{/* Enhanced sticky note positioning */}
					<div className="w-64 flex-shrink-0 relative animate-fade-in-up animation-delay-400">
						<div className="sticky top-8">
							<Testimonials />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}


