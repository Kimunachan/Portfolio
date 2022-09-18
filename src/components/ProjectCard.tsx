import { FC } from "react";
import styles from "../utils/styles/components/projectcard.module.scss";

export type Props = {
  link: string;
  description: string;
  name: string;
};

const Project: FC<Props> = ({ link, description, name }) => {
  return (
    <div className={styles.container}>
      <a href={link} target="_blank" rel="noreferrer">
        <div className={styles.project_name}>{name}</div>
        <div className={styles.project_description}>{description}</div>
      </a>
    </div>
  );
};

export default Project;
