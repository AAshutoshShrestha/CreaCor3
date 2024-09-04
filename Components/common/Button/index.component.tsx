import Link from "next/link"
import { FaArrowUp } from "react-icons/fa6"

export const PrimaryBtn = ({ text, link, className }: { text: string, link: string, className?:string }) => {
	return (
		<>
			<Link href={link} className={`group inline-flex h-8 items-center gap-2.5 rounded-md bg-zinc-800 px-3 transition-all duration-500 ${className}`}>
				<span className="text-sm tracking-wide bg-transparent text-white">{text}</span>
				<FaArrowUp className="text-white transition duration-300 group-hover:rotate-45 bg-transparent" />

			</Link>
		</>
	)
}
export const SecondaryBtn = ({ text, link, className }: { text: string, link: string, className?:string }) => {
	return (
		<>
			<Link href={link} className={`px-4 text-sm tracking-wide text-zinc-300 hover:text-white hover:border-y-zinc-500 ${className}`} >
				{text}
			</Link>
		</>
	)
}

