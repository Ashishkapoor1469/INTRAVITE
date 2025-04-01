import NavLg from "./nav/NavLg";
import NavMobo from "./nav/NavMobo";
export default function Navbar(){
  return(
    <>
    <div className="md:block hidden">
    <NavLg/>
    </div>
    <div className="md:hidden block">
<NavMobo/>
    </div>
    </>
  )
}