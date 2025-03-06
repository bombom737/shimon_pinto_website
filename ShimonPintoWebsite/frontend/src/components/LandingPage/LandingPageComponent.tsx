import styles from './LandingPage.module.css';

function LandingPageComponent() {
  return (
    <div className={styles.landingPage}>
      <div className={styles.container}>
        <section id="home">
          <h1>Home Section</h1>
        </section>
        <section id="about">
          <h1>About Section</h1>
        </section>
        <section id="portfolio">
          <h1>Portfolio Section</h1>
        </section>
        <section id="contact">
          <h1>Contact Section</h1>
        </section>
      </div>
    </div>
  );
}

export default LandingPageComponent;
