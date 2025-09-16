"use client";

import Link from "next/link";
import { Caveat } from "next/font/google";
import { useState } from "react";

const headline = Caveat({
	weight: ["700"],
	subsets: ["latin"],
});

const navigationLinks = [
	{ href: "/experience", label: "Experience" },
	{ href: "/projects", label: "Projects" },
	{ href: "/resume", label: "Resume" },
] as const;

export default function Header() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<header className="sticky top-0 z-50 w-full bg-white">
			{/* Inner bleed: soft vignette on top corners and slight top fade for natural transition */}
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 [background:linear-gradient(to_bottom,rgba(0,0,0,0.035),transparent_60%),radial-gradient(160px_24px_at_0_0,rgba(0,0,0,0.05),transparent_60%),radial-gradient(160px_24px_at_100%_0,rgba(0,0,0,0.05),transparent_60%)]"
			/>

			<div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-8 py-4">
				<div className="flex items-center justify-between">
					<Link href="/" className="group relative">
						<div className={`${headline.className} text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 relative z-10 transition-transform duration-200 group-hover:scale-105`}>
							Bosco Ng
						</div>
					</Link>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex notebook-tabs gap-1 text-sm font-mono">
						{navigationLinks.map((item, idx) => (
							<Link
								key={item.href}
								href={item.href}
								className={`notebook-tab paper-texture border-gray-300 text-gray-800`}
								style={{
									backgroundImage:
										idx % 3 === 0
											? 'linear-gradient(180deg, rgba(254,240,138,0.9), rgba(250,204,21,0.78))'
										: idx % 3 === 1
											? 'linear-gradient(180deg, rgba(253,186,116,0.9), rgba(251,146,60,0.78))'
										: 'linear-gradient(180deg, rgba(248,113,113,0.9), rgba(239,68,68,0.78))',
									marginLeft: idx === 0 ? 0 : -12,
									// base stacking; hover will override with z-index:999
									['--z' as string]: String(30 - idx),
								}}
							>
								{item.label}
							</Link>
						))}
					</nav>

					{/* Mobile Menu Button */}
					<button
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
						aria-label="Toggle mobile menu"
					>
						<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							{isMobileMenuOpen ? (
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
							) : (
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
							)}
						</svg>
					</button>
				</div>

				{/* Mobile Navigation */}
				{isMobileMenuOpen && (
					<nav className="md:hidden mt-2 pb-3">
						<div className="rounded-lg border border-gray-200 bg-white shadow-lg overflow-hidden">
							<div className="flex flex-col divide-y divide-gray-200">
								{navigationLinks.map((item) => (
									<Link
										key={item.href}
										href={item.href}
										onClick={() => setIsMobileMenuOpen(false)}
										className="px-4 py-3 text-base text-gray-800 hover:bg-gray-50 transition-colors"
									>
										{item.label}
									</Link>
								))}
							</div>
						</div>
					</nav>
				)}
			</div>
			{/* Outer shadow below: strongest underneath, fading downward and inward */}
			<div
				aria-hidden
				className="pointer-events-none absolute inset-x-0 top-full h-8 [background:radial-gradient(200px_16px_at_0%_0%,rgba(0,0,0,0.1),transparent_70%),radial-gradient(200px_16px_at_100%_0%,rgba(0,0,0,0.1),transparent_70%),linear-gradient(to_bottom,rgba(0,0,0,0.08),transparent)]"
			/>
		</header>
	);
}


