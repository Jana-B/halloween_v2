import "../styles/footer.css";
import { FaGithub, FaFreeCodeCamp, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <p className="footer-name">© Jana B., 2024</p>
      <p className="footer-links">
        Find me on{" "}
        <a
          href="https://github.com/Jana-B"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.freecodecamp.org/sathiwaari"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon"
        >
          <FaFreeCodeCamp />
        </a>{" "}
        <a
          href="https://de.linkedin.com/in/jana-bergmans-46b045200"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon"
        >
          <FaLinkedin />
        </a>
      </p>
    </div>
  );
};

export default Footer;
