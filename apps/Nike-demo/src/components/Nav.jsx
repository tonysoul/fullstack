import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="absolute w-full">
      <div className="max-container">
        <nav className="flex items-center justify-between px-6 py-8">
          <a href="#">
            <img src={headerLogo} alt="logo" />
          </a>
          <ul className="font-montserrat hidden space-x-16 text-lg text-gray-500 lg:flex">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="font-montserrat hidden text-lg font-medium lg:block xl:mr-24">
            <a href="/">Sign in</a>
            <span> / </span>
            <a href="/">Explore now</a>
          </div>
          <div className="lg:hidden">
            <img src={hamburger} alt="hamburger icon" width={25} height={25} />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
