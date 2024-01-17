import Header from "./Header"
import Content from "./Content"

const Course = props => {
  return (
    <>
      <Header course={props.course.name} />
      <Content parts={props.course.parts} exercises={props.course.parts.exercises} />
    </>
  )
}

export default Course