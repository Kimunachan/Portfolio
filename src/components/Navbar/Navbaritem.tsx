import Link from "next/link";
import { FC } from "react";
import styles from "../../utils/styles/components/navbaritem.module.scss";

export type Props = {
  link: string;
  title: string;
  activeElement: string;
  setActiveElement: Function;
};

const NavbarItem: FC<Props> = ({
  link,
  title,
  activeElement,
  setActiveElement,
}) => {
  return (
    <Link href={link}>
      <div
        className={styles.navbarItem}
        onClick={() => setActiveElement(link)}
        id={activeElement === link ? styles.active : ""}
      >
        {title}
      </div>
    </Link>
  );
};

export default NavbarItem;
