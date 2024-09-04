const WorkExperience = ({ workdata }: { workdata: any }) => {
	return (
		<>
			<section className="Layout">
				<h1 className="font-semibold text-zinc-200 text-4xl pb-12">Work Experience</h1>
				<div className="flex flex-col gap-6">
					{workdata.map((exp: any, index: number) => (
						<div
							key={index}
							className="items-center justify-between rounded-xl bg-zinc-900 px-6 py-4 sm:flex">

							<div className="text-zinc-200">
								<h1 className="text-2xl font-semibold">{exp.Company_Name}</h1>
								<p className="text-sm font-medium">{exp.Position}</p>
							</div>
							<div className="pt-3 font-medium text-zinc-300">
								<h1>
									{exp.Join_date} - {exp.End_date}
								</h1>
							</div>
						</div>
					))}
				</div>
			</section>
		</>
	)
}

export default WorkExperience;