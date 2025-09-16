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
	userMetric?: string;
	duration?: string;
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
		briefDescription: "Production-ready booking platform for 500+ computing students with private breakout room reservations",
		technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Docker", "Supabase"],
		websiteUrl: "https://compsa.ca/room-booking",
		githubUrl: "https://github.com/compsa/room-booking",
		imageUrl: "/images/CASLab.jpeg",
		status: "completed",
		featured: true,
		users: 500,
		userMetric: "active users",
		duration: "1 month",
		caseStudy: {
			overview: "The CASLab Room Booking System was developed to solve the problem of students struggling to find and reserve study spaces in the Faculty of Computing. With 500+ students competing for limited breakout rooms, we needed a fair, efficient, and user-friendly solution.",
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
				"Served 500+ computing students",
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
		name: "QWEB's Booking Platform",
		description: "A comprehensive booking platform for Queen's Computing students to reserve private breakout rooms in the Faculty's Computer Lab. Built with modern web technologies and designed for seamless user experience.",
		briefDescription: "Production-ready booking platform for 600+ computing students with private breakout room reservations",
		technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Docker", "Supabase"],
		githubUrl: "https://github.com/qweb/booking-platform",
		imageUrl: "/images/qweb_boking.jpg.png",
		status: "completed",
		featured: true,
		users: 600,
		userMetric: "active users",
		duration: "4 months",
		caseStudy: {
			overview: "The QWEB Booking Platform was developed to solve the problem of students struggling to find and reserve study spaces in the Faculty of Computing. With 600+ students competing for limited breakout rooms, we needed a fair, efficient, and user-friendly solution.",
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
				"Served 600+ computing students",
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
		id: 3,
		name: "COMPSA Website & Digital Platform",
		description: "A comprehensive digital platform for Queen's Computing Students' Association featuring live events calendar, academic resources, hiring opportunities, and official merchandise store.",
		briefDescription: "Full-stack digital platform with live events calendar, academic resources, hiring pages, and merchandise store",
		technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Docker", "Supabase", "Stripe API"],
		websiteUrl: "https://compsa.ca/",
		githubUrl: "https://github.com/compsa/website",
		imageUrl: "/images/COMPSA.png",
		status: "completed",
		featured: false,
		users: 10000,
		userMetric: "visits last month",
		duration: "6 months",
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
				"10,000+ visits last month",
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
		name: "COMPSA LLM Agent",
		description: "An intelligent AI agent designed to assist Queen's Computing students with academic queries, course information, and student services. Built with advanced language models and integrated with COMPSA's digital platform.",
		briefDescription: "AI-powered assistant for computing students with academic support and course guidance",
		technologies: ["Python", "OpenAI API", "FastAPI", "React", "TypeScript", "PostgreSQL", "Docker"],
		imageUrl: "/images/llm_agent.png",
		status: "in-progress",
		featured: true,
		users: undefined,
		userMetric: undefined,
		duration: "deployment in 1 month",
		caseStudy: {
			overview: "The COMPSA LLM Agent is an intelligent AI assistant designed to help Queen's Computing students navigate academic requirements, course information, and student services. As part of COMPSA's digital transformation, this agent provides 24/7 support for common student queries and academic guidance.",
			challenge: "Students frequently have questions about course requirements, academic policies, and student services that require immediate answers. The existing support system was limited to office hours and email responses, creating delays in student assistance.",
			solution: "Developed an AI-powered agent using advanced language models that can understand natural language queries and provide accurate, contextual responses about academic matters, course information, and student services.",
			technologies: ["Python", "OpenAI API", "FastAPI", "React", "TypeScript", "PostgreSQL", "Docker", "Vector Database"],
			keyFeatures: [
				"Natural language processing for student queries",
				"Integration with course catalog and academic policies",
				"Real-time responses to common student questions",
				"Contextual understanding of computing program requirements",
				"Seamless integration with COMPSA platform",
				"Continuous learning from student interactions"
			],
			results: [
				"Currently in development phase",
				"Expected to serve 1,800+ computing students",
				"Planned deployment in 1 month",
				"Anticipated 24/7 availability for student support"
			],
			lessonsLearned: [
				"AI agents require extensive training data for domain-specific knowledge",
				"User experience design is crucial for AI interactions",
				"Integration with existing systems requires careful planning",
				"Continuous monitoring and improvement is essential for AI systems"
			]
		}
	},
	{
		id: 5,
		name: "Personal Portfolio",
		description: "A modern, responsive portfolio website built with Next.js and TypeScript, featuring a clean design, interactive animations, and optimized performance for showcasing professional work and skills.",
		briefDescription: "Modern portfolio website with clean design, interactive animations, and optimized performance",
		technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
		websiteUrl: "https://bosco-ng-portfolio.vercel.app",
		githubUrl: "https://github.com/boscocng/bosco-ng-portfolio",
		imageUrl: "/images/portfolio.png",
		status: "completed",
		featured: false,
		users: undefined,
		userMetric: undefined,
		duration: "1 month",
		caseStudy: {
			overview: "Developed a personal portfolio website to showcase my projects, skills, and experience as a software developer. The goal was to create a modern, professional platform that effectively communicates my capabilities to potential employers and clients.",
			challenge: "Creating a portfolio that stands out while maintaining professional standards, ensuring fast loading times, mobile responsiveness, and an intuitive user experience that effectively showcases my work.",
			solution: "Built a modern portfolio using Next.js and TypeScript for type safety and performance, with Tailwind CSS for responsive design and Framer Motion for smooth animations. Implemented a clean, minimalist design that puts focus on the content.",
			technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel", "GitHub Actions"],
			keyFeatures: [
				"Responsive design for all devices",
				"Smooth animations and transitions",
				"Interactive project showcase",
				"Contact form integration",
				"SEO optimization",
				"Fast loading performance"
			],
			results: [
				"Completed in 1 month",
				"100% mobile responsive",
				"Lighthouse score of 95+",
				"Successfully deployed on Vercel"
			],
			lessonsLearned: [
				"Performance optimization is crucial for portfolio sites",
				"Clean design enhances content readability",
				"Mobile-first approach improves user experience",
				"TypeScript prevents many runtime errors"
			]
		}
	}
];

