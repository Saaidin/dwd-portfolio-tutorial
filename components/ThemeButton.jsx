import { useTheme } from "next-themes"
import { BsSunFill, BsMoonFill } from "react-icons/bs"

const ThemeButton = () => {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="flex items-center justify-center rounded-lg p-2 transition-all duration-300"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? (
        <BsSunFill className="h-5 w-5 text-orange-300" />
      ) : (
        <BsMoonFill className="h-5 w-5 text-orange-800" />
      )}
    </button>
  )
}

export default ThemeButton
