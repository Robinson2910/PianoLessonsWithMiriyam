import { useState } from "react";

import { NavLink } from "react-router-dom";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="header ">
      <div
        className={`${
          isOpen
            ? "header-box nav-open "
            : "header-box "
        }`}
      >
        <Logo />
        <NavList setIsOpen={setIsOpen} />

        <button className="btn-mobile-nav">
          <ion-icon
            class="icon-mobile-nav"
            name="menu-outline"
            onClick={() =>
              setIsOpen((isOpen) => !isOpen)
            }
          ></ion-icon>

          <ion-icon
            class="icon-mobile-nav"
            name="close-outline"
            onClick={() =>
              setIsOpen((isOpen) => !isOpen)
            }
          ></ion-icon>
        </button>
      </div>
    </header>
  );
}
function Logo() {
  return (
    <img
      alt="piano with miryam logo"
      src="../img/logo.png"
      className="logo"
    />
  );
}
function NavList({ setIsOpen }) {
  return (
    <nav className="main-nav">
      <ul className="main-nav-list">
        <li>
          <NavLink
            to="/"
            className="main-nav-link"
            onClick={() => setIsOpen(false)}
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about us"
            className="main-nav-link"
            onClick={() => setIsOpen(false)}
          >
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact us"
            className="main-nav-link"
            onClick={() => setIsOpen(false)}
          >
            LESSONS
          </NavLink>
        </li>
        <li>
          <a
            href="https://wa.me/917338785700"
            target="_blank"
            className="main-nav-link nav-cta"
            rel="noreferrer"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
