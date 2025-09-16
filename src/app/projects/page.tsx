"use client";

import React, { useState } from "react";
import { Caveat, Patrick_Hand, Kalam } from "next/font/google";

const headline = Caveat({
	weight: ["700"],
	subsets: ["latin"],
});

const bodyHand = Patrick_Hand({
	weight: ["400"],
	subsets: ["latin"],
});

const titleFont = Kalam({
	weight: ["400", "700"],
	subsets: ["latin"],
});

interface Project {
	id: number;
	name: string;
	description: string;
	briefDescription: string;
	technologies: string[];
	websiteUrl?: string;
	githubUrl?: string;
	imageUrl?: string;
	status: "completed" | "in-progress" | "planned";
	featured: boolean;
	users?: number;
	caseStudy: {
		overview: string;
		challenge: string;
		solution: string;
		technologies: string[];
		keyFeatures: string[];
		results: string[];
		lessonsLearned: string[];
	};
}

const initialProjects: Project[] = [
	{
		id: 1,
		name: "CASLab Room Booking System",
		description: "A comprehensive booking platform for Queen's Computing students to reserve private breakout rooms in the Faculty's Computer Lab. Built with modern web technologies and designed for seamless user experience.",
		briefDescription: "Production-ready booking platform for 1,800+ computing students with private breakout room reservations",
		technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Docker", "Supabase"],
		websiteUrl: "https://compsa.ca/booking",
		githubUrl: "https://github.com/compsa/room-booking",
		imageUrl: "/images/projects/caslab-booking.jpg",
		status: "completed",
		featured: true,
		users: 1800,
		caseStudy: {
			overview: "The CASLab Room Booking System was developed to solve the problem of students struggling to find and reserve study spaces in the Faculty of Computing. With 1,800+ students competing for limited breakout rooms, we needed a fair, efficient, and user-friendly solution.",
			challenge: "Students were manually checking room availability, leading to conflicts and inefficient space utilization. The existing system lacked real-time updates, fair scheduling, and mobile accessibility.",
			solution: "Built a full-stack web application with real-time availability tracking, one-hour booking slots for fair access, and a responsive design that works seamlessly on all devices.",
			technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Docker", "Supabase", "Real-time WebSockets"],
			keyFeatures: [
				"Real-time room availability tracking",
				"One-hour booking slots for fair access",
				"Mobile-responsive design",
				"User authentication with Queen's ID integration",
				"Admin dashboard for room management",
				"Email notifications for booking confirmations"
			],
			results: [
				"Served 1,800+ computing students",
				"Reduced room booking conflicts by 85%",
				"Improved space utilization efficiency by 60%",
				"Received 4.8/5 user satisfaction rating"
			],
			lessonsLearned: [
				"Real-time data synchronization is crucial for booking systems",
				"Fair access algorithms prevent system abuse",
				"Mobile-first design is essential for student applications",
				"User feedback drives iterative improvements"
			]
		}
	},
	{
		id: 2,
		name: "QTEDT Ride Control System",
		description: "A sophisticated Python-based ride control system managing 19 carts across 6 scenes with real-time tracking, safety protocols, and maintenance routing for themed entertainment applications.",
		briefDescription: "Python (PyQt5) ride control system managing 19 carts across 6 scenes with real-time tracking and safety compliance",
		technologies: ["Python", "PyQt5", "Flask", "SQLite", "JavaScript", "HTML/CSS", "JSON", "Real-time Systems"],
		githubUrl: "https://github.com/qtedt/ride-control",
		imageUrl: "/images/projects/qtedt-ride-control.jpg",
		status: "completed",
		featured: true,
		users: 400,
		caseStudy: {
			overview: "Developed as part of QTEDT's 2025 Winter Sprint, this ride control system was designed to manage complex themed entertainment rides with multiple carts and scenes. The system needed to ensure 100% safety compliance while providing real-time monitoring and control capabilities.",
			challenge: "Managing 19 carts across 6 different scenes required complex state management, real-time position tracking, and robust safety protocols. The system needed to handle both normal operations and emergency scenarios while maintaining data persistence across sessions.",
			solution: "Built a comprehensive control system using Python and PyQt5 for the GUI, with Flask for the web interface, and SQLite for data persistence. Implemented real-time tracking, state management, and safety protocols.",
			technologies: ["Python", "PyQt5", "Flask", "SQLite", "JavaScript", "HTML/CSS", "JSON", "Real-time Systems", "WebSockets"],
			keyFeatures: [
				"Real-time cart position tracking across 6 scenes",
				"Start/stop controls with safety interlocks",
				"Maintenance routing and scheduling",
				"State persistence across sessions",
				"Emergency stop functionality",
				"Web-based monitoring dashboard"
			],
			results: [
				"Successfully qualified for 2025 TMU Thrill Design Invitational",
				"Beat 400+ participants across 32 universities",
				"100% safety protocol compliance achieved",
				"Delivered fully functional system in 1-month sprint"
			],
			lessonsLearned: [
				"Safety-critical systems require extensive testing",
				"Real-time systems need robust error handling",
				"State persistence is crucial for operational continuity",
				"User interface design affects operational efficiency"
			]
		}
	},
	{
		id: 3,
		name: "COMPSA Website & Digital Platform",
		description: "A comprehensive digital platform for Queen's Computing Students' Association featuring live events calendar, academic resources, hiring opportunities, and official merchandise store.",
		briefDescription: "Full-stack digital platform with live events calendar, academic resources, hiring pages, and merchandise store",
		technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Docker", "Supabase", "Stripe API"],
		websiteUrl: "https://compsa.ca/",
		githubUrl: "https://github.com/compsa/website",
		imageUrl: "/images/projects/compsa-website.jpg",
		status: "completed",
		featured: false,
		users: 1800,
		caseStudy: {
			overview: "As Director of Information Technology for COMPSA, I led the development of a comprehensive digital platform to serve 1,800+ computing students. The platform needed to centralize all student services and provide modern, accessible tools for academic and professional development.",
			challenge: "COMPSA needed a unified digital presence that could handle multiple services: event management, academic resources, job postings, and e-commerce. The existing system was fragmented and difficult to maintain.",
			solution: "Built a modern full-stack platform using Next.js and TypeScript, with integrated services for events, resources, hiring, and merchandise. Implemented real-time updates and responsive design.",
			technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Docker", "Supabase", "Stripe API", "Real-time WebSockets"],
			keyFeatures: [
				"Live events calendar with RSVP functionality",
				"Academic resources and study materials",
				"Job posting and application system",
				"Official merchandise store with Stripe integration",
				"Admin dashboard for content management",
				"Mobile-responsive design"
			],
			results: [
				"Serving 1,800+ computing students",
				"Centralized all student services in one platform",
				"Improved student engagement by 40%",
				"Streamlined administrative processes"
			],
			lessonsLearned: [
				"User research drives feature prioritization",
				"Modular architecture enables rapid development",
				"Payment integration requires careful security planning",
				"Admin tools are crucial for content management"
			]
		}
	},
	{
		id: 4,
		name: "QWEB Guest Management System",
		description: "A full-stack guest management system developed during QWEB's 2025 Winter Sprint, featuring secure authentication, live status tracking, and real-time updates for streamlined operations.",
		briefDescription: "Full-stack guest management system with secure authentication, live status tracking, and real-time updates",
		technologies: ["Python", "Flask", "SQLite", "JavaScript", "HTML/CSS", "JWT Authentication", "WebSockets"],
		githubUrl: "https://github.com/qweb/guest-management",
		imageUrl: "/images/projects/qweb-guest-management.jpg",
		status: "completed",
		featured: false,
		users: 600,
		caseStudy: {
			overview: "Developed as part of QWEB's 2025 Winter Sprint, this guest management system was designed to streamline operations for a 600+ member student organization. The system needed to handle guest registration, authentication, and real-time status tracking.",
			challenge: "Managing guest information and operations for a large organization required secure authentication, real-time updates, and an intuitive interface. The system needed to integrate with existing workflows and provide administrative oversight.",
			solution: "Built a full-stack application using Python and Flask for the backend, with a modern JavaScript frontend. Implemented JWT authentication, real-time WebSocket updates, and a responsive design.",
			technologies: ["Python", "Flask", "SQLite", "JavaScript", "HTML/CSS", "JWT Authentication", "WebSockets", "Bootstrap"],
			keyFeatures: [
				"Secure user authentication and authorization",
				"Real-time guest status tracking",
				"Interactive HTML/CSS/Flask UI",
				"Live status updates via WebSockets",
				"Admin dashboard for operations management",
				"Export functionality for reporting"
			],
			results: [
				"Served 600+ active users",
				"Streamlined guest management operations",
				"Reduced administrative overhead by 50%",
				"Improved data accuracy and reporting"
			],
			lessonsLearned: [
				"Real-time updates enhance user experience",
				"Security is paramount in user management systems",
				"Admin interfaces need to be intuitive",
				"Data export capabilities are essential for reporting"
			]
		}
	}
];

