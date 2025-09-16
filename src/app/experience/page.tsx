"use client";

import React, { useState } from "react";
import { Caveat, Patrick_Hand } from "next/font/google";

const headline = Caveat({
	weight: ["700"],
	subsets: ["latin"],
});

const bodyHand = Patrick_Hand({
	weight: ["400"],
	subsets: ["latin"],
});

interface Experience {
	id: number;
	company: string;
	role: string;
	date: string;
	description: string;
	achievements: string[];
	technologies: string[];
	companyUrl?: string;
	companyLogo?: string;
	demoUrl?: string;
	companyInfo?: {
		description: string;
		industry: string;
		size: string;
		location: string;
		keyFacts: string[];
	};
}

const initialExperiences: Experience[] = [
	{
		id: 1,
		company: "Lawtonica",
		role: "Backend Developer",
		date: "August 2025 - Present",
		companyUrl: "https://lawtonica.ca/",
		companyLogo: "/images/lawtonica_logo.jpg",
		description: "Working as a Back-End Developer at a fast-paced AI startup, building scalable systems to power Lawtonica's AI assistant for municipal by-laws. Contributing to the growth from a hackathon-winning project to a real-world civic-tech platform supporting residents, newcomers, and businesses.",
		achievements: [
			"Building scalable backend systems for AI-powered municipal by-law assistant",
			"Designing and deploying reliable APIs and data pipelines for civic-tech platform",
			"Working with City of Kingston to make municipal governance more accessible",
			"Supporting residents, newcomers, and businesses with AI-powered city services"
		],
		technologies: ["Node.js & TypeScript", "PostgreSQL & Prisma", "Express.js", "OpenAI API & LangChain", "Docker", "Stripe API", "Redis", "RESTful APIs", "JWT Authentication"],
		companyInfo: {
			description: "Lawtonica is an AI-powered civic-tech startup building an intelligent assistant that makes municipal by-laws simple and accessible for residents, newcomers, and business owners. We're transforming how people interact with city governance through cutting-edge AI technology.",
			industry: "AI & Civic Technology",
			size: "Growing startup",
			location: "Kingston, Ontario, Canada",
			keyFacts: [
				"AI-powered municipal by-law assistant for city governance",
				"Winner of QHacks and 2025 Mayor's Innovation Challenge",
				"Collaborating with City of Kingston for civic innovation",
				"Making cities smarter and more accessible through technology"
			]
		}
	},
	{
		id: 2,
		company: "Queen's Computing Students' Association",
		role: "Director of Information Technology",
		date: "April 2025 - Present",
		companyUrl: "https://compsa.ca/",
		companyLogo: "/images/queenscompsa_logo.jpg",
		demoUrl: "https://compsa.ca/room-booking",
		description: "Directing a 10+ member tech team building and maintaining digital tools for 1,800+ students at Queen's Computing. As the student government for Queen's School of Computing, my team and I collaborate with portfolios, faculty, professors, and the student community to deliver impactful, long-lasting products.",
		achievements: [
			"Launched CASLab Room Booking System serving 1,800+ computing students with private breakout room reservations",
			"Made and manage the official COMPSA website with live events calendar for student engagement",
			"Developed academic resources page providing study materials and support for computing students",
			"Created internal hiring tool for job opportunities within the organization",
			"Implemented official Queen's School of Computing Merch store with e-commerce functionality"
		],
		technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Docker", "Supabase"],
		companyInfo: {
			description: "Queen's Computing Students' Association (COMPSA) is the student government for Queen's School of Computing, serving over 1,800 students. We are dedicated to enhancing the student experience by developing technology that improves student life, organizing social events, workshops, and professional development opportunities, while working closely with faculty to advocate for the needs of Computing students.",
			industry: "Student Government & Education",
			size: "Serves 1,800+ Students",
			location: "Kingston, Ontario, Canada",
			keyFacts: [
				"Queen's Computing's official student body serving 1,800+ students",
				"Biggest organization in Queen's Computing with comprehensive student support",
				"Works closely with faculty to advocate for Computing student needs",
				"Focuses on enhancing student life and experience through technology and events"
			]
		}
	},
	{
		id: 3,
		company: "Queen's University Web Development",
		role: "Lead Developer",
		date: "Jan 2025 - April 2025",
		companyUrl: "https://www.qweb.dev/",
		companyLogo: "/images/qweb_logo.jpg",
		description: "Led the development of a production-ready booking platform for a 600+ member student organization during QWEB's 2025 Winter Sprint. Implemented unified scheduling features for meetings and interviews, inspired by Calendly and LettuceMeet, to streamline organizational workflows and improve user experience.",
		achievements: [
			"Delivered a production-ready booking platform serving 600+ active users in just 4 months",
			"Led a team of 4 developers through QWEB's 2025 Winter Sprint project development",
			"Implemented unified scheduling features for meetings and interviews, inspired by Calendly and LettuceMeet",
			"Presented the application at QWEB's Demo Day, representing the team and demonstrating technical features to stakeholders and peers"
		],
		technologies: ["React.js", "Node.js & Express.js", "PostgreSQL", "JavaScript (ES6+)", "Tailwind CSS", "JWT Authentication", "Vite", "RESTful APIs", "Git"],
		companyInfo: {
			description: "Queen's Web Development Club (QWEB) is a student-run organization that teaches students how to build websites through tutorials, workshops, and real practice for local businesses and clubs. QWEB members are sorted into design teams and given real-world customers to consult with, while experienced members lead development teams of varying abilities.",
			industry: "Student Organizations & Web Development",
			size: "400+ members",
			location: "Kingston, Ontario, Canada",
			keyFacts: [
				"Biggest club at Queen's University for Web Development with 400+ members",
				"Completed 30+ real-world projects for local businesses and clubs",
				"Provides 15+ tutorials and workshops for student learning",
				"Students work with real customers through iterative development process"
			]
		}
	},
	{
		id: 4,
		company: "Queen's Themed Entertainment Development Team",
		role: "Software Engineer",
		date: "Sept 2024 - July 2025",
		companyUrl: "https://qtedt.ca/",
		companyLogo: "/images/qtedt_logo.jpg",
		description: "One of two software engineers leading QTEDT team to qualify from 400+ participants across 32 universities in North America for the 2025 TMU Thrill Design Invitational, advancing to Universal Creative™–hosted challenges in Safety/Accessibility & Novel Ride Design. Designed and implemented comprehensive ride control and guest management systems for themed entertainment applications.",
		achievements: [
			"Led team qualification from 400+ participants across 32 universities for 2025 TMU Thrill Design Invitational",
			"Designed and implemented Python (PyQt5) ride control system managing 19 carts across 6 scenes with real-time tracking",
			"Developed full-stack guest management system using Python, Flask, SQLite, and JavaScript with secure authentication",
			"Built state persistence system (JSON) ensuring 100% safety protocol compliance during normal and emergency operations"
		],
		technologies: ["Python", "PyQt5", "Flask", "SQLite", "JavaScript", "HTML/CSS", "JSON", "Real-time Systems"],
		companyInfo: {
			description: "The Queen's Themed Entertainment Development Team (QTEDT) is a dynamic, multidisciplinary student organization at Queen's University in Kingston, Canada. Since our founding in March 2023, our team has been at the forefront of designing innovative themed entertainment experiences. We bring together students from diverse academic backgrounds, including engineering, business, and the creative arts, to collaborate on exciting projects that push the boundaries of imagination and technology.",
			industry: "Competitive Engineering & Themed Entertainment",
			size: "2x winning engineering team",
			location: "Kingston, Ontario, Canada",
			keyFacts: [
				"Qualified for Toronto Metropolitan University Thrill Design Competition 2025, presented by Universal Creative™",
				"Beat 400+ participants across 32 universities for 2025 TMU Thrill Design Invitational",
				"Founded in March 2023, bringing together engineering, business, and creative arts students",
				"Team members heading to Orlando for IAAPA Expo following competition success"
			]
		}
	}
];

