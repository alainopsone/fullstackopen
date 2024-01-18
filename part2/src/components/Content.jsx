import Part from "./Part"

const Content = props => {
  const total = props.parts.reduce((acc, curr) => acc + curr.exercises, 0)

  return (
    <div>
      {props.parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises} />)}
      <p className="mt-4 font-bold">Total exercises: {total}</p>
    </div>
  )
}

export default Content