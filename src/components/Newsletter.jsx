import "./Newsletter.css";

function Newsletter() {
  return (
    <div className="news-container">
      <h3>Newsletter</h3>
      <form>
        <input type="email" placeholder="your@email.com" />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
}

export default Newsletter;
