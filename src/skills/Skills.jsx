import React from 'react'
import checkMarkIconDark from '../assets/checkmark-dark.svg'
import checkMarkIconLight from '../assets/checkmark-light.svg'
import styles from './skillstyles.module.css'
import SkillsList from '../common/SkillsList'
import { useTheme } from "../common/Theme";

function Skills() {

  const { theme } = useTheme();
      const checkMarksIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (

    <section id='skill' className={styles.container}>
      
      <h1> skills</h1>

      <div className={styles.skillList}>
       <SkillsList src={checkMarksIcon} skill="HTML"/>
       <SkillsList src={checkMarksIcon} skill="CSS"/>
       <SkillsList src={checkMarksIcon} skill="Boot Strap"/>
       <SkillsList src={checkMarksIcon} skill="Tailwind CSS"/>
       <hr />
      </div>
      <div className={styles.skillList}>
       <SkillsList src={checkMarksIcon} skill="javascript"/>
       <SkillsList src={checkMarksIcon} skill="React JS"/>
       <SkillsList src={checkMarksIcon} skill=" Next JS"/>
       <SkillsList src={checkMarksIcon} skill="Angukar JS"/>
       <hr />
      </div>
    </section>
  )
}

export default Skills;
