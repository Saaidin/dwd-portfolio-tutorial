import Image from "next/image"
import ProfileImg from "../public/sbme1.png"

const Banner = () => {
  return (
    <div
      className="wrapper flex flex-col md:flex-row items-center gap-10"
      id="home"
    >
      {/* Image */}
      <div className="w-44 h-44 rounded-full bg-black">
        <Image
          className="w-full h-full rounded-full border-[1px] border-indigo-700 p-2 object-cover"
          src={ProfileImg}
          alt="ProfileImg"
        />
      </div>
      {/* Description */}
      <div className="w-3/4 flex flex-col items-center md:items-start gap-2">
        <h1 className="text-3xl sm:text-5xl text-center font-bold dark:text-white">
          Saaidin Mat Esa
        </h1>
        <h3 className="text-xl md:text-2xl text-center font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-red-300 to-indigo-300 tracking-wide">
          Front-End Web Developer
        </h3>
        <p className="text-base tracking-wide text-center md:text-left">
          A **Front-End Web Developer** is a tech industry professional who
          builds the front portion of websites that customers, guests, or
          clients use on a daily basis. They create websites and applications
          using web languages such as **HTML, CSS, and JavaScript** that allow
          users to access and interact with the site or app. Front-end
          developers are responsible for developing new user-facing features,
          determining the structure and design of web pages, building reusable
          codes, optimizing page loading times, and using a variety of markup
          languages to create the web pages.
        </p>
      </div>
    </div>
  )
}

export default Banner
