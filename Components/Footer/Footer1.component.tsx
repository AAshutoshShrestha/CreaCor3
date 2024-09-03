import Link from "next/link"
import { FaCircleArrowUp } from "react-icons/fa6"

export const Footer1 = () => {
	return (
		<>
			<footer className="relative mt-12 border-t border-zinc-900 py-6">
				<div className="mx-auto max-w-5xl sm:pb-16 px-8 md:px-12 mt-20">
					<div className="flex flex-wrap justify-between gap-4">
						<div className="flex flex-col-reverse gap-6">
							<span className="text-sm text-zinc-500">&copy; CreaCore 2024 - Present</span>
							<ul className="space-y-2">
								<li>
									<Link href="mailto:hello@CreaCore.io" className="flex items-center gap-2 text-zinc-300 hover:text-white">
										<span className="sr-only">Contact me</span>
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
											stroke-width="1.5" stroke="currentColor" className="h-4 w-4">
											<path stroke-linecap="round" stroke-linejoin="round"
												d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
										</svg>
										<span className="text-sm tracking-wide">hello@CreaCore.io</span>
									</Link>
								</li>
								<li>
									<a href="https://linkedin.com"
										className="flex items-center gap-2 text-zinc-300 hover:text-white">
										<span className="sr-only">Connect on LinkedIn</span>
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
											stroke-width="1.5" stroke="currentColor" className="h-4 w-4">
											<path stroke-linecap="round" stroke-linejoin="round"
												d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
										</svg>
										<span className="text-sm tracking-wide">LinkedIn</span>
									</a>
								</li>
								<li>
									<a href="https://twitter.com/@CreaCore_ui"
										className="flex items-center gap-2 text-zinc-300 hover:text-white">
										<span className="sr-only">Follow me on Twitter</span>
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
											stroke-width="1.5" stroke="currentColor" className="h-4 w-4">
											<path stroke-linecap="round" stroke-linejoin="round"
												d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
										</svg>
										<span className="text-sm tracking-wide">Twitter</span>
									</a>
								</li>
							</ul>
						</div>
						<a href="#headerNav" className="text-2xl text-zinc-300"><FaCircleArrowUp /></a>
					</div>
				</div>
			</footer>
		</>
	)
}