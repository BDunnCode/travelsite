import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="border-2 border-red-500 flexBetween max-container
    padding-container relative z-30 py-5">
      <Link href="/">
        Home
      </Link>
      {/* Nav Links Here. Use map, make five link tags using an array. You should render 5 li items inside of a ul */}
      {/*Login Button Not sure if this will use a link tag or button tag , but it will definitely have a little person icon inside and the world login*/}
      {/* After that it gets made reactive, though much of that has been done already with the way he styled the css containers. 
      There needs to be some sort of ternary operator logic happening to determine whether or to the hamburger shows, and then things get restyled 
      according to screensize somehow*/}
    </nav>
  )
}

export default Navbar