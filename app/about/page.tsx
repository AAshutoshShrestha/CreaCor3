import { Layout } from "@/Components/Layout";
import { AboutMe } from "@/Components/Sections/About.section";
import { Gallery } from "@/Components/Sections/Gallery.section";

export default function AboutPage() {
	return (
		<>
			<Layout HeaderStyle={1} FooterStyle={2} >
				<AboutMe />
				<Gallery />
			</Layout>

		</>
	)
}