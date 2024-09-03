import Image from "next/image"
import { FaCircleArrowUp, FaFacebookF, FaInstagram, FaGithub, FaXTwitter, FaGoogle } from "react-icons/fa6"

export const Footer2 = () => {
	return (
		<>
			<footer className="mx-auto max-w-5xl sm:pb-16 px-8 md:px-12 mt-20">
				<div className="flex flex-col md:flex-row justify-between mb-12 md:mb-8 ">
					<h1 className="text-4xl font-semibold text-zinc-200">Connect with <span className="text-red-500">me.</span></h1>
					<div className="flex md:flex-row items-center gap-2">
						<p className="text-xs text-red-700">Open for work |</p>
						<p className="text-zinc-200">Lead Web Developer</p>
					</div>
				</div>

				<div className="mb-12 md:mb-8">
					<p className="text-xl text-zinc-200">For full time hiring or freelance work</p>
					<p className="pt-2 text-sm text-zinc-500">Write a mail to <span className="text-red-500"><a
						href="mailto:aashutoshrestha0@gmail.com">aashutoshrestha0@gmail.com</a></span>
						or book a meet call with all details</p>
				</div>

				<div className="flex flex-row gap-8 text-xl text-zinc-200">
					<a href="http://Facebook.com"><FaFacebookF className="" /></a>
					<a href="http://Instagram.com"><FaInstagram /></a>
					<a href="http://Github.com"><FaGithub /></a>
					<a href="http://Twitter.com"><FaXTwitter /></a>
					<a href="http://Google.com"><FaGoogle /></a>
				</div>

				<div className="flex flex-row justify-between my-12 md:my-8">
					<div className="flex flex-col items-start justify-end gap-2">
						<p className="text-xs font-semibold text-zinc-200">Build in Next.js ❤</p>
						<p className="text-xs font-semibold text-zinc-200">@2024 All rights reserved</p>
					</div>

					<div className="flex gap-8">
						<div className="h-24 w-24">
							<Image
								src="https://govmngfhcfddnuqorust.supabase.co/storage/v1/object/public/image-bucket/EXP_TAG.png"
								alt="Théo Balick"
								width={250}
								height={250}
								className="object-cover animate-spin-slow" />

						</div>
						<a href="#headerNav" className="text-2xl text-zinc-300"><FaCircleArrowUp /></a>

					</div>
				</div>
			</footer>
		</>
	)
}