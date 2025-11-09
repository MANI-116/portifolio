import { UilCalendarAlt } from '@iconscout/react-unicons'
type Prop = {
    title:string;
    subtitle:string;
    timeLine:string;

}
const QualificationCard = (props:Prop) => {
  return (
    <div>
        <h3>{props.title}</h3>
        <span>{props.subtitle}</span>
        <span> <UilCalendarAlt></UilCalendarAlt>{props.timeLine}</span>
    </div>
  )
}

export default QualificationCard