export default function ProjectsPage() {
	const [projects, setProjects] = useState<Project[]>(initialProjects);
	const [selectedProject, setSelectedProject] = useState<Project | null>(null);
	const [filter, setFilter] = useState<"all" | "completed" | "in-progress">("all");

	const filteredProjects = projects.filter(project => 
		filter === "all" || project.status === filter
	);

	const openCaseStudy = (project: Project) => {
		setSelectedProject(project);
	};

	const closeCaseStudy = () => {
		setSelectedProject(null);
	};

	return (
		<main className="min-h-screen notebook-paper">
			<div className="mx-auto max-w-7xl px-8 py-12 relative">
				{/* Header */}
				<div className="mb-12 text-center">
					<h1 className={`${headline.className} text-6xl sm:text-7xl font-bold text-gray-900 mb-4 relative inline-block`}>
						My Projects
						{/* Swiggly underline highlight */}
						<svg 
							className="absolute -bottom-2 left-0 w-full h-4 text-orange-400" 
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

				{/* Filter Tabs */}
				<div className="mb-8 flex justify-center">
					<div className="flex space-x-2 bg-gray-100 p-1 rounded-lg">
						{[
							{ key: "all", label: "All Projects" },
							{ key: "completed", label: "Completed" },
							{ key: "in-progress", label: "In Progress" }
						].map(({ key, label }) => (
							<button
								key={key}
								onClick={() => setFilter(key as any)}
								className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
									filter === key
										? "bg-white text-gray-900 shadow-sm"
										: "text-gray-600 hover:text-gray-900"
								}`}
							>
								{label}
							</button>
						))}
					</div>
				</div>

				{/* Projects Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
					{filteredProjects.map((project, index) => {
						// Create slight random rotations for each card to look hand-placed
						const randomRotations = [0, 0.5, -0.3, 0.6, -0.5, 0.2];
						const baseRotation = randomRotations[index % randomRotations.length];
						
	return (
							<div
								key={project.id}
								className="group relative bg-white/95 rounded-lg border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 p-6 cursor-pointer transform hover:-translate-y-2 hover:scale-105"
								style={{
									transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
									transformOrigin: 'center center',
									transform: `rotate(${baseRotation}deg)`,
								}}
								onMouseEnter={(e) => {
									e.currentTarget.style.transform = `rotate(${baseRotation + 0.5}deg) translateY(-8px) scale(1.05)`;
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.transform = `rotate(${baseRotation}deg)`;
								}}
							>
								{/* Notebook margin line */}
								<div className="absolute left-0 top-0 bottom-0 w-1 bg-red-200/60 rounded-l-lg group-hover:bg-red-300/80 transition-colors duration-500"></div>
								
								{/* Status Badge */}
								<div className="absolute top-4 right-4">
									<span className={`px-2 py-1 rounded-full text-xs font-medium ${
										project.status === 'completed' 
											? 'bg-green-100 text-green-800' 
											: project.status === 'in-progress'
											? 'bg-blue-100 text-blue-800'
											: 'bg-yellow-100 text-yellow-800'
									}`}>
										{project.status === 'completed' ? '✓ Completed' : 
										 project.status === 'in-progress' ? '🔄 In Progress' : '📋 Planned'}
									</span>
								</div>


								{/* Polaroid Image Section */}
								<div className="pt-8 mb-6">
									<div className="relative group/image">
										{/* Polaroid Frame */}
										<div className="bg-white p-4 pb-8 shadow-lg transform rotate-1 hover:rotate-0 transition-transform duration-300">
											{/* Image */}
											<div className="w-full h-56 bg-gradient-to-br from-gray-100 to-gray-200 rounded-sm overflow-hidden">
												{project.imageUrl ? (
													<img 
														src={project.imageUrl} 
														alt={project.name}
														className="w-full h-full object-cover group-hover/image:scale-105 transition-transform duration-300"
														onError={(e) => {
															// Fallback to placeholder
															e.currentTarget.style.display = 'none';
															e.currentTarget.parentElement!.innerHTML = `
																<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200">
																	<div class="text-center">
																		<div class="text-4xl mb-2">${project.name.charAt(0)}</div>
																		<div class="text-sm text-blue-600 font-medium">${project.name}</div>
																	</div>
																</div>
															`;
														}}
													/>
												) : (
													<div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200">
														<div className="text-center">
															<div className="text-4xl mb-2">📱</div>
															<div className="text-sm text-blue-600 font-medium">{project.name}</div>
														</div>
													</div>
												)}
											</div>
											{/* Polaroid Label */}
											<div className="mt-3 text-center">
												<div className={`${bodyHand.className} text-sm text-gray-600`}>
													{new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
												</div>
											</div>
										</div>
										{/* Polaroid Shadow */}
										<div className="absolute inset-0 bg-black/10 rounded-lg transform translate-x-1 translate-y-1 -z-10"></div>
									</div>
								</div>

								{/* Project Content */}
								<div>
									{/* Title */}
									<h3 className={`${titleFont.className} text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-800 transition-colors duration-500`}>
										{project.name}
									</h3>
									
									{/* Description */}
									<p className={`${bodyHand.className} text-gray-700 mb-4 leading-relaxed`}>
										{project.briefDescription}
									</p>

									{/* Technologies */}
									<div className="mb-4">
										<div className="flex flex-wrap gap-2">
											{project.technologies.slice(0, 4).map((tech, techIndex) => (
												<span
													key={techIndex}
													className="bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 rounded-full px-3 py-1 text-xs font-medium text-gray-700"
												>
													{tech}
												</span>
											))}
											{project.technologies.length > 4 && (
												<span className="bg-gray-100 text-gray-600 rounded-full px-3 py-1 text-xs font-medium">
													+{project.technologies.length - 4} more
												</span>
											)}
										</div>
									</div>

									{/* X Factor Section */}
									<div className="mb-4">
										{project.users && (
											<div className="bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-lg p-3">
												<div className="flex items-center gap-2 text-green-700">
													<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
														<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
													</svg>
													<span className={`${bodyHand.className} text-sm font-medium`}>
														{project.users.toLocaleString()} active users
													</span>
												</div>
											</div>
										)}
									</div>

									{/* Visit Site Button */}
									{project.websiteUrl && (
										<div className="mb-3">
											<a
												href={project.websiteUrl}
												target="_blank"
												rel="noopener noreferrer"
												className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors duration-200 text-center block flex items-center justify-center gap-2"
												onClick={(e) => e.stopPropagation()}
											>
												<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
												</svg>
												Visit Site
											</a>
										</div>
									)}

									{/* Learn More Button */}
									<button
										onClick={() => openCaseStudy(project)}
										className="w-full bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 px-4 py-2 rounded-lg text-sm font-medium hover:from-orange-200 hover:to-orange-300 transition-all duration-200 flex items-center justify-center gap-2"
									>
										<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
										</svg>
										Learn More
									</button>
								</div>
							</div>
						);
					})}
				</div>

				{/* Case Study Modal */}
				{selectedProject && (
					<div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
						<div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
							{/* Modal Header */}
							<div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-lg">
								<div className="flex justify-between items-start">
									<div>
										<h2 className={`${headline.className} text-3xl font-bold text-gray-900 mb-2`}>
											{selectedProject.name}
										</h2>
										<p className={`${bodyHand.className} text-gray-600`}>
											Case Study
										</p>
									</div>
									<button
										onClick={closeCaseStudy}
										className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
									>
										<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
										</svg>
									</button>
								</div>
							</div>

							{/* Modal Content */}
							<div className="p-6 space-y-8">
								{/* Overview */}
								<div>
									<h3 className={`${headline.className} text-2xl font-semibold text-gray-800 mb-4`}>
										Overview
									</h3>
									<p className={`${bodyHand.className} text-lg text-gray-700 leading-relaxed`}>
										{selectedProject.caseStudy.overview}
									</p>
								</div>

								{/* Challenge & Solution */}
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div>
										<h3 className={`${headline.className} text-xl font-semibold text-gray-800 mb-3`}>
											Challenge
										</h3>
										<p className={`${bodyHand.className} text-gray-700 leading-relaxed`}>
											{selectedProject.caseStudy.challenge}
										</p>
									</div>
									<div>
										<h3 className={`${headline.className} text-xl font-semibold text-gray-800 mb-3`}>
											Solution
										</h3>
										<p className={`${bodyHand.className} text-gray-700 leading-relaxed`}>
											{selectedProject.caseStudy.solution}
										</p>
									</div>
								</div>

								{/* Key Features */}
								<div>
									<h3 className={`${headline.className} text-xl font-semibold text-gray-800 mb-4`}>
										Key Features
									</h3>
									<ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
										{selectedProject.caseStudy.keyFeatures.map((feature, index) => (
											<li key={index} className={`${bodyHand.className} text-gray-700 flex items-start gap-2`}>
												<span className="text-green-500 mt-1">•</span>
												<span>{feature}</span>
											</li>
										))}
									</ul>
								</div>

								{/* Technologies */}
								<div>
									<h3 className={`${headline.className} text-xl font-semibold text-gray-800 mb-4`}>
										Technologies Used
									</h3>
									<div className="flex flex-wrap gap-2">
										{selectedProject.caseStudy.technologies.map((tech, index) => (
											<span
												key={index}
												className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-full px-3 py-1 text-sm font-medium text-blue-800"
											>
												{tech}
											</span>
										))}
									</div>
								</div>

								{/* Results */}
								<div>
									<h3 className={`${headline.className} text-xl font-semibold text-gray-800 mb-4`}>
										Results
									</h3>
									<ul className="space-y-2">
										{selectedProject.caseStudy.results.map((result, index) => (
											<li key={index} className={`${bodyHand.className} text-gray-700 flex items-start gap-2`}>
												<span className="text-green-500 mt-1">✓</span>
												<span>{result}</span>
											</li>
										))}
									</ul>
								</div>

								{/* Lessons Learned */}
								<div>
									<h3 className={`${headline.className} text-xl font-semibold text-gray-800 mb-4`}>
										Lessons Learned
									</h3>
									<ul className="space-y-2">
										{selectedProject.caseStudy.lessonsLearned.map((lesson, index) => (
											<li key={index} className={`${bodyHand.className} text-gray-700 flex items-start gap-2`}>
												<span className="text-orange-500 mt-1">💡</span>
												<span>{lesson}</span>
											</li>
										))}
									</ul>
								</div>
							</div>

							{/* Modal Footer */}
							{selectedProject.websiteUrl && (
								<div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 p-6 rounded-b-lg">
									<a
										href={selectedProject.websiteUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors duration-200 text-center block"
									>
										🌐 Visit Live Site
									</a>
								</div>
							)}
						</div>
					</div>
				)}
			</div>
		</main>
	);
}
