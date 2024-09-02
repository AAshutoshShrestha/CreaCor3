import { Footer1, Footer2 } from "../Footer"
import { Header1 } from "../Navigation"


interface layoutProps {
	children: React.ReactNode;
	HeaderStyle: number
	FooterStyle: number
}


export const Layout = ({ HeaderStyle, FooterStyle, children }: layoutProps) => {
	return (
		<main className="overflow-x-hidden relative">

			{HeaderStyle === 1 ? <Header1 /> : <></>}

			{children}

			{FooterStyle === 1 ? <Footer1 /> : <></>}
			{FooterStyle === 2 ? <Footer2 /> : <></>}

		</main>

	)
} 