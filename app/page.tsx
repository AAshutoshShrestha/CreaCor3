import { SecondaryBtn } from "@/Components/common/Button/index.component";
import { Layout } from "@/Components/Layout";
import HeroSection from "@/Components/Sections/Hero.section";
import PortfolioSection from "@/Components/Sections/Portfolio.section";


export default function Home() {
  return (
    <>
      <Layout HeaderStyle={1} FooterStyle={2} >
        <HeroSection />
        <PortfolioSection />
        <div className="flex items-center justify-center py-16">
          <SecondaryBtn link='/portfolio' text='View all projects' className='border border-x-zinc-300 py-4 px-12 hover:bg-zinc-300 hover:text-black' />
        </div>
      </Layout>
    </>
  );
}
