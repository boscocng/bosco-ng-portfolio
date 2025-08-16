import Link from "next/link";

const navigationLinks = [
	{ href: "/experience", label: "Experience" },
	{ href: "/projects", label: "Projects" },
	{ href: "/resume", label: "Resume" },
] as const;

export default function Header() {
	return (
		<header className="sticky top-0 z-50 w-full bg-white">
			{/* Inner bleed: soft vignette on top corners and slight top fade for natural transition */}
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 [background:linear-gradient(to_bottom,rgba(0,0,0,0.035),transparent_60%),radial-gradient(160px_24px_at_0_0,rgba(0,0,0,0.05),transparent_60%),radial-gradient(160px_24px_at_100%_0,rgba(0,0,0,0.05),transparent_60%)]"
			/>

			<div className="relative z-10 mx-auto max-w-5xl px-8 py-4">
				<div className="flex items-center justify-between">
					<Link href="/" className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900">
						Bosco Ng
					</Link>

					<nav className="hidden md:flex items-center gap-8 text-sm sm:text-base text-gray-600">
						{navigationLinks.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className="group relative isolate rounded-md px-2 py-1 font-medium text-gray-600 transition duration-200 ease-out hover:text-gray-900 hover:scale-[1.03] motion-reduce:transform-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60 focus-visible:ring-offset-2"
							>
								<span className="relative z-10">{item.label}</span>
								<span
									aria-hidden
									className="pointer-events-none absolute inset-0 rounded-md opacity-0 blur-lg transition duration-200 ease-out group-hover:opacity-100 bg-amber-200/35"
								/>
							</Link>
						))}
					</nav>
				</div>
			</div>
			{/* Outer shadow below: strongest underneath, fading downward and inward */}
			<div
				aria-hidden
				className="pointer-events-none absolute inset-x-0 top-full h-8 [background:radial-gradient(200px_16px_at_0%_0%,rgba(0,0,0,0.1),transparent_70%),radial-gradient(200px_16px_at_100%_0%,rgba(0,0,0,0.1),transparent_70%),linear-gradient(to_bottom,rgba(0,0,0,0.08),transparent)]"
			/>
		</header>
	);
}


