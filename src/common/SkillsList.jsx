import React from 'react'

function SkillsList({src , skill}) {
  return (
    <span>
            <img src={src} alt="check mark" />
            <p>{skill}</p>
        </span>
  )
}

export default SkillsList
