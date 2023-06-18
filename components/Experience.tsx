import Title from "./Title"
import { MdWork } from "react-icons/md"
import { SiReactivex, SiFreelancer, SiFiverr, SiUpwork } from "react-icons/si"
import ExperienceCard from "./ExperienceCard"

const Experience = () => {
  return (
    <div className="wrapper">
      <Title text="Experiences" icon={<MdWork />} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ExperienceCard
          title="DinWebDev.com"
          subTitle="Front-End Web Developer 2022 - Present"
          icon={<SiReactivex />}
        />
        <ExperienceCard
          title="Upwork"
          subTitle="Front-End Web Developer 2021 - Present"
          icon={<SiUpwork />}
        />
        <ExperienceCard
          title="Freelancer"
          subTitle="Front-End Web Developer 2021 - Present"
          icon={<SiFreelancer />}
        />

        <ExperienceCard
          title="Fiverr"
          subTitle="Front-End Web Developer 2021 - Present"
          icon={<SiFiverr />}
        />
      </div>
    </div>
  )
}

export default Experience
