import Link from "next/link";
import classes from "./menu.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(classes);
import { BiChevronDown } from "react-icons/bi";

function Menu({ className }) {
  return (
    <div className={cx("menu", className)}>
      <ul className={cx("navbar")}>
        <li className={cx("home")}>
          <Link className={cx("link")} href="/">
            HOME
          </Link>
        </li>
        <li className={cx("about")}>
          <Link className={cx("link", "about-link")} href="/">
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
        <li className={cx("guides")}>
          <Link className={cx("link", "guides-link")} href="/">
            GUIDES
            <BiChevronDown className={cx("guides-icon")} />
          </Link>
          <ul className={cx("sub-guides")}>
            <li>
              <Link href="/">Start up</Link>
            </li>
            <li className={cx("android")}>
              <Link href="/" className={cx("android-link")}>
                Android
                <BiChevronDown className={cx("android-icon")} />
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
            <li className={cx("ios")}>
              <Link href="/" className={cx("ios-link")}>
                iOS
                <BiChevronDown className={cx("ios-icon")} />
              </Link>
              <ul className={cx("sub-ios")}>
                <li>
                  <Link href="/">Musis</Link>
                </li>
                <li>
                  <Link href="/">Bitcoin</Link>
                </li>
                <li>
                  <Link href="/">Disrupt</Link>
                </li>
               
              </ul>
            </li>
          </ul>
        </li>
        <li className={cx("design")}>
          <Link className={cx("link", "design-link")} href="/">
            DESIGN
            <BiChevronDown className={cx("design-icon")} />
          </Link>
          <ul className={cx("sub-design")}>
                <li>
                  <Link href="/">Mockup</Link>
                </li>
                <li>
                  <Link href="/">Health</Link>
                </li>
                <li>
                  <Link href="/">Themes</Link>
                </li>
               
              </ul>
        </li>
        <li className={cx("shop")}>
          <Link className={cx("link")} href="/">
            SHOP
          </Link>
        </li>
      </ul>
      <button className={cx("button")}>Let's Talk</button>
    </div>
  );
}

export default Menu;
