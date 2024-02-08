import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-links">
        <a href="/">About</a>

        <a href="/">Store locator</a>

        <a href="/">FAQs</a>

        <a href="/">News</a>

        <a href="/">Careers</a>

        <a href="/">Contact Us</a>
      </div>
      <div className="by">
        <p>
          This project was coded by
          <a href="https://github.com/mhserrano" target="_blank">
            {" "}
            Maria Serrano
          </a>{" "}
          and is
          <a href="https://github.com/mhserrano/e-commerce" target="_blank">
            {" "}
            open-sourced.
          </a>
          <br />
          Design inspired by
          <a href="https://github.com/Abderraouf-Rahmani" target="_blank">
            {" "}
            Abderraouf
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
