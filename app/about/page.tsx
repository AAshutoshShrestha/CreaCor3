import { Layout } from "@/Components/Layout";
import { AboutMe } from "@/Components/Sections/About.section";
import { Gallery } from "@/Components/Sections/Gallery.section";
import WorkExperience from "@/Components/Sections/workexp.section";

import work_exp from "@/data/Work_Exp.json"

export default function AboutPage() {
	return (
		<>
			<Layout HeaderStyle={1} FooterStyle={2} >
				<AboutMe />
				<WorkExperience workdata={work_exp}/>
				<Gallery />
			</Layout>

		</>
	)
}