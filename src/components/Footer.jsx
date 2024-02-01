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
          <a href="https://github.com/mhserrano"> Maria Serrano</a> and is
          <a href="https://github.com/mhserrano/e-commerce"> open-sourced.</a>
          <br />
          Design inspired by
          <a href="https://github.com/Abderraouf-Rahmani"> Abderraouf</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
