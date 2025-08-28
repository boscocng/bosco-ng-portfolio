"use client";

import { useEffect, useState } from "react";
import { Patrick_Hand } from "next/font/google";

const bodyHand = Patrick_Hand({
	weight: ["400"],
	subsets: ["latin"],
});

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

export default function Testimonials() {
	const [currentTestimonial, setCurrentTestimonial] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
		}, 4000);

		return () => clearInterval(interval);
	}, []);

	const current = testimonials[currentTestimonial];

	return (
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
	);
}
