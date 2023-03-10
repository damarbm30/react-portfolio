import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsBriefcase, BsChatSquare } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed bottom-2 z-[99] w-full overflow-hidden lg:bottom-8">
      <div className="container-mx-auto">
        {/* Inner Nav */}
        <div className="mx-auto flex w-full max-w-[460px] justify-between rounded-full px-5 text-2xl text-white/50 backdrop-blur-2xl">
          <NavLink
            to="/"
            className="flex h-[60px] w-[60px] cursor-pointer items-center justify-center"
          >
            <BiHomeAlt />
          </NavLink>
          <NavLink
            to="/about"
            className="flex h-[60px] w-[60px] cursor-pointer items-center justify-center"
          >
            <BiUser />
          </NavLink>
          <NavLink
            to="/works"
            className="flex h-[60px] w-[60px] cursor-pointer items-center justify-center"
          >
            <BsBriefcase />
          </NavLink>
          {/* <NavLink
            to="contact"
            className="flex h-[60px] w-[60px] cursor-pointer items-center justify-center"
            
            
            
          >
            <BsChatSquare />
          </NavLink> */}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
