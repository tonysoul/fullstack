import { hamburger } from '../assets/icons';
import { headerLogo } from '../assets/images';
import { navLinks } from '../constants';

const Nav = () => {
  return (
    <header>
      <div className="container mx-auto">
        <nav className='py-8 px-16 flex justify-between items-center '>
          <a href="#"><img src={headerLogo} alt="logo" /></a>
          <ul className='hidden space-x-16 text-gray-500 text-lg lg:flex'>
            {navLinks.map(item=>(
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className='text-lg hidden lg:block'>
            <a href="/">Sign in</a>
            <span> / </span>
            <a href="/">Explore now</a>
          </div>
          <div className='lg:hidden'>
            <img src={hamburger} alt="hamburger icon" width={25} height={25}/>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Nav;