import Link from "next/link";
import { FC } from "react";
import Image from "next/image";
import styles from "../utils/styles/components/badge.module.scss";

export type Props = {
  link: string;
  img_link: string;
  name: string;
};

const Badge: FC<Props> = ({ link, img_link, name }) => {
  return (
    <div className={styles.container}>
      <a href={link} target="_blank" rel="noreferrer">
        <Image src={img_link} alt="" width={80} height={80} />
        <div className={styles.badge_name}>{name}</div>
      </a>
    </div>
  );
};

export default Badge;
