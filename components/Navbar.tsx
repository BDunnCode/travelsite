import Image from "next/image"
import Link from "next/link"
import { NAV_LINKS } from "@/constants"

const Navbar = () => {
  return (
    <nav className="flexBetween max-container
    padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="hilink-logo.svg" alt="logo" height={29} width={74} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key}
          className="regular-16 text-gray-50 flexCenter cursor-point pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
      </ul>


      {/*Login Button Not sure if this will use a link tag or button tag , but it will definitely have a little person icon inside and the world login*/}

      
      {/* After that it gets made reactive, though much of that has been done already with the way he styled the css containers. 
      There needs to be some sort of ternary operator logic happening to determine whether or to the hamburger shows, and then things get restyled 
      according to screensize somehow*/}
    </nav>
  )
}

export default Navbar