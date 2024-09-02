import Image from "next/image"

const PortfolioSection = () => {
	return (
		<>
			<section className="Layout">
				<h1 className="text-5xl font-semibold text-zinc-200">Selected Works</h1>
				<span className="text-sm tracking-wide text-red-500">From : 2018 -&gt; 2024</span>

				<div className="-mx-6 mt-8 space-y-20 sm:-mx-12 sm:mt-16 lg:-mx-24">
					<a className="block" href="/portfolio">
						<Image
							src={"https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=60"}
							alt="CreaCore tailfolio project one"
							width={1500}
							height={800}
							className="cover aspect-square origin-bottom rounded-xl object-cover object-center transition-all duration-1000 h-[600px] hover:transform hover:scale-105 hover:translate-y-1" />


						<div className="flex items-center justify-between px-6 py-2 sm:px-12 sm:py-4">
							<h3 className="text-white">Project Name</h3>
							<span className="text-xs text-zinc-300">Web Design</span>
						</div>
					</a>
					<a className="block" href="/portfolio">
						<Image
							src={"https://images.unsplash.com/photo-1542641728-6ca359b085f4?w=800&q=60"}
							alt="CreaCore tailfolio project two"
							width={1500}
							height={800}
							className="cover aspect-square origin-bottom rounded-xl object-cover object-center transition-all duration-1000 h-[600px] hover:transform hover:scale-105 hover:translate-y-1" />

						<div className="flex items-center justify-between px-6 py-2 sm:px-12 sm:py-4">
							<h3 className="text-white">Project Name</h3>
							<span className="text-xs text-zinc-300">Web Design</span>
						</div>
					</a>
					<a className="block" href="/portfolio">
					<Image
							src={"https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=60"}
							alt="CreaCore tailfolio project three"
							width={1500}
							height={800}
							className="cover aspect-square origin-bottom rounded-xl object-cover object-center transition-all duration-1000 h-[600px] hover:transform hover:scale-105 hover:translate-y-1" />

						
						<div className="flex items-center justify-between px-6 py-2 sm:px-12 sm:py-4">
							<h3 className="text-white">Project Name</h3>
							<span className="text-xs text-zinc-300">Web Design</span>
						</div>
					</a>
					<a className="block" href="/portfolio">
					<Image
							src={"https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=60"}
							alt="CreaCore tailfolio project four"
							width={1500}
							height={800}
							className="cover aspect-square origin-bottom rounded-xl object-cover object-center transition-all duration-1000 h-[600px] hover:transform hover:scale-105 hover:translate-y-1" />

						<div className="flex items-center justify-between px-6 py-2 sm:px-12 sm:py-4">
							<h3 className="text-white">Project Name</h3>
							<span className="text-xs text-zinc-300">Web Design</span>
						</div>
					</a>
				</div>
			</section>
		</>
	)
}

export default PortfolioSection