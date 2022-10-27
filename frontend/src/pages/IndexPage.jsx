import "./IndexPage.css";
import ArrowButton from "@components/ArrowButton"

export default function IndexPage() {
  return (
    <section className="index-page">
      <div className="logo-container">
        <img className="logo" src="src/img/mobile/logo.png" alt="logo" />
      </div>
      <div className="index-button">
          <ArrowButton />
      </div>
    </section>
  );
}
