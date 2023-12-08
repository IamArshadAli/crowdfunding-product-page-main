import { useMediaQuery } from "react-responsive";
import { iconCloseMenu, iconHamburger, logo } from "../../assets/images";
import "./Header.css";
import { useState } from "react";

const Header = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={`monitor-bg flex min-h-[18.75rem] justify-between px-6 py-8 md:px-12 md:py-10 lg:px-20 xl:min-h-[25rem] xl:px-[10.25rem] xl:py-12 ${
        !isOpen && "relative"
      }`}
    >
      <div
        className={`absolute inset-0 left-0 top-0 z-0 bg-gradient-to-b from-Black via-transparent ${
          isOpen ? "via-50%" : "via-40%"
        } to-transparent`}
      ></div>
      <figure>
        <img src={logo} alt="Crowdfund Logo" />
      </figure>
      {isMobile && (
        <figure onClick={() => setIsOpen((prev) => !prev)}>
          <img
            src={isOpen ? iconCloseMenu : iconHamburger}
            alt="Hamburger Icon"
            className="mt-1 cursor-pointer"
          />
        </figure>
      )}
      <nav
        className={
          isOpen
            ? "absolute top-[5.5rem] w-full max-w-[20.5rem] rounded-md bg-white shadow-2xl"
            : "hidden md:block md:text-white"
        }
      >
        <ul className="flex flex-col text-lg font-bold md:flex-row md:text-sm md:font-medium">
          <li className="cursor-pointer border-b-2 p-6 md:border-none md:p-0 md:pr-8">
            About
          </li>
          <li className="cursor-pointer border-b-2 p-6 md:border-none md:p-0 md:pr-[1.8rem]">
            Discover
          </li>
          <li className="cursor-pointer p-6 md:p-0">Get Started</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
