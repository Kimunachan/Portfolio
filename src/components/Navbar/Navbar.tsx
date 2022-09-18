import NavbarItem from "./Navbaritem";
import styles from "../../utils/styles/components/navbar.module.scss";

const Navbar = () => {
  return (
    <ul className={styles.list}>
      <NavbarItem link="#" title="Home" />
      <NavbarItem link="#about" title="About me" />
      <NavbarItem link="#projects" title="Projects" />
    </ul>
  );
};

export default Navbar;
