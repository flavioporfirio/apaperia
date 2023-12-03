import { Logo } from "./Logo";
import { Nav } from "./Nav";

export function Footer() {
  return (
    <div className="footer">
      <div className="nav-footer">
        <Logo />
        <Nav />
      </div>

      <ul className="socials">
        <li>
          <a href="#header">
            <img src="./imgs/facebook.png" alt="" />
          </a>
        </li>
        <li>
          <a href="#header">
            <img src="./imgs/instagram.png" alt="" />
          </a>
        </li>
        <li>
          <a href="#header">
            <img src="./imgs/twitter.png" alt="" />
          </a>
        </li>
      </ul>
    </div>
  );
}
