import Link from "next/link"
import "./style.css"

const Navbar = () => {
  return (
    <div className='navbarContainer'> 
    <div className="logo">
      <h1>sito</h1>
    </div>
   
      <div className="links" >
        <Link href={'/'}>
        <h3>home</h3>
        </Link>
        <Link href={'/profile'}>
        <h3>profile</h3>
        </Link>
      </div>
   
    </div>
  )
}

export default Navbar