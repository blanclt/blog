import Link from "next/link";
import classes from "./header.module.scss";
import classNames from "classnames/bind";
import { BiChevronDown, BiSearch, BiChevronRight } from "react-icons/bi";
import { RiMenu5Fill } from "react-icons/ri";
import Menu from "./menu";
import { useState } from "react";
import data from "../../data/data-navbar";
const cx = classNames.bind(classes);
function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [showNavbar, setShowNavBar] = useState(true);
  return (
    <header className={cx("header")}>
      {showMenu && <Menu className={cx("menu-sub")} />}
      <div className={cx("container")}>
        <RiMenu5Fill
          onClick={() => setShowMenu(!showMenu)}
          className={cx("menu")}
        />
        <Link className={cx("logo")} href="/">
          Bloger
        </Link>
        {showNavbar && (
          <ul  className={cx("navbar")}>
            <li className={cx("link", "home")}>
              <Link href="/">HOME</Link>
            </li>
            <li className={cx("link", "about")}>
              <Link href="/">
                ABOUT
                <BiChevronDown className={cx("about-icon")} />
              </Link>
              <ul className={cx("sub-about")}>
                <li>
                  <Link href="/">Out Team</Link>
                </li>
                <li>
                  <Link href="/">Subscribe</Link>
                </li>
                <li>
                  <Link href="/">Contact</Link>
                </li>
              </ul>
            </li>
            <li className={cx("link", "guides")}>
              <Link href="/">
                GUIDES
                <BiChevronDown className={cx("guides-icon")} />
              </Link>
              <ul className={cx("sub-guides")}>
                <li>
                  <Link href="/">Start up</Link>
                </li>
                <li className={cx("android")}>
                  <Link href="/">
                    Android
                    <BiChevronRight />
                  </Link>

                  <ul className={cx("sub-android")}>
                    <li>
                      <Link href="/">Games</Link>
                    </li>
                    <li>
                      <Link href="/">Coding</Link>
                    </li>
                    <li>
                      <Link href="/">Mobie</Link>
                    </li>
                    <li>
                      <Link href="/">Funding</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/">
                    iOS
                    <BiChevronRight />
                  </Link>
                </li>
              </ul>
            </li>
            <li className={cx("link", "design")}>
              <Link href="/">
                DESIGN
                <BiChevronDown className={cx("design-icon")} />
              </Link>
            </li>
            <li>
              <Link className={cx("link")} href="/">
                SHOP
              </Link>
            </li>
          </ul>
        )}
      </div>
      <div className={cx("search")}>
        <BiSearch className={cx("search-icon")} />
        <button>Let's Talk</button>
      </div>
    </header>
  );
}

export default Header;
