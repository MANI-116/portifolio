type Prop = {
    skillName:string,
    skillPercentage:string
}
const Skill = (props:Prop) => {
  return (
    <div className="skills-data">
    <div className="skills-titles">
      <h3 className="skills-name">{props.skillName}</h3>
      <span className="skills-number">{props.skillPercentage}</span>
    </div>
    <div className="skills-bar">
      <span style={{"width":props.skillPercentage}} className={`skills-percentage ${"skill-"+props.skillName.toLowerCase()}`}></span>
    </div>
  </div>

  )
}

export default Skill
