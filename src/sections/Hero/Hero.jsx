import Styles from "./HeroStyle.module.css";
import heroimg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";

import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";

import { useState } from "react";
import { useTheme } from "../../common/Theme";

function Hero() {
    const {theme, toggleTheme} = useTheme();
    const themeicon = theme === 'light' ? sun : moon;
    const twittericon = theme === 'light' ?  twitterLight : twitterDark;
    const linkedinicon = theme === 'light' ? linkedinLight : linkedinDark;
    const githubicon = theme === 'light' ? githubLight : githubDark;

  return (
    <section className={Styles.container} id="hero">
      <div className={Styles.colorModeContainer}>
        <img
          className={Styles.hero}
          src={heroimg}
          alt="profile picture of habib"
        />
        <img
          className={Styles.colorMode}
          src={themeicon}
          alt="color change icon"
          onClick={toggleTheme}
        />
      </div>
      <div className="styles.info">
        <h1>
          Muhammad <br /> Habib
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="www.twitter.com/" target="_balnk">
            <img src={twittericon} alt="my twitter link" />
          </a>

          <a href="www.github.com/" target="_balnk">
            <img src={githubicon} alt="my github link" />
          </a>

          <a href="www.linkedin.com/" target="_balnk">
            <img src={linkedinicon} alt="my fb link" />
          </a>
        </span>
        <p className={Styles.description}>
          with a passion for developing modren react app for commercial
          business.
        </p>
        <a href="" download>
            <button className="hover" >Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
