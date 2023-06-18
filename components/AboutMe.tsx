import { SiInformatica } from "react-icons/si"
import Title from "./Title"

const AboutMe = () => {
  return (
    <div className="wrapper">
      <Title text="About Me" icon={<SiInformatica />} />
      <div className="text-lg tracking-wide flex flex-col gap-6">
        <p>
          I am a Front-End Web Developer with 2 years of experience in Next.js,
          React, and Tailwind CSS. I specialize in building user-friendly and
          visually appealing websites and applications using the latest
          front-end technologies. My expertise in Next.js, React, and Tailwind
          CSS allows me to create dynamic and responsive web pages that provide
          an engaging user experience.
        </p>
        <p>
          As a Front-End Web Developer, I am constantly learning and staying
          up-to-date with the latest trends and technologies in the industry. I
          am passionate about creating intuitive and engaging user interfaces
          that provide a seamless user experience. My attention to detail and
          ability to work well in a fast-paced environment make me a valuable
          asset to any team. I am always striving to improve my skills and
          deliver high-quality work that exceeds expectations.
        </p>
        <p>
          In addition to my technical skills, I am also a strong communicator
          and team player. I enjoy collaborating with others to find the best
          solutions to complex problems. I am always open to feedback and
          willing to go the extra mile to ensure that projects are completed on
          time and to the highest standards. My goal is to continue growing as a
          Front-End Web Developer and to make a positive impact in the tech
          industry.
        </p>
      </div>
    </div>
  )
}

export default AboutMe