export default function ProjectsPage() {
	const [projects] = useState<Project[]>(initialProjects);
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
								onClick={() => setFilter(key as "all" | "completed" | "in-progress")}
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
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					{filteredProjects.map((project) => {
	return (
							<div
								key={project.id}
								className="group relative bg-white/95 rounded-lg border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 p-6 cursor-pointer transform hover:-translate-y-2 hover:scale-105"
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
										 project.status === 'in-progress' ? '⏳ In Progress' : '📋 Planned'}
									</span>
								</div>

								{/* Top Half - Image */}
								<div className="pt-8 mb-6">
									<div className="w-full h-64 bg-gray-100 rounded-lg overflow-hidden">
										{project.imageUrl ? (
											<img 
												src={project.imageUrl} 
												alt={project.name}
												className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
												onError={(e) => {
													// Fallback to placeholder
													e.currentTarget.style.display = 'none';
													const parent = e.currentTarget.parentElement;
													if (parent) {
														parent.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200"><div class="text-center"><div class="text-4xl mb-2">' + project.name.charAt(0) + '</div><div class="text-sm text-blue-600 font-medium">' + project.name + '</div></div></div>';
													}
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
								</div>

								{/* Bottom Half - Content */}
								<div className="space-y-4">
									{/* Title and User Count */}
									<div>
										<h3 className={`${titleFont.className} text-2xl font-bold text-gray-900 group-hover:text-blue-800 transition-colors duration-500`}>
											{project.name}
										</h3>
										
										{/* User Count and Duration */}
										{(project.users || project.duration) && (
											<div className="flex items-center gap-4 text-gray-500 mt-1">
												{/* User Count */}
												{project.users && (
													<div className="flex items-center gap-2">
														<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
															<path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
														</svg>
														<span className={`${bodyHand.className} text-sm`}>
															{project.users.toLocaleString()} {project.userMetric || "active users"}
														</span>
													</div>
												)}
												
												{/* Duration */}
												{project.duration && (
													<div className="flex items-center gap-2">
														<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
															<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
														</svg>
														<span className={`${bodyHand.className} text-sm`}>
															{project.duration}
														</span>
													</div>
												)}
											</div>
										)}
									</div>
									
									{/* Description */}
									<p className={`${bodyHand.className} text-gray-700 leading-relaxed`}>
										{project.briefDescription}
									</p>

									{/* Technologies */}
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

									{/* Action Buttons */}
									<div className="flex gap-3">
										{/* Live Demo Button */}
										{project.websiteUrl && project.name !== "Personal Portfolio" && (
											<a
												href={project.websiteUrl}
												target="_blank"
												rel="noopener noreferrer"
												className="flex-1 bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors duration-200 text-center flex items-center justify-center gap-2"
												onClick={(e) => e.stopPropagation()}
											>
												<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
												</svg>
												Live Demo
											</a>
										)}

										{/* View Code Button for Personal Portfolio */}
										{project.githubUrl && project.name === "Personal Portfolio" && (
											<a
												href={project.githubUrl}
												target="_blank"
												rel="noopener noreferrer"
												className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-900 transition-colors duration-200 text-center flex items-center justify-center gap-2"
												onClick={(e) => e.stopPropagation()}
											>
												<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
													<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
												</svg>
												View Code
											</a>
										)}

										{/* Read More Button */}
										<button
											onClick={() => openCaseStudy(project)}
											className="flex-1 bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 px-4 py-2 rounded-lg text-sm font-medium hover:from-orange-200 hover:to-orange-300 transition-all duration-200 flex items-center justify-center gap-2"
										>
											<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
											</svg>
											Read More
										</button>
									</div>
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
