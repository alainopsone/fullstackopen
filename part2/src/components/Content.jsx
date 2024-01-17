import Part from "./Part"

const Content = props => {
  return (
    <>
      <Part parts={`${props.parts[0].name} ${props.parts[0].exercises}`} />
      <Part parts={`${props.parts[1].name} ${props.parts[1].exercises}`} />
      <Part parts={`${props.parts[2].name} ${props.parts[2].exercises}`} />
    </>
  )
}

export default Content