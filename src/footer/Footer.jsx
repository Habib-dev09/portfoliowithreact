import styles from './StylesFooter.module.css'

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; 2024 Muhammad Habib. <br />
        All rights reserved.
      </p>
    </section>
  );
}

export default Footer;
