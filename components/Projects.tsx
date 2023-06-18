"use client"

import { FaProjectDiagram } from "react-icons/fa"
import Title from "./Title"
import amazona from "../public/assets/cover-amazona-training.png"
import ecommerce from "../public/assets/cover-ecommers-p17.png"
import Metaverse from "../public/assets/cover-metaverse-p19.png"
import Summer from "../public/assets/cover-ecom-p18.png"
import Academia from "../public/assets/cover-academia.png"
import PizzaStore from "../public/assets/cover-contentful.png"
import IMDBClones from "../public/assets/cover-imdb-clone.png"
import ShoesStore from "../public/assets/cover-nike-shoes.png"
import Airbnb from "../public/assets/cover-bnb-clone.png"
import Sunglasses from "../public/assets/cover-sunglass-store.png"
import Fashion from "../public/assets/cover-home-fashion.png"
import Gym from "../public/assets/cover-gym.png"
import ProjectCard from "./ProjectCard"

const Projects = () => {
  return (
    <div className="wrapper" id="projects">
      <Title text="Projects" icon={<FaProjectDiagram />} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        <ProjectCard
          img={amazona.src}
          title="Amazona Store"
          link="https://amazona-training.vercel.app/"
        />
        <ProjectCard
          img={ecommerce.src}
          title="E-Commerce Website"
          link="https://saaidin-nextjs-ecommerce.vercel.app/"
        />
        <ProjectCard
          img={Metaverse.src}
          title="Metaverse Website"
          link="https://saaidin-metaverse.vercel.app/"
        />
        <ProjectCard
          img={Summer.src}
          title="Summer Sale Store"
          link="https://ecommerce-sanity-stripe-p18.vercel.app/"
        />
        <ProjectCard
          img={Academia.src}
          title="Academia Website"
          link="https://nextjs-academia.vercel.app/"
        />
        <ProjectCard
          img={PizzaStore.src}
          title="Pizza Stores"
          link="https://next-contentful-saaidin.vercel.app/"
        />
        <ProjectCard
          img={IMDBClones.src}
          title="IMDB Clones"
          link="https://imdb-clone-dwd.vercel.app/"
        />
        <ProjectCard
          img={ShoesStore.src}
          title="Shoes Store"
          link="https://dwd-store-shoes-frontend.vercel.app/"
        />
        <ProjectCard
          img={Airbnb.src}
          title="Airbnb Clone"
          link="https://next13-airbnb-website.vercel.app/"
        />
        <ProjectCard
          img={Sunglasses.src}
          title="Sunglasses Clone"
          link="https://dwd-ecom-nextjs.vercel.app/"
        />
        <ProjectCard
          img={Fashion.src}
          title="Fashion Store"
          link="https://dwd-nextjs12-fashion-store.vercel.app/"
        />
        <ProjectCard
          img={Gym.src}
          title="Gym Outlets"
          link="https://next13-gym-typescript.vercel.app/"
        />
      </div>
    </div>
  )
}

export default Projects
