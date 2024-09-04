import Image from "next/image"
import { FaCircleArrowUp } from "react-icons/fa6"
import { PrimaryBtn } from "../common/Button/index.component"
import { Social_Link } from "@/data/socialLink"
import Link from "next/link"

export const Footer2 = () => {
	return (
		<>
			<footer className="Layout">
				<div className="flex flex-col md:flex-row justify-between mb-12 md:mb-8 ">
					<h1 className="text-4xl font-semibold text-zinc-200">Connect with <span className="text-red-500">me.</span></h1>
					<div className="flex md:flex-row items-center gap-2">
						<p className="text-xs text-red-700">Open for work |</p>
						<p className="text-zinc-200">Lead Web Developer</p>
					</div>
				</div>

				<div className="mb-12 md:mb-8">
					<p className="text-xl text-zinc-200">For full time hiring or freelance work</p>
					<p className="pt-2 text-sm text-zinc-500">Write a mail to
						<span className="text-red-500 m-1">
							<a href="mailto:aashutoshrestha0@gmail.com">aashutoshrestha0@gmail.com</a>
						</span>
						or book a meet call with all details
					</p>
					<PrimaryBtn text="Let&apos;s talk" link="mailto:hello@CreaCore.io" className="mt-6" />

				</div>

				<div className="flex flex-row gap-8 text-xl text-zinc-200">
					{Social_Link.map((link, index) => (
						<a key={index} href={link.url}>
							{link.icon}
						</a>
					))}
				</div>

				<div className="flex flex-row justify-between my-12 md:my-8">
					<div className="flex flex-col items-start justify-end gap-2">
						<p className="text-xs font-semibold text-zinc-200">Build in Next.js ❤</p>
						<p className="text-xs font-semibold text-zinc-200">@2024 All rights reserved</p>
						<p className="text-xs font-semibold text-zinc-200"><Link href="https://shresthaaashutosh.com.np" target="__blank__">Aashutosh Shrestha</Link></p>
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