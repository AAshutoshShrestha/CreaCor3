import Link from "next/link"
import { FaArrowUp } from "react-icons/fa6"

const HeroSection = () => {
	return (
		<>
			<section className="mx-auto max-w-5xl sm:pb-16 px-8 md:px-12 mt-20">
				<div className="flex h-full flex-col justify-between">
					<div className="grid gap-8 sm:grid-cols-2">
						<div>
							<h1 className="text-3xl font-semibold text-white">Jordan Lee</h1>
							<p className="text-sm tracking-wide text-zinc-300">Lead Web Developer</p>
						</div>
						<div>
							<p className="mb-12 text-base text-zinc-200">Lead Web Developer (React & Node.js) |
								Enthusiastic about modern web technologies and design | Dedicated to creating
								seamless user experiences...</p>
							<div className="flex items-center gap-4 divide-x divide-zinc-700">

								<Link href="mailto:hello@CreaCore.io" className="group inline-flex h-8 items-center gap-2.5 rounded-md bg-zinc-800 px-3 transition-all duration-500">
									<span className="text-sm tracking-wide bg-transparent text-white">Let&apos;s talk</span>
									<FaArrowUp className="text-white transition duration-300 group-hover:rotate-45 bg-transparent"/>

								</Link>

								<Link href="/about" className="pl-4 text-sm tracking-wide text-zinc-300 hover:text-white hover:border-y-zinc-500 ">
									About me
								</Link>

							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default HeroSection