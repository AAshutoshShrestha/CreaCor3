'use client'
import { Layout } from "@/Components/Layout";
import { Gallery } from "@/Components/Sections/Gallery.section";
import Image from "next/image";
import { useParams } from "next/navigation";

import portfolioData from '@/data/projects.json';

interface PostProps {
	title: string;
	slug: string;
	publishedAt: string;
	categories: string[];
	image: string;
	content: any;
	short_desc: string;
}


export default function PortfolioDetails() {
	const { slug } = useParams<{ slug: string }>();
	
	// const fetchData = (slug: string) => {
	// 	try {
	// 		const post = (portfolioData as PostProps[]).find((item) => item.slug === slug);
	// 		if (post) {
	// 			setPostDetail(post);
	// 		} else {
	// 			setPostDetail(null);
	// 		}
	// 	} catch (error) {
	// 		console.error("Error fetching data:", error);
	// 	} finally {
	// 		setLoading(false);
	// 	}
	// };

	return (
		<>
			<Layout HeaderStyle={1} FooterStyle={1}>
				<section className="Layout">
					<div className="mx-auto max-w-6xl px-6 md:px-12">
						<div className="my-16">
							<h1 className="text-3xl font-semibold text-white">NextGen - Next.js Application</h1>
							<h1 className="text-3xl font-semibold text-white">{slug}</h1>
							<p className="text-sm tracking-wide text-zinc-300">Web App Showcase</p>
						</div>
						<p className="text-sm text-zinc-200 sm:w-2/3 xl:w-1/2">
							Discover our latest Next.js application built with cutting-edge technologies!
							We focus on delivering seamless user experiences with dynamic content and optimal performance.
						</p>
					</div>
					<div className="mx-auto my-12 max-w-6xl px-1 md:px-12">
						<div className="flex flex-col md:grid md:grid-cols-3 gap-2">
							<Image
								src="https://images.unsplash.com/photo-1604145559206-e3bce0040e2d?w=800&q=70"
								alt="project cover"
								width={850}
								height={1000}
								className="col-span-2 h-96 w-full rounded-md object-cover"
							/>
							<Image
								src="https://images.unsplash.com/photo-1542641728-6ca359b085f4?w=800&q=70"
								alt="project cover"
								width={850}
								height={1000}
								className="col-span-1 h-96 w-full rounded-md object-cover"
							/>
						</div>
					</div>
				</section>
				<section className="Layout">

					<div className="border-y border-zinc-800 py-12">
						<h2 className="text-2xl font-bold text-white">User Challenges</h2>
						<div className="mt-12 grid gap-6 text-sm text-zinc-300 sm:grid-cols-2 sm:gap-12">
							<div className="space-y-6">
								<p>Our users faced difficulties with complex workflows and slow loading times.</p>
								<p>Challenges included integrating real-time data, managing state efficiently, and
									ensuring cross-device compatibility.</p>
							</div>
							<div className="space-y-6">
								<p>We aimed to provide a streamlined experience with reduced load times, enhanced data
									handling, and a responsive design.</p>
								<p>Feedback indicated a need for improved navigation and faster interactions, especially
									on mobile devices.</p>
							</div>
						</div>
					</div>

					<div className="flex flex-col md:grid md:grid-cols-3 gap-2">
						<Image
							src="https://images.unsplash.com/photo-1532622785990-d2c36a76f5a6?w=800&q=70"
							alt="project cover"
							width={850}
							height={1000}
							className="col-span-1 h-96 w-full rounded-md object-cover"
						/>
						<Image
							src="https://images.unsplash.com/photo-1542641728-6ca359b085f4?w=800&q=70"
							alt="project cover"
							width={850}
							height={1000}
							className="col-span-1 h-96 w-full rounded-md object-cover"
						/>
						<Image
							src="https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=800&q=70"
							alt="project cover"
							width={850}
							height={1000}
							className="col-span-1 h-96 w-full rounded-md object-cover"
						/>
					</div>
				</section>
				<section className="Layout">

					<div className="border-y border-zinc-800 py-12">
						<h2 className="text-2xl font-bold text-white">Our Solution</h2>
						<div className="mt-12 grid gap-6 text-sm text-zinc-300 sm:grid-cols-2 sm:gap-12">
							<div className="space-y-6">
								<p>We implemented a modern React-based architecture with Next.js, focusing on
									server-side rendering and static site generation for optimal performance.</p>
								<p>State management was streamlined using React Context and hooks, while the design was
									made fully responsive with Tailwind CSS.</p>
							</div>
							<div className="space-y-6">
								<p>Real-time updates were integrated using WebSockets, and API routes were optimized for
									efficient data fetching.</p>
								<p>User feedback was incorporated into iterative design improvements, enhancing
									usability and accessibility.</p>
							</div>
						</div>
					</div>

					<Gallery />
				</section>
				<section className="Layout">
					<div className="md:px-6 lg:px-12">
						<h2 className="text-2xl font-bold text-white">Results Achieved</h2>
						<p className="mt-2 text-sm text-zinc-300">Significant improvements in user engagement and
							performance metrics!</p>
					</div>
					<div className="mt-12 rounded-md bg-zinc-900 px-6 md:px-12">
						<div
							className="relative py-12 before:absolute before:inset-x-0 before:bottom-0 before:mx-auto before:h-px before:w-1/2 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent">
							<div className="grid gap-12 divide-zinc-700 sm:-mx-12 sm:grid-cols-3 sm:gap-0 sm:divide-x">
								<div className="mx-auto w-max space-y-4 text-center sm:px-12 sm:text-left">
									<h3 className="text-sinc-950 text-white sm:text-5xl">150k</h3>
									<span className="inline-block text-sm text-zinc-300">Monthly Active Users</span>
								</div>
								<div className="mx-auto w-max space-y-4 text-center sm:px-12 sm:text-left">
									<h3 className="text-sinc-950 text-white sm:text-5xl">600k</h3>
									<span className="inline-block text-sm text-zinc-300">Page Views</span>
								</div>
								<div className="mx-auto w-max space-y-4 text-center sm:px-12 sm:text-left">
									<h3 className="text-sinc-950 text-white sm:text-5xl">120k</h3>
									<span className="inline-block text-sm text-zinc-300">Social Media Followers</span>
								</div>
							</div>
						</div>
					</div>
				</section>
			</Layout>
		</>
	)
}