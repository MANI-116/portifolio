import { UilCalendarAlt } from '@iconscout/react-unicons'
type Prop = {
    title:string;
    subtitle:string;
    timeLine:string;

}
const QualificationCard = (props:Prop) => {
  return (
    <div >
      <div>
        <h3 className='qualification__title'>{props.title}</h3>
        <span className='qualification__subtitle'>{props.subtitle}</span>
        <div className='qualification_calendar'>
           <UilCalendarAlt className="inline-block"></UilCalendarAlt>
           {props.timeLine}
        </div>
      </div>
    </div>
  )
}

export default QualificationCard
