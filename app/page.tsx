import { Layout } from "@/Components/Layout";
import HeroSection from "@/Components/Sections/Hero.section";
import PortfolioSection from "@/Components/Sections/Portfolio.section";


export default function Home() {
  return (
    <>
      <Layout HeaderStyle={1} FooterStyle={2} >
          <HeroSection/>
          <PortfolioSection/>
      </Layout>
    </>
  );
}
