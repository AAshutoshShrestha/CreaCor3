import Image from "next/image"
import Link from "next/link"
import { FaBarsStaggered } from "react-icons/fa6"

const MenuItems = [
	{
		name: "Home",
		link: "/",
	},
	{
		name: "Portfolio",
		link: "/portfolio",
	},
	{
		name: "About",
		link: "/about",
	},
]
export const Header1 = () => {
	return (
		<>
			<header className="Layout" id="headerNav">
				<div className="mx-auto max-w-6xl">
					<div className="flex justify-between">
						<div className="flex gap-4">
							<Link href="/">
								<span className="sr-only">Théo Balick</span>
								<Image
									src={"https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=800&q=60"}
									alt="Théo Balick"
									width={400}
									height={400}
									className="h-28 w-28 rounded-full object-cover" />
							</Link>
						</div>

						<div className="relative">
							<input type="checkbox" id="dropdownToggle" className="peer hidden" />
							<label htmlFor="dropdownToggle"
								className="group relative flex h-9 w-9 cursor-pointer rounded-md bg-zinc-800 hover:bg-zinc-700 active:bg-zinc-600">

								<FaBarsStaggered className="m-auto text-zinc-300 bg-transparent duration-300 group-hover:text-red-500" />
							</label>


							<div
								className="absolute right-0 mt-2 hidden w-48 rounded-md bg-zinc-900 shadow-lg peer-checked:block z-20">
								<ul className="py-1 text-sm text-zinc-200">
									{
										MenuItems.map((item, index) => (
											<li key={index}>
												<Link href={item.link} className="block px-4 py-2 hover:bg-zinc-800 hover:text-white">{item.name}</Link>
											</li>
										))
									}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	)
}