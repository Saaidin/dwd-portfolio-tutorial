import AboutMe from "@/components/AboutMe"
import Banner from "@/components/Banner"
import Contact from "@/components/Contact"
import Experience from "@/components/Experience"
import Footer from "@/components/Footer"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Header from "@/components/Header"

export default function Home() {
  return (
    <main className="w-full dark:text-gray-300 px-4">
      <div className="max-w-screen-xl mx-auto lg:pt-10">
        <Header />
        <Banner />
        <AboutMe />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
