import Link from "next/link"
import { PrimaryBtn,SecondaryBtn } from "../common/Button/index.component"

const HeroSection = () => {
	return (
		<>
			<section className="Layout">
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

								<PrimaryBtn text="Let&apos;s talk" link="mailto:hello@CreaCore.io"/>
								<SecondaryBtn text="About me" link="/about"/>

							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default HeroSection