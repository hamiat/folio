import style from "./navbar.module.scss";
import { links } from "./links";
import Button from "../Button/Button";

const Navbar: React.FC = () => {
  return (
    <nav className={style.nav}>
      <ul>
        {links.map((link) => {
          return (



            <Button> 
              <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer">
            {link.text}
          </a></Button>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
