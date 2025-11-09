type Prop={
    title:string;
} & React.ComponentProps<"div">
const QualificationJourney:React.FC<Prop> = (props:Prop) => {
  return (
    <>
    <h3>{props.title}</h3>
    <div>
      {props.children}

    </div>
    </>
  )
}

export default QualificationJourney