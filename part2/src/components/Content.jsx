import Part from "./Part"

const Content = ({ parts }) => {
  return (
    <>
      {parts.map(part => <Part key={part.id} parts={`${part.name} ${part.exercises}`} />)}
    </>
  )
}

export default Content