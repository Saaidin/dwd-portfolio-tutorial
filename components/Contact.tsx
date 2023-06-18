"use client"

import { FiArrowUpRight } from "react-icons/fi"
import SocialLink from "./SocialLink"

const Contact = () => {
  return (
    <div className="wrapper" id="contact">
      <div className="max-w-5xl mx-auto flex flex-col gap-4 items-center justify-center">
        <h2 className="text-2xl font-bold">Let us create awesome products!</h2>
        <p className="text-lg tracking-wide font-medium text-center">
          I am always open to discussing your project, improving your online
          presence, or helping with Your website design and converting
          challenges.
        </p>
        <a href="mailto:dinme73@gmail.com">
          <button className="w-52 h-14 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-950 text-xl font-bold dark:text-white rounded-lg hover:from-indigo-950 hover:to-blue-600 duration-300">
            Say Hello
          </button>
        </a>
      </div>
      <div className="mt-8 flex items-center flex-wrap gap-8 justify-center">
        <SocialLink title="Github" link="https://github.com/Saaidin" />
        <SocialLink title="Youtube" link="#" />
        <SocialLink
          title="Linkedin"
          link="https://www.linkedin.com/in/dinwebdev"
        />
        <SocialLink title="Facebook" link="#" />
        <SocialLink title="Twitter" link="#" />
      </div>
    </div>
  )
}

export default Contact
