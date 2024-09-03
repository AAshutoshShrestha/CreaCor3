import Image from "next/image"

export const Gallery = () => {
	return (
		<>

			<section className="Layout">
					<div className="flex flex-col md:grid md:grid-cols-3 gap-2">
						<Image
							src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&q=70"
							alt="project cover"
							width={850}
							height={1000}
							className="col-span-1 h-96 w-full rounded-md object-cover"
						/>
						<Image
							src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=70"
							alt="project cover"
							width={850}
							height={1000}
							className="col-span-1 h-96 w-full rounded-md object-cover"
						/>
						<Image
							src="https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=70"
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
							src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=800&q=70"
							alt="project cover"
							width={850}
							height={1000}
							className="col-span-2 h-96 w-full rounded-md object-cover"
						/>


					</div>
			</section>
		</>
	)
}