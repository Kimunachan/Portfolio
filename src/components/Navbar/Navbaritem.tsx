import Link from "next/link";
import { FC } from "react";
import styles from "../../utils/styles/components/navbaritem.module.scss";

export type Props = {
  link: string;
  title: string;
};

const NavbarItem: FC<Props> = ({ link, title }) => {
  return (
    <Link href={link}>
      <div className={styles.navbarItem}>{title}</div>
    </Link>
  );
};

export default NavbarItem;
