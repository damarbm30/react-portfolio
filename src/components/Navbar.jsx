import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="fixed bottom-2 z-50 w-full overflow-hidden lg:bottom-8">
      <div className="container-mx-auto">
        {/* Inner Nav */}
        <div className="mx-auto flex w-full max-w-[460px] justify-between rounded-full bg-black/20 px-5 text-2xl text-white/50 backdrop-blur-2xl">
          <Link
            to="home"
            className="flex h-[60px] w-[60px] cursor-pointer items-center justify-center"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
          >
            <BiHomeAlt />
          </Link>
          <Link
            to="about"
            className="flex h-[60px] w-[60px] cursor-pointer items-center justify-center"
            activeClass="active"
            smooth={true}
            spy={true}
          >
            <BiUser />
          </Link>
          <Link
            to="services"
            className="flex h-[60px] w-[60px] cursor-pointer items-center justify-center"
            activeClass="active"
            smooth={true}
            spy={true}
          >
            <BsClipboardData />
          </Link>
          <Link
            to="works"
            className="flex h-[60px] w-[60px] cursor-pointer items-center justify-center"
            activeClass="active"
            smooth={true}
            spy={true}
          >
            <BsBriefcase />
          </Link>
          <Link
            to="contact"
            className="flex h-[60px] w-[60px] cursor-pointer items-center justify-center"
            activeClass="active"
            smooth={true}
            spy={true}
          >
            <BsChatSquare />
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
