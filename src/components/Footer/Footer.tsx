import styles from "../../utils/styles/components/footer.module.scss";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <ul className={styles.list}>
      <li>
        <a href="https://github.com/Kimunachan" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </li>
    </ul>
  );
};

export default Footer;
