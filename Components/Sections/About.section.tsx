import { FaFacebookF, FaInstagram, FaGithub, FaXTwitter, FaGoogle } from "react-icons/fa6"

export const AboutMe = () => {
	return (
		<>
			<section className="mx-auto max-w-5xl sm:pb-16 px-8 md:px-12 mt-20">
				<div className="">
					<h1 className="mt-16 text-3xl font-semibold text-white">Jordan Lee</h1>
					<p className="text-sm tracking-wide text-zinc-300">Lead Web Developer</p>
					<div
						className="my-12 grid gap-12 border-y border-zinc-800 py-12 text-base text-zinc-300 sm:grid-cols-2">
						<div className="space-y-6">
							<p>Lead Web Developer (React & Node.js) | Enthusiastic about modern web technologies and
								design | Dedicated to creating seamless user experiences...</p>
							<p>Skilled in building high-performance web applications and solving complex problems with
								innovative solutions. Committed to staying at the forefront of technology and best
								practices.</p>
						</div>
						<div className="space-y-6">
							<p>Expert in crafting user-centric applications with a focus on scalability and
								maintainability. Proven track record in leading projects and collaborating with diverse
								teams to achieve success.</p>
							<p>Always on the lookout for new tools and techniques to improve development processes and
								deliver exceptional results.</p>

							<div className="flex items-center gap-4 divide-x divide-zinc-200 dark:divide-zinc-800">
								<div className="flex flex-row gap-3 text-md ">
									<a href="http://Facebook.com/aashutosh" className="text-zinc-200 hover:text-red-500"><FaFacebookF className="" /></a>
									<a href="http://Instagram.com/aashutosh" className="text-zinc-200 hover:text-red-500"><FaInstagram /></a>
									<a href="http://Github.com/aashutosh" className="text-zinc-200 hover:text-red-500"><FaGithub /></a>
									<a href="http://Twitter.com/aashutosh" className="text-zinc-200 hover:text-red-500"><FaXTwitter /></a>
									<a href="http://Google.com/aashutosh" className="text-zinc-200 hover:text-red-500"><FaGoogle /></a>

								</div>
								<a href="mailto:contact@jordanlee.dev"
									className="pl-4 text-base tracking-wide text-zinc-600 hover:text-red-600 dark:text-zinc-400 dark:hover:text-white">contact@jordanlee.dev</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}