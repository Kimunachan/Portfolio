import NavbarItem from "./Navbaritem";
import styles from "../../utils/styles/components/navbar.module.scss";
import { useState } from "react";

const Navbar = () => {
  const [activeElement, setActiveElement] = useState("");
  return (
    <ul className={styles.list}>
      <NavbarItem
        link="#"
        title="Home"
        activeElement={activeElement}
        setActiveElement={setActiveElement}
      />
      <NavbarItem
        link="#about"
        title="About me"
        activeElement={activeElement}
        setActiveElement={setActiveElement}
      />
      <NavbarItem
        link="#skills"
        title="Skills"
        activeElement={activeElement}
        setActiveElement={setActiveElement}
      />
      <NavbarItem
        link="#programs"
        title="Programs I use"
        activeElement={activeElement}
        setActiveElement={setActiveElement}
      />
      <NavbarItem
        link="#projects"
        title="Projects"
        activeElement={activeElement}
        setActiveElement={setActiveElement}
      />
    </ul>
  );
};

export default Navbar;
