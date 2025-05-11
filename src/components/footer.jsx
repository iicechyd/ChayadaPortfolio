import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer({ image, title, description }) {
  return (
    <footer className="App-footer">
      <div
        className="container"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <p style={{ margin: 0 }}>
          © Copyright 2025, All Rights Reserved by IIcechyd
        </p>
        <span style={{ margin: 0 }}>
          <a href="https://github.com/iicechyd">
            <FontAwesomeIcon
              icon={faGithub}
              style={{ cursor: "pointer", color: "white", transform: "scale(1.3)"}}
            />
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
