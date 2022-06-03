
import style from "./navbar.module.scss"
import { links } from "./links";

const Navbar: React.FC = () => {
    return(
       
            <nav className={style.nav}>
                <ul  >
                    {links.map(link => {
                        return <a  key={link.id} href={link.url}>{link.text}</a> 
                    })}
                </ul>
            </nav>
       
    )
}

export default Navbar;