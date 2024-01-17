const Header = props => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = props => {
  return (
    <>
      <p>{props.parts}</p>
    </>
  )
}

const Content = props => {
  return (
    <>
      <Part parts={`${props.parts[0].name} ${props.parts[0].exercises}`} />
      <Part parts={`${props.parts[1].name} ${props.parts[1].exercises}`} />
      <Part parts={`${props.parts[2].name} ${props.parts[2].exercises}`} />
    </>
  )
}

const Course = props => {
  return (
    <>
      <Header course={props.course.name} />
      <Content parts={props.course.parts} />
    </>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <>
      <Course course={course} />
    </>
  )
}

export default App