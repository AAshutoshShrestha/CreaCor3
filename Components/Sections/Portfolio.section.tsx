import Image from 'next/image';
import portfolioData from '@/data/projects.json';

const PortfolioSection = () => {

	return (
		<section className="Layout">
			<h1 className="text-5xl font-semibold text-zinc-200">Selected Works</h1>
			<span className="text-sm tracking-wide text-red-500">From : 2018 -&gt; 2024</span>

			<div className="-mx-6 mt-8 space-y-20 sm:-mx-12 sm:mt-16 lg:-mx-24">
				{
					(portfolioData.slice(0, 3)).map((project, index) => (
						<a className="block" key={index} href={`/portfolio/${project.slug}`}>
							<Image
								src={project.Banner_image.url}
								alt={project.Banner_image.alt}
								width={1500}
								height={800}
								className="cover aspect-square origin-bottom rounded-xl object-cover object-center transition-all duration-1000 h-[600px] hover:transform hover:scale-105 hover:translate-y-1" />

							<div className="flex items-center justify-between px-6 py-2 sm:px-12 sm:py-4">
								<h3 className="text-white">{project.ProjectName}</h3>
								<span className="text-xs text-zinc-300">{project.Category}</span>
							</div>
						</a>
					))
				}
			</div>
		</section>
	);
};

export default PortfolioSection;
