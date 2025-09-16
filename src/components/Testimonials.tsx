"use client";

import { useEffect, useState } from "react";
import { Patrick_Hand } from "next/font/google";

const bodyHand = Patrick_Hand({
	weight: ["400"],
	subsets: ["latin"],
});

const testimonials = [
	{
		name: "Khyle Sewpersaud",
		role: "Co-Chair",
		company: "Queen's University Web Development",
		text: "Bosco has always put his foot forward before anyone else when it comes to doing that which is difficult. It always impressed me the lengths he went to solve even the most challenging of problems.",
		color: "from-yellow-200 to-yellow-100",
		borderColor: "border-yellow-300",
		rotation: "rotate-1",
		linkedin: "https://www.linkedin.com/in/khylesewpersaud/",
	},
	{
		name: "Nolan Verboomen",
		role: "President & Founder",
		company: "Queen's Themed Entertainment Design Team",
		text: "Working with Bosco at the TMTDC OQR showed how dependable he is… under tight deadlines, he was always willing to help the team and push our project forward.",
		color: "from-orange-200 to-orange-100",
		borderColor: "border-orange-300",
		rotation: "-rotate-1",
		linkedin: "https://www.linkedin.com/in/nolan-verboomen/",
	},
	{
		name: "Daniel Vargas",
		role: "Head of Backend",
		company: "Queen's Computing Students' Association",
		text: "Bosco led our team to deliver a fully deployed product in just four weeks. His meticulous planning, from setting a clear timeline to selecting the most efficient technologies, kept us focused and efficient. With his vision and thoughtful decision-making, we stayed on track and delivered a polished result on time.",
		color: "from-pink-200 to-pink-100",
		borderColor: "border-pink-300",
		rotation: "rotate-2",
		linkedin: "https://www.linkedin.com/in/daniel-vargas12/",
	},
	{
		name: "Emili Ribakov",
		role: "Frontend Developer",
		company: "Queen's Web Development",
		text: "Bosco's clear and effective communication stood out in every project I worked on with him. He has a unique ability to simplify complex technical ideas so the entire team could understand and stay aligned.",
		color: "from-green-200 to-green-100",
		borderColor: "border-green-300",
		rotation: "-rotate-2",
		linkedin: "https://www.linkedin.com/in/emili-ribakov-806a89346/",
	},
];

export default function Testimonials() {
	const [currentTestimonial, setCurrentTestimonial] = useState(0);
	const [isHovered, setIsHovered] = useState(false);

	useEffect(() => {
		if (isHovered) return; // Don't auto-rotate when hovered
		
		const interval = setInterval(() => {
			setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
		}, 4000);

		return () => clearInterval(interval);
	}, [isHovered]);

	return (
		<div className="w-64 flex-shrink-0 relative">
			{/* Stacked sticky notes container */}
			<div 
				className="relative h-80"
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				{testimonials.map((testimonial, index) => {
					// Only show the current testimonial
					const isActive = index === currentTestimonial;
					
					return (
						<div
							key={index}
							className={`absolute inset-0 transition-all duration-700 ease-in-out cursor-pointer group ${
								isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
							}`}
							onClick={() => setCurrentTestimonial(index)}
						>
							{/* Sticky note */}
							<div className={`group relative bg-gradient-to-br ${testimonial.color} ${testimonial.borderColor} border-2 rounded-sm shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 hover:scale-105 h-full`}>
								{/* Sticky note shadow effect */}
								<div className="absolute inset-0 bg-black/5 rounded-sm pointer-events-none" />
								
								{/* Content */}
								<div className="relative p-4 space-y-3 h-full flex flex-col z-10">
									{/* Quote mark */}
									<div className="text-2xl text-gray-400 font-serif leading-none">
										&ldquo;
									</div>
									
									{/* Testimonial text */}
									<p className={`${bodyHand.className} text-sm text-gray-700 leading-relaxed flex-1`}>
										{testimonial.text}
									</p>
									
									{/* Author info */}
									<div className="pt-2 border-t border-gray-300/30 mt-auto">
										<div className="font-semibold text-gray-800 text-sm">
											<a 
												href={testimonial.linkedin || '#'} 
												target="_blank" 
												rel="noopener noreferrer" 
												className="hover:underline hover:text-blue-600 transition-colors duration-200 cursor-pointer"
												onClick={(e) => {
													e.stopPropagation(); // Prevent parent click handler
													console.log('Clicked on:', testimonial.name, 'URL:', testimonial.linkedin);
													if (!testimonial.linkedin) {
														e.preventDefault();
														console.log('No LinkedIn URL for:', testimonial.name);
													}
												}}
											>
												{testimonial.name}
											</a>
										</div>
										<div className="text-xs text-gray-600">
											{testimonial.role} at {testimonial.company}
										</div>
									</div>
								</div>

								{/* Sticky note fold effect */}
								<div className="absolute top-0 right-0 w-0 h-0 border-l-[16px] border-l-transparent border-t-[16px] border-t-gray-400/30" />

								{/* Hover lift effect for active note */}
								{isActive && (
									<div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm pointer-events-none" />
								)}
							</div>
						</div>
					);
				})}
			</div>
			{/* Indicator dots below the stack */}
			<div className="flex justify-center mt-6 space-x-2">
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
	);
}
