import Header from "./Header"
import Content from "./Content"

const Course = props => {
  return (
    <>
      {props.courses.map(course => (
        <div key={course.id} className="mb-8">
          <Header courses={course.name} />
          <Content parts={course.parts} />
        </div>
      ))}
    </>
  )
}

export default Course