export default function ExperiencePage() {
	const [experiences, setExperiences] = useState<Experience[]>(initialExperiences);
	const [cardViews, setCardViews] = useState<{ [key: number]: 'role' | 'company' }>({});
	const [activeCard, setActiveCard] = useState<number>(1);


	const toggleCardView = (id: number) => {
		setCardViews(prev => ({
			...prev,
			[id]: prev[id] === 'company' ? 'role' : 'company'
		}));
	};

	const scrollToCard = (cardId: number) => {
		const element = document.getElementById(`card-${cardId}`);
		if (element) {
			element.scrollIntoView({ 
				behavior: 'smooth', 
				block: 'center' 
			});
			setActiveCard(cardId);
		}
	};

	// Update active card based on scroll position
	React.useEffect(() => {
		const handleScroll = () => {
			const cards = experiences.map(exp => document.getElementById(`card-${exp.id}`)).filter(Boolean);
			const scrollPosition = window.scrollY + window.innerHeight / 2;

			for (let i = cards.length - 1; i >= 0; i--) {
				const card = cards[i];
				if (card && card.offsetTop <= scrollPosition) {
					const cardId = parseInt(card.id.replace('card-', ''));
					setActiveCard(cardId);
					break;
				}
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [experiences]);


	return (
		<main className="min-h-screen notebook-paper">
			<div className="mx-auto max-w-6xl px-8 py-12 relative">
				{/* Header */}
				<div className="mb-12 text-center">
					<h1 className={`${headline.className} text-6xl sm:text-7xl font-bold text-gray-900 mb-4 relative inline-block`}>
						My Experience
						{/* Swiggly underline highlight */}
						<svg 
							className="absolute -bottom-2 left-0 w-full h-4 text-yellow-300" 
							viewBox="0 0 200 20" 
							fill="none" 
							xmlns="http://www.w3.org/2000/svg"
						>
							<path 
								d="M5 15 Q25 5, 45 15 T85 15 T125 15 T165 15 T195 15" 
								stroke="currentColor" 
								strokeWidth="3" 
								fill="none" 
								strokeLinecap="round"
								className="opacity-80"
							/>
						</svg>
					</h1>
				</div>

				{/* Hand-drawn Timeline Navbar - Left Side */}
				<div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
					<div className="flex flex-col items-center space-y-6">
						{/* Hand-drawn Timeline Line */}
						<div className="relative">
							<svg width="8" height="200" viewBox="0 0 8 200" fill="none" className="opacity-60">
								<path 
									d="M4,10 Q6,50 4,100 T4,190" 
									stroke="#fbbf24" 
									strokeWidth="3" 
									fill="none"
									strokeLinecap="round"
								/>
							</svg>
						</div>
						
						{/* Hand-drawn Timeline Dots */}
						{experiences.map((experience, index) => (
							<button
								key={experience.id}
								onClick={() => scrollToCard(experience.id)}
								className={`relative group transition-all duration-500 ${
									activeCard === experience.id 
										? 'scale-110' 
										: 'hover:scale-105'
								}`}
								title={`Go to ${experience.company}`}
							>
								{/* Hand-drawn Circle Dot */}
								<div className="relative">
									<svg width="24" height="24" viewBox="0 0 24 24" className="transition-all duration-500">
										<circle 
											cx="12" 
											cy="12" 
											r="8" 
											stroke={activeCard === experience.id ? "#10b981" : "#9ca3af"} 
											strokeWidth="2" 
											fill={activeCard === experience.id ? "#d1fae5" : "#f9fafb"}
											className="transition-all duration-500"
										/>
										{/* Hand-drawn checkmark inside circle - only on active card */}
										{activeCard === experience.id && (
											<path 
												d="M8.5 12.2 L10.8 14.5 L15.5 9.8" 
												stroke="#059669" 
												strokeWidth="2.2" 
												strokeLinecap="round" 
												strokeLinejoin="round"
												fill="none"
												className="animate-pulse"
												style={{
													strokeDasharray: '8 8',
													strokeDashoffset: activeCard === experience.id ? '0' : '16',
													transition: 'stroke-dashoffset 0.6s ease-in-out'
												}}
											/>
										)}
									</svg>
								</div>
								
								{/* Hand-drawn Tooltip */}
								<div className="absolute left-8 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
									<div className="relative">
										{/* Hand-drawn speech bubble - flipped for left side */}
										<svg width="120" height="32" viewBox="0 0 120 32" className="absolute">
											<path 
												d="M112,4 Q116,2 118,6 Q118,8 116,10 Q114,12 112,10 Q110,8 112,6 Q114,4 112,4 Z M112,6 L104,6 Q100,6 100,10 L100,20 Q100,24 104,24 L112,24 Q116,24 116,20 L116,10 Q116,6 112,6 Z" 
												fill="#fef3c7" 
												stroke="#f59e0b" 
												strokeWidth="1.5"
											/>
										</svg>
										<div className="relative z-10 px-3 py-1">
											<span className={`${bodyHand.className} text-xs text-amber-800 font-medium`}>
												{experience.company}
											</span>
										</div>
									</div>
								</div>
							</button>
						))}
						
						{/* Hand-drawn Bottom Line */}
						<div className="relative">
							<svg width="8" height="200" viewBox="0 0 8 200" fill="none" className="opacity-60">
								<path 
									d="M4,10 Q2,50 4,100 T4,190" 
									stroke="#fbbf24" 
									strokeWidth="3" 
									fill="none"
									strokeLinecap="round"
								/>
							</svg>
						</div>
					</div>
				</div>

				{/* Experience Entries */}
				<div className="space-y-8">
					{experiences.map((experience, index) => {
						const currentView = cardViews[experience.id] || 'role';
						const isCompanyView = currentView === 'company';
						
						// Create slight random rotations for each card to look hand-placed
						const randomRotations = [0, 0.5, -0.3, 0.6, -0.5, 0.2];
						const baseRotation = randomRotations[index % randomRotations.length];
						
	return (
							<div 
								key={experience.id}
								id={`card-${experience.id}`}
								className="relative bg-white/95 rounded-lg border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 p-8 group cursor-pointer transform hover:-translate-y-2 hover:scale-105"
								style={{
									transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
									transformOrigin: 'center center',
									transform: `rotate(${baseRotation}deg)`,
									'--hover-rotation': `${baseRotation + 1}deg`
								} as React.CSSProperties}
								onMouseEnter={(e) => {
									e.currentTarget.style.transform = `rotate(${baseRotation + 0.5}deg) translateY(-8px) scale(1.05)`;
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.transform = `rotate(${baseRotation}deg)`;
								}}
							>
								{/* Notebook margin line */}
								<div className="absolute left-0 top-0 bottom-0 w-1 bg-red-200/60 rounded-l-lg group-hover:bg-red-300/80 transition-colors duration-500"></div>
								
								{/* Flash card flip effect overlay */}
								<div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-50/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
								
								{/* Study note highlight effect */}
								<div className="absolute top-4 right-4 w-3 h-3 bg-yellow-300/60 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100"></div>
								
								{/* Card Content - Role View */}
								{!isCompanyView && (
									<div className="animate-fade-in-up">
										{/* Experience Header */}
										<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
											<div className="mb-4 sm:mb-0 flex items-start gap-4">
												{/* Company Logo Circle */}
												{experience.companyLogo && (
													<div className="flex-shrink-0">
														<div className="w-16 h-16 rounded-full bg-white border-2 border-gray-200 shadow-sm group-hover:shadow-md group-hover:border-blue-300 transition-all duration-500 flex items-center justify-center overflow-hidden">
															<img 
																src={experience.companyLogo} 
																alt={`${experience.company} logo`}
																className="w-16 h-16 object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
																onError={(e) => {
																	// Fallback to a simple circle if image fails to load
																	e.currentTarget.style.display = 'none';
																	e.currentTarget.parentElement!.innerHTML = `
																		<div class="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
																			<span class="text-blue-600 font-bold text-lg">${experience.company.charAt(0)}</span>
																		</div>
																	`;
																}}
															/>
														</div>
													</div>
												)}
												
												{/* Title and Company */}
												<div className="flex-1">
													<h2 className={`${headline.className} text-3xl font-bold text-gray-900 mb-2 group-hover:text-blue-800 transition-colors duration-500`}>
														{experience.role}
													</h2>
													{experience.companyUrl ? (
														<a 
															href={experience.companyUrl} 
															target="_blank" 
															rel="noopener noreferrer"
															className="group/link relative inline-block"
														>
															<span className={`${bodyHand.className} text-xl text-gray-700 group-hover:text-gray-800 transition-colors duration-500 group-hover/link:text-blue-600`}>
																{experience.company}
															</span>
															{/* Hand-drawn underline animation - only on company hover */}
															<div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover/link:w-full transition-all duration-500 ease-out">
																<svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 4" fill="none">
																	<path 
																		d="M2,2 Q20,0.5 50,2 T98,2" 
																		stroke="currentColor" 
																		strokeWidth="2" 
																		fill="none"
																		strokeLinecap="round"
																		className="text-blue-400"
																	/>
																</svg>
															</div>
															{/* External link icon - shows on card hover, moves on company hover */}
															<svg 
																className="inline-block w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover/link:opacity-100 transition-all duration-300 transform translate-x-0 group-hover/link:translate-x-1" 
																fill="none" 
																stroke="currentColor" 
																viewBox="0 0 24 24"
															>
																<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
															</svg>
														</a>
													) : (
														<p className={`${bodyHand.className} text-xl text-gray-700 group-hover:text-gray-800 transition-colors duration-500`}>
															{experience.company}
														</p>
													)}
												</div>
											</div>
											<div className={`${bodyHand.className} text-lg text-gray-600 bg-gray-100/50 px-4 py-2 rounded-full group-hover:bg-blue-100/70 group-hover:text-blue-700 group-hover:scale-110 transition-all duration-500`}>
												{experience.date}
											</div>
										</div>

										{/* Entry Content */}
										<div className="space-y-6">
											{/* Description */}
											<div>
												<h3 className={`${headline.className} text-2xl font-semibold text-gray-800 mb-3 flex items-center gap-2`}>
													<span>What I Did</span>
													<svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
														<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
													</svg>
												</h3>
												<p className={`${bodyHand.className} text-lg text-gray-700 leading-relaxed bg-blue-50/50 p-4 rounded-lg border-l-4 border-blue-200`}>
													{experience.description}
												</p>
											</div>

											{/* Key Achievements */}
											<div>
												<h3 className={`${headline.className} text-2xl font-semibold text-gray-800 mb-3 flex items-center gap-2`}>
													<span>Key Achievements</span>
													<svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
														<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
													</svg>
												</h3>
												<div className="space-y-2">
													{experience.achievements.map((achievement, achIndex) => (
														<div key={achIndex} className="flex items-start gap-3">
															<div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
															<p className={`${bodyHand.className} text-gray-700`}>
																{achievement}
															</p>
														</div>
													))}
												</div>
											</div>

											{/* Technologies */}
											<div>
												<h3 className={`${headline.className} text-2xl font-semibold text-gray-800 mb-3 flex items-center gap-2`}>
													<span>Technologies & Tools</span>
													<svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
														<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
													</svg>
												</h3>
												<div className="flex flex-wrap gap-2">
													{experience.technologies.map((tech, techIndex) => (
														<div
															key={techIndex}
															className="bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 rounded-full px-3 py-1 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 hover:border-orange-300"
														>
															<span className={`${bodyHand.className} text-sm font-medium text-gray-700`}>
																{tech}
															</span>
														</div>
													))}
												</div>
											</div>

											{/* Live Site Link */}
											{experience.demoUrl && (
												<div>
													<h3 className={`${headline.className} text-2xl font-semibold text-gray-800 mb-3 flex items-center gap-2`}>
														<span>Live Site</span>
														<svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
															<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
														</svg>
													</h3>
													<a
														href={experience.demoUrl}
														target="_blank"
														rel="noopener noreferrer"
														className="inline-flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200 shadow-sm hover:shadow-md"
													>
														<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
															<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
														</svg>
														<span className={`${bodyHand.className} text-sm font-medium`}>Visit Live Site</span>
													</a>
												</div>
											)}
										</div>
									</div>
								)}

								{/* Card Content - Company View */}
								{isCompanyView && experience.companyInfo && (
									<div className="animate-fade-in-up">
										{/* Company Header */}
										<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
											<div className="mb-4 sm:mb-0 flex items-start gap-4">
												{/* Company Logo Circle */}
												{experience.companyLogo && (
													<div className="flex-shrink-0">
														<div className="w-16 h-16 rounded-full bg-white border-2 border-gray-200 shadow-sm group-hover:shadow-md group-hover:border-orange-300 transition-all duration-500 flex items-center justify-center overflow-hidden">
															<img 
																src={experience.companyLogo} 
																alt={`${experience.company} logo`}
																className="w-16 h-16 object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
																onError={(e) => {
																	// Fallback to a simple circle if image fails to load
																	e.currentTarget.style.display = 'none';
																	e.currentTarget.parentElement!.innerHTML = `
																		<div class="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center">
																			<span class="text-orange-600 font-bold text-lg">${experience.company.charAt(0)}</span>
																		</div>
																	`;
																}}
															/>
														</div>
													</div>
												)}
												
												{/* Company Name and Industry */}
												<div className="flex-1">
													{experience.companyUrl ? (
														<a 
															href={experience.companyUrl} 
															target="_blank" 
															rel="noopener noreferrer"
															className="group/link relative inline-block"
														>
															<h2 className={`${headline.className} text-3xl font-bold text-gray-900 mb-2 group-hover:text-orange-800 transition-colors duration-500 group-hover/link:text-orange-600`}>
																{experience.company}
															</h2>
															{/* Hand-drawn underline animation - only on company hover */}
															<div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 group-hover/link:w-full transition-all duration-500 ease-out">
																<svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 4" fill="none">
																	<path 
																		d="M2,2 Q20,0.5 50,2 T98,2" 
																		stroke="currentColor" 
																		strokeWidth="2" 
																		fill="none"
																		strokeLinecap="round"
																		className="text-orange-400"
																	/>
																</svg>
															</div>
															{/* External link icon - shows on card hover, scales on company hover */}
															<svg 
																className="absolute -top-1 -right-6 w-4 h-4 opacity-0 group-hover:opacity-100 group-hover/link:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100 group-hover/link:scale-100" 
																fill="none" 
																stroke="currentColor" 
																viewBox="0 0 24 24"
															>
																<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
															</svg>
														</a>
													) : (
														<h2 className={`${headline.className} text-3xl font-bold text-gray-900 mb-2 group-hover:text-orange-800 transition-colors duration-500`}>
															{experience.company}
														</h2>
													)}
													
													{/* Company Details - Location and Industry */}
													<div className="flex flex-wrap items-center gap-4 mb-2">
														<div className="flex items-center gap-2">
															<span className="text-orange-500 text-sm">🏢</span>
															<span className={`${bodyHand.className} text-lg text-gray-700 group-hover:text-gray-800 transition-colors duration-500`}>
																{experience.companyInfo.industry}
															</span>
														</div>
														<div className="flex items-center gap-2">
															<span className="text-orange-500 text-sm">📍</span>
															<span className={`${bodyHand.className} text-lg text-gray-700 group-hover:text-gray-800 transition-colors duration-500`}>
																{experience.companyInfo.location}
															</span>
														</div>
													</div>
												</div>
											</div>
											<div className={`${bodyHand.className} text-lg text-gray-600 bg-orange-100/50 px-4 py-2 rounded-full group-hover:bg-orange-200/70 group-hover:text-orange-700 group-hover:scale-110 transition-all duration-500`}>
												{experience.companyInfo.size}
											</div>
										</div>

										{/* Company Description */}
										<div className="mb-6">
											<h3 className={`${bodyHand.className} text-xl font-semibold text-gray-800 mb-3 group-hover:text-orange-700 transition-colors duration-500`}>
												About {experience.company} <span className="text-orange-500 text-lg">ℹ️</span>
											</h3>
											<p className={`${bodyHand.className} text-lg text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-500`}>
												{experience.companyInfo.description}
											</p>
										</div>


										{/* Key Facts - Enhanced Layout */}
										<div className="mb-6">
											<h3 className={`${headline.className} text-2xl font-bold text-gray-800 mb-6 group-hover:text-emerald-700 transition-colors duration-500 flex items-center gap-3`}>
												<span>Key Facts</span>
												<span className="text-emerald-500 text-2xl">💡</span>
											</h3>
											
											{/* Varied formatting for each key fact */}
											<div className="space-y-4">
												{experience.companyInfo.keyFacts.map((fact, factIndex) => {
													// Different styles for each fact
													const styles = [
														{
															container: 'bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-400 shadow-sm hover:shadow-md',
															icon: 'bg-blue-500 text-white',
															iconSymbol: '🏢',
															text: 'text-blue-800 font-semibold'
														},
														{
															container: 'bg-gradient-to-r from-orange-50 to-orange-100 border-l-4 border-orange-400 shadow-sm hover:shadow-md',
															icon: 'bg-orange-500 text-white',
															iconSymbol: '⭐',
															text: 'text-orange-800 font-semibold'
														},
														{
															container: 'bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-400 shadow-sm hover:shadow-md',
															icon: 'bg-green-500 text-white',
															iconSymbol: '🎯',
															text: 'text-green-800 font-semibold'
														},
														{
															container: 'bg-gradient-to-r from-purple-50 to-purple-100 border-l-4 border-purple-400 shadow-sm hover:shadow-md',
															icon: 'bg-purple-500 text-white',
															iconSymbol: '💡',
															text: 'text-purple-800 font-semibold'
														}
													];
													
													const currentStyle = styles[factIndex % styles.length];
													
													return (
														<div 
															key={factIndex}
															className={`group/fact relative p-4 rounded-r-lg transition-all duration-300 hover:scale-[1.01] hover:translate-x-1 ${currentStyle.container}`}
															style={{
																transitionDelay: `${factIndex * 100}ms`
															}}
														>
															<div className="flex items-start gap-4">
																{/* Icon with emoji */}
																<div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${currentStyle.icon} shadow-md group-hover/fact:scale-105 transition-transform duration-300`}>
																	<span className="text-lg">{currentStyle.iconSymbol}</span>
																</div>
																
																{/* Content */}
																<div className="flex-1">
																	<p className={`${bodyHand.className} ${currentStyle.text} text-base leading-relaxed group-hover/fact:scale-[1.02] transition-transform duration-300`}>
																		{fact}
																	</p>
																</div>
															</div>
															
															{/* Subtle bottom accent */}
															<div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover/fact:opacity-30 transition-opacity duration-500"></div>
														</div>
													);
												})}
											</div>
											
											{/* Bottom accent line */}
											<div className="mt-6 flex justify-center">
												<div className="w-24 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent rounded-full opacity-60"></div>
											</div>
										</div>
									</div>
								)}

								{/* Hand-drawn Arrow - Subtle and themed */}
								<div 
									className={`absolute right-6 top-1/2 transform -translate-y-1/2 transition-all duration-500 cursor-pointer z-50 pointer-events-auto ${
										isCompanyView 
											? 'opacity-100' 
											: 'opacity-50 group-hover:opacity-100 translate-x-3 group-hover:translate-x-0'
									}`}
									onClick={(e) => {
										e.preventDefault();
										e.stopPropagation();
										toggleCardView(experience.id);
									}}
									title={isCompanyView ? 'View My Role' : 'Learn About Company'}
								>
									<div className="relative">
										{/* Hand-drawn arrow with subtle background */}
										<div className="w-8 h-8 bg-yellow-100/80 rounded-full flex items-center justify-center border border-yellow-200/60 group-hover:bg-yellow-200/90 group-hover:border-yellow-300/80 transition-all duration-300">
											<svg 
												width="16" 
												height="16" 
												viewBox="0 0 24 24" 
												fill="none"
												stroke="#f59e0b"
												strokeWidth="2.5"
												strokeLinecap="round"
												strokeLinejoin="round"
												className={`transition-transform duration-300 ${
													isCompanyView ? 'rotate-180' : 'rotate-0'
												}`}
											>
												<path d="M9 18l6-6-6-6" />
											</svg>
										</div>
									</div>
								</div>


								{/* Subtle hint text */}
								<div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
									<span className={`${bodyHand.className} text-xs text-gray-500 bg-white/80 px-2 py-1 rounded-full border border-gray-200/60`}>
										{isCompanyView ? '← My Role' : 'Company →'}
									</span>
								</div>
							</div>
						);
					})}
				</div>

			</div>
		</main>
	);
}