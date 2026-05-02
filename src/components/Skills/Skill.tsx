type Prop = {
    skillName:string,
    skillPercentage:string
}
const Skill = (props:Prop) => {
  return (
    <div className="skills__data">
    <div className="skills__titles">
      <h3 className="skills__name">{props.skillName}</h3>
      <span className="skills__number">{props.skillPercentage}</span>
    </div>
    <div className="skills__bar">
      <span style={{"width":props.skillPercentage}} className={`skills__percentage ${"skill__"+props.skillName.toLowerCase()}`}></span>
    </div>
  </div>

  )
}

export default Skill